let circleX = 200;
let circleY = 150;
let circleRadius = 150;
let angle = (0);

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  describe();
}

function draw() {
  background(0);
  let angle = frameCount % 360;
  noFill();
  strokeWeight(3);

  let pointX = circleX + circleRadius * cos(angle);
  let pointY = circleY - circleRadius * sin(angle);
  fill('');
  circle(pointX, pointY, 100);
}