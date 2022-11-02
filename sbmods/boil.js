elements.wp = {
    color: ["#ffb48f","#ffd991","#ffad91"],
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

elements.water.stateHigh = "boiling_water";
