function setup() {
  createCanvas(800, 600);
  background(204);
}

function draw() {
  translate(mouseX,mouseY);
  rotate(frameCount);

  rect(-80,-10,160,20);
}
