function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);

  textAlign(CENTER);
  textAlign(CENTER);
  textSize(20)
  textFont("Arial")

  fill("white")
  text("Click and Draw", width/2,height/2+220)

}

 var D = 300, //Diametro Cerchio.
     A = 4, //Angolo di Distanza tra i raggi.
     T = 0,
     x = 0,
     y = 0,
     S = true,
     start = true;
     E = false,
     go= false;

function draw() {
 //background(0)
 //stroke("white")
 //text(go, 20,20)
 //text(T, 50,20)
 //text(E, 80,20)
 //ellipse(width/2,height/2,D,D)

 stroke("white");
 noFill()

 if (start==true) {
   T=T+1;
   stroke(lerpColor(color('#2600FF'), color('#FFFFFF'), T/(360/A)));
   translate(width/2,height/2)
   line(D/2,0,cos(T*A)*(D/2),sin(T*A)*(D/2))
   line(-D/2,0,cos(T*A)*(D/2),sin(T*A)*(D/2))
   if (T==360/A) {start=false;T=0}

 }

 if (E==false) {
 if (mouseIsPressed && go==false) {go=true;  background(0),x=mouseX;y=mouseY,T=0}

 if (go==true) {
   T=T+1;
   stroke(lerpColor(color('#2600FF'), color('#FFFFFF'), T/(360/A)));
   translate(width/2,height/2)
   line(x-width/2,y-height/2,cos(T*A)*(D/2),sin(T*A)*(D/2))
   if (T==360/A) {go=false;T=0}
  }
 }
 else {
   if (mouseIsPressed && go==false) {go=true;x=mouseX;y=mouseY}

 if (go==true) {
   T=T+1;
   stroke(lerpColor(color('#2600FF'), color('#FFFFFF'), T/(360/A)));
   translate(width/2,height/2)
   line(x-width/2,y-height/2,cos(T*A)*(D/2),sin(T*A)*(D/2))
   if (T==360/A) {go=false;T=0}
  }
 }

  /*if (E==true) {
   noStroke();
   fill("white")
   text("Erase mode ON", width/2,(height/2)+40)
  }
  if (E==false) {
   noStroke();
   fill(lerpColor(color(255,255,255,255), color(255,255,255,0),0.01))
   text("Erase mode OFF", width/2,(height/2)+40)
  }*/
}

 function keyReleased() {
  if (go==false) {E=!E;background(0);S=!S};
 }
