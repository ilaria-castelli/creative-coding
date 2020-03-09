function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
}


var iterator = 0;

function draw() {
  iterator ++;
  //var x = noise(iterator/200 + 100) * height;
  var x = iterator;
  var y = noise(iterator/100) * width;

  ellipse(x, y, 10);
  strokeWeight(1);
  stroke(255,255,255,);
  noFill();
}
