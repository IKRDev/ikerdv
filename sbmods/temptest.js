// Mod testing with temperature

// Code fixes by @O-01-67

let teVs = {
  min: 0,
  max: 10000
}

function componentToHex(number) {
	if(isNaN(number)) { number = 0 };
	number = Math.max(0,Math.min(255,Math.round(number))).toString(16);
	if(number.length == 1) {
		number = "0" + number;
	};
	return number;
};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// Function from August Miller
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

elements.tmptst = {
    color: "#000000",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
    tick: function(pixel) {
        pixel.color = rgbToHex(scale(pixel.temp, teVs.min, teVs.max, 0, 255), 0, 0)
    },
};
