function rocket(x, y) {
  translate(x, y);
  strokeWeight(3);
  //ejector
  fill(125, 125, 125);
  rect(105, 170, 40, 20, 40);
  // body of rocket
  fill(255, 255, 255);
  rect(100, 100, 50, 82);
  //window of rocket
  fill(95, 158, 160);
  ellipse(125, 125, 30);

  //head of rocket
  fill(165, 42, 42);
  triangle(100, 100, 125, 60, 150, 100);
  //line
  push();
  fill(0, 0, 0);
  strokeWeight(6);
  line(125, 180, 125, 158);
  pop();
  //wings
  fill(25, 25, 112);
  triangle(98, 150, 80, 185, 98, 182);
  triangle(152, 150, 170, 185, 152, 182);
}
function spittingFire() {
  //red fire
  fill(255, 0, 0);
  beginShape();
  vertex(115, 190);
  bezierVertex(125, 230, 125, 230, 135, 190);
  endShape();
  //yellow fire
  fill(255, 165, 0);
  beginShape();
  vertex(120, 190);
  bezierVertex(125, 210, 125, 210, 130, 190);
  endShape();
}
function ground() {
  push();
  noStroke();
  fill(0, 128, 0);
  rect(0, 550, width, 60);
  pop();
}
function redGround() {
  push();
  noStroke();
  fill(165, 42, 42);
  rect(50, 520, 150, 30);
  pop();
}
function blueGround() {
  push();
  noStroke();
  fill(25, 25, 112);
  rect(450, 520, 150, 30);
  pop();
}

let rocketX = 200;
let rocketY = -200;
let gravity = 10;
let acceleration = 0.2;
let gameActive = true;
function draw() {
  background(255, 255, 255);
  ground();
  redGround();
  blueGround();
  rocket(rocketX, rocketY);

  if (gameActive) {
    rocketY = rocketY + gravity;
    gravity = gravity + acceleration;
    if (keyIsDown(32)) {
      spittingFire();
      gravity = gravity - 0.8;
    }
  }
  if (rocketY > 310) {
    gameActive = false;
  }
}
