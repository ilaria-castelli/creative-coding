function setup() {
  createCanvas(1300, 700);
  angleMode(DEGREES);
  noStroke();
  background(200);
  frameRate(50);
}

function draw() {
  fill(255)
  arc(frameCount, height/2, 50, 50, frameCount, frameCount+90, PIE);
  fill(0,0,255)
  arc(frameCount, height/2, 50, 50, frameCount+90, frameCount+180, PIE);
  fill(255)
  arc(frameCount, height/2, 50, 50, frameCount+180, frameCount+270, PIE);
  fill(102,255,0)
  arc(frameCount, height/2, 50, 50, frameCount+270, frameCount+360, PIE);
}
