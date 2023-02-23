function rocket(x, y) {
  translate(x, y);
  strokeWeight(3);
  //ejector
  fill(125, 125, 125);
  rect(105, 170, 40, 20, 40);
  // body of rocket
  fill(255, 255, 255);
  rect(100, 100, 50, 82);

  //   function calculationCenter(position, size) {
  //     return size / 2 + position;
  //   }
  //   const x = calculationCenter(100, 50);
  //   const y = calculationCenter(100, 80);

  // console.log(x);
  //   console.log(y);

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

let rocketY = -200;
let gravity = 15;
function draw() {
  background(255, 255, 255);

  rocket(200, rocketY);
  rocketY = rocketY + gravity;
}
