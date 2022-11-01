//Canvas: (1, 1)[top left] - (165, 76)[bottom right]
//X - Left: x- | Right: x+
//y - Up: y- | Down: y+

// fill from (fx, fy) to (tx, ty) with (elm)
function fill(fx, fy, tx, ty, elm) {
  for(var x=Math.min(fx, tx); x<Math.max(fx, tx); x++) {
    for(var y=Math.max(fy, ty); y>Math.min(fy, ty); y--) {
      if(x > 1) {
        if(x < 164) {
          if(y > 1) {
            if(y < 75) {
              createPixel(elm, x, y)
            }
          }
        }
      }
    }
  }
}

elements.mixer = {
  color:"#fff3db",
  //behavior:behaviors.SOLID,
  category:"machines",
  state:"solid",
  temp:1,
  tick: function(pixel) {
    fill(pixel.x - Math.floor(pixel.temp / 2), pixel.y + Math.floor(pixel.temp / 2), pixel.x + Math.floor(pixel.temp / 2), pixel.y - Math.floor(pixel.temp / 2), "mix")
  }
}

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Your code here
    console.log("Hello World!");
    fill(1, 1, 75, 75, "water")
    //pixelMap[0][0].element = "water";
});
