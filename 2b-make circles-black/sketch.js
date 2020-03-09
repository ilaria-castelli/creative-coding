function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0,0,0);
  // put setup code here
}

function draw() {
  // put drawing code here
  strokeWeight(1)
  stroke(255,255,255);
  noFill();
  ellipse(mouseX,mouseY,100,100);
}
