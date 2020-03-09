function setup() {
  createCanvas(600,400)
}

function draw() {
  var x = random() * width;
  var y = random() * height;
  var r = random() * 10;
  ellipse(x, y, r);
}
