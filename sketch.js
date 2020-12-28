function preload(){
  // put preload code here
}

var myFoglielama;
var fogliosity=[];

function setup() {
createCanvas(windowWidth, windowHeight);
background(255,255,255);
}
//al click
function mousePressed(){

  for( var i = 0; i < 5; i ++){
  myFoglielama = new Foglielama(mouseX, mouseY,40,20);
  //voglio ottenere diverse direzioni
  myFoglielama.speedx= random(3,30);
  myFoglielama.speedy= random(2,20);

  fogliosity.push(myFoglielama);
  }
}

function draw() {




//voglio più foglie
for( var j=0; j< fogliosity.length; j++){
  fogliosity[j].display();
  fogliosity[j].move();

}

textSize(20);
  text('foglielama',40,70);

}


function Foglielama(_x, _y, _width,_height){
  this.x=_x;
  this.y=_y;
  this.width= _width;
  this.height=_height;
  this.color= color(78,230,172);
  this.speedx= 2;
  this.speedy=2;

  this.display= function(){
    push();
    translate(this.x, this.y);
    rotate(frameCount/4);
    fill(this.color);
    ellipse(0, 0, this.width, this.height);
    strokeWeight(1);
    line (-20,0,20,0)//
    bezier(-15,1,-20,0,0,0,0,-10);//
    bezier(0,1, 0,0,15,5,13,7);//
    rect(-26,-1,6,2);
    pop();
  }

  this.move= function(){
    this.x += this.speedx ;
    this.y += this.speedy;

  }
}
