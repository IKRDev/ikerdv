function place(element, x, y) {
	currentPixels.push(new Pixel(x, y, element));
}

function rand(min, max) {
	return Math.random() * (max - min) + min;
}

function doWater() {
  if (pixel.start === pixelTicks) {
				return;
			}
			if (pixel.charge && elements[pixel.element].behaviorOn) {
				pixelTick(pixel);
			}
			if (elements[pixel.element].viscosity && (!((Math.random() * 100) < 100 / ((elements[pixel.element].viscosity) ** 0.25)))) {
				var move1Spots = [
					[pixel.x, pixel.y + 1]
				];
			} else {
				var move1Spots = [
					[pixel.x + 1, pixel.y + 1],
					[pixel.x, pixel.y + 1],
					[pixel.x - 1, pixel.y + 1],
				]
			}
			var moved = false;
			for (var i = 0; i < move1Spots.length; i++) {
				var coords = move1Spots[Math.floor(Math.random() * move1Spots.length)];
				if (tryMove(pixel, coords[0], coords[1])) {
					moved = true;
					break;
				} else {
					move1Spots.splice(move1Spots.indexOf(coords), 1);
				}
			}
			if (!moved) {
				if (elements[pixel.element].viscosity === undefined || !(!((Math.random() * 100) < 100 / ((elements[pixel.element].viscosity) ** 0.25)))) {
					if (Math.random() < 0.5) {
						if (!tryMove(pixel, pixel.x + 1, pixel.y)) {
							tryMove(pixel, pixel.x - 1, pixel.y);
						}
					} else {
						if (!tryMove(pixel, pixel.x - 1, pixel.y)) {
							tryMove(pixel, pixel.x + 1, pixel.y);
						}
					}
				}
			}
			doDefaults(pixel);
		}

elements.wp = {
	color: ["#ffb48f", "#ffd991", "#ffad91"],
	behavior: [
		"XX|XX|XX",
		"XX|EX:1|XX",
		"XX|XX|XX",
	],
	category: "energy",
	state: "gas",
	density: 1000,
	//excludeRandom: true,
	//hidden: true,
};

elements.boiling_water = {
	color: elements.water.color,
	behavior: [
		"CR:bubble%15|CR:steam|CR:bubble%15",
		"CR:bubble%15|DL|CR:bubble%15",
		"M1|M1|M1",
	],
	tempLow: 90,
	stateLow: "water",
	category: "liquids",
	heatCapacity: 4.184,
	reactions: elements.water.reactions,
	state: "liquid",
	density: 997,
	conduct: 0.02,
	stain: -0.5,
};

elements.boiling_oil = {
	color: elements.oil.color,
  tempHigh: 400,
  stateHigh: "fire",
  tempLow: 290,
  stateLow: "oil",
  reactions: {"dirt": { "elem1":null, "elem2":"mud" },
                "sand": { "elem1":null, "elem2":"wet_sand" },
              "dry_ice": {"elem1":null, "elem2":"explosion"},},
	tick: function(pixel) {
		if (rand(0, 100) >= 50) {
			//pop
			place("oil", pixel.x + rand(-1, 2), pixel.y + rand(-1, 2));
			place("erase", pixel.x, pixel.y);
		}
    else {
      doWater();
    }
	}
}

elements.water.stateHigh = "boiling_water";
elements.dry_ice.behavior = behaviors.POWDER;
elements.oil.tempLow = -8.8
elements.oil.tempHigh = 300
elements.oil.stateHigh = "boiling_oil"
