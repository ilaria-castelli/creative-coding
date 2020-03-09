function preload() {



  // put preload code here
}
var texs = [];

function setup() {
  textFont('Arial Black')

  createCanvas(windowWidth, windowHeight);
  var texNumber = 10;
  for (var i = 0; i < texNumber; i++) {
    var myTex = new Tex(random(0, width), random(0, height), 10); //x,y,daxiao

    myTex.size = random(10, 60);
    myTex.speed = random(1, 3);
    myTex.color = color(random(255), random(255), random(255));
    texs.push(myTex); //加一个新的球
    
  }
}

function mouseDragged() {
  texs.push(new Tex(mouseX, mouseY));
}

function draw() {
  background(0);

  for (var j = 0; j < texs.length; j++) {
    texs[j].move();
    texs[j].display();
    texs[j].color = color(random(51), random(204), random(102));
  }


}

function Tex(_x, _y, _size) {
  this.x = _x;
  this.y = _y;
  this.speed = 0.5;
  this.color = 'green'
  this.size = _size;

  var yDir = random(-1, 1);
  var xDir = random(-1, 1);


  this.display = function() {
    noStroke();
    fill(this.color);
    textFont('Arial Black')
    textSize(this.size);
    text('Phenomena spreading like this', this.x, this.y);
  }

  this.move = function() {
    fill(this.color);
    this.x = this.x + this.speed * xDir + random(-1, 1);
    this.y = this.y + this.speed * yDir + random(-1, 1);
    if (this.y > windowHeight || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > windowWidth || this.x < 0) {
      xDir = xDir * -1;
    }

  }



}
