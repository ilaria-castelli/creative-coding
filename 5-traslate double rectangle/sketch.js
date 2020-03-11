function setup() {
  createCanvas(800, 600);
  background(204);
}

function draw() {
  translate(mouseX,mouseY);
  rect(0,0,30,30);

  // Draw a second smaller rectangle, close to the first one
  translate(35,15);
  rect(0,0,15,15)

}
