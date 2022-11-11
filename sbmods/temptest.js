// Mod testing with temperature

// Code fixes by @O-01-67

let teVs = {
  min: 0,
  max: 10000
}

// https://www.webtips.dev/webtips/javascript/how-to-clamp-numbers-in-javascript
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const random = (min, max) => Math.random() * (max - min) + min;

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
    behavior: behaviors.SOLID,
    category: "special",
    viscosity: 100000,
    state: "liquid",
    density: 720,
    tick: function(pixel) {
	col = scale(pixel.temp, teVs.min, teVs.max, 0, 255)
        pixel.color = rgbToHex(clamp(col, 0, 255), clamp(col, 0, 255), clamp(col + , 0, 255)+random(1,10));
    },
};
