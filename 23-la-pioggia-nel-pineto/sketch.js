
function preload(){
  // put preload code here
}

var x = 0, y = 0;
var stepSize = 200.0;
var letters = "Taci. Su le soglie del bosco non odo parole che dici umane; ma odo parole più nuove che parlano gocciole e foglie lontane. Ascolta. Piove dalle nuvole sparse. Piove su le tamerici salmastre ed arse, piove su i pini scagliosi ed irti, piove su i mirti divini, su le ginestre fulgenti di fiori accolti, su i ginepri folti di coccole aulenti, piove su i nostri vólti silvani, piove su le nostre mani ignude, su i nostri vestimenti leggieri, su i freschi pensieri che l’anima schiude novella, su la favola bella che ieri t’illuse, che oggi m’illude, o Ermione.";
var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;



function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
   smooth();
   cursor(CROSS);

   x = mouseX;
   y = mouseY;

 textAlign(LEFT);
 fill(255);

}


function draw() {
  // put drawing code here

  if (mouseOver) {
  var d = dist(x,y, mouseX, mouseY);
  textFont('Arial');
  textSize(fontSizeMin+d/2)
  var newLetter = letters.charAt(counter);;
  stepSize = textWidth(newLetter);

  if (d > stepSize) {
    var angle = atan2(mouseY-y, mouseX-x);

    push();
    translate(x, y);
    rotate(angle + random(angleDistortion));
    text(newLetter, 0, 0);
    pop();

    counter++;
   if (counter > letters.length-1) counter = 0;

    x = x + cos(angle) * stepSize;
    y = y + sin(angle) * stepSize;
  }
}
}

function mouseOver() {
x = mouseX;
y = mouseY;
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

}
