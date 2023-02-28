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
function groundAndSky() {
  push();
  noStroke();
  fill(0, 128, 0);
  rect(0, 550, width, 60);
  fill(173, 216, 230);
  rect(0, 0, width, 550);
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
function gameOver() {
  fill(255, 255, 255);
  textSize(65);
  text("GAME OVER", -60, -200);
  let noteText = "You can press down the Enter key to replay the game!";
  fill(0, 0, 0);
  textSize(16);
  text(noteText, -55, -160);
}
function winPage() {
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", -20, -200);
}
let rocketX = 200;
let rocketY = -200;
let gravity = 10;
let acceleration = 0.2;
let gameActive = true;
function draw() {
  background(255, 255, 255);
  groundAndSky();
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
    //to redGround
    if (keyIsDown(37)) {
      rocketX = rocketX - 2;
    }
    //to blueGround
    if (keyIsDown(39)) {
      rocketX = rocketX + 2;
    }
  }

  // judge for redGround
  if (rocketY >= 330 && rocketX > -80 && rocketX < 75) {
    gameActive = false;
    if (gravity > 5) gameOver();
    else winPage();
  }
  // judge for blueGround
  if (rocketY >= 330 && rocketX > 330 && rocketX < 470) {
    gameActive = false;
    if (gravity > 5) gameOver();
    else winPage();
  }

  // for the grass
  if (rocketY > 360) {
    gameActive = false;
    if (gravity > 5) gameOver();
    else winPage();
  }

  // if (rocketY > 360) {
  //   gameActive = false;
  //   if (gravity > 5)
  //   console.log("loose");
  //   else console.log("win");
  // }
}
