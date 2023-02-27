//draw the rocket
function rocket(x, y) {
  strokeWeight(3);
  //ejector
  fill(125, 125, 125);
  rect(105, 170, 40, 20, 40);
  // body of rocket
  fill(255, 255, 255);
  rect(100, 100, 50, 82);

  //window of rocket
  // function calculationCenter(position, size) {
  //   return size / 2 + position;
  // }
  // const x = calculationCenter(100, 50);
  // const y = calculationCenter(100, 80);

  // console.log(x);
  // console.log(y);

  fill(95, 158, 160);
  ellipse(x, y - 10, 30);

  //head of rocket
  fill(165, 42, 42);
  triangle(100, 100, x, y - 80, 150, 100);
  //line
  push();
  fill(0, 0, 0);
  strokeWeight(6);
  line(x, y + 40, x, y + 18);
  pop();
  //wings
  fill(25, 25, 112);
  triangle(x - 27, y + 10, x - 45, y + 45, x - 27, y + 42);
  triangle(x + 27, y + 10, x + 45, y + 45, x + 27, y + 42);
}
//draw the fire
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

let rocketY = 100;
let gravity = 1;

function draw() {
  background(255, 255, 255);

  rocket(100, rocketY);
  spittingFire();

  rocketY = rocketY + gravity;
}
