var racerSize = 40;
var startX = 0;
var startY = 100;
var speed = 2;


var racer2X = 0;
var racer3X = 0;
var racer4X = 0;

var averageSpeed = 5;
var winningSpeed = 9;
var losingSpeed = 3;


function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);

  strokeWeight(1);

  ellipse(startX, startY, racerSize, racerSize);
  ellipse(racer2X, startY * 2, racerSize, racerSize);
  ellipse(racer3X, startY * 3, racerSize, racerSize);
  ellipse(racer4X, startY * 4, racerSize, racerSize);
    startX = startX + speed;
   racer2X = racer2X + losingSpeed;
   racer3X = racer3X + winningSpeed;
   racer4X = racer4X + averageSpeed;
   
}
