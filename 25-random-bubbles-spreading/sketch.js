var bubbles = [];
function setup(){
  createCanvas(windowWidth,windowHeight);
  for(var i =0; i < windowWidth; i++){
    bubbles[i] = {
      x:0,
      y:0,
     display: function(){
        stroke("white");
        noFill();
        ellipse(this.x,this.y,25,25);
      },
      move: function(){
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
      }
    }
  }
}
function draw(){
  translate(mouseX,mouseY);
  background(0);
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}
