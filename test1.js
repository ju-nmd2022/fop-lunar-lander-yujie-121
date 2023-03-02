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
  rect(80, 500, 60, 50);
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
  push();
  resetMatrix(); // resets the origin of the coordinate system to (0,0)
  fill(255, 255, 255);
  textSize(65);
  text("GAME OVER", 150, 200);
  let noteText = "You can press down the Enter key to replay the game!";
  fill(47, 79, 79);
  textSize(16);
  text(noteText, 160, 250);
  pop();
}
function winPageForRedGround() {
  push();
  resetMatrix();
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let hardModeText = "WIN THE HARD MODE";
  fill(165, 42, 42);
  textSize(26);
  text(hardModeText, 210, 250);
  pop();
}
function winPageForBlueGround() {
  push();
  resetMatrix();
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let hardModeText = "WIN THE EASY MODE";
  fill(25, 25, 112);
  textSize(26);
  text(hardModeText, 210, 250);
  pop();
}
function winPageForGrass() {
  push();
  resetMatrix();
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let noteText = "You can press the Enter key to try other landing ground!";
  fill(47, 79, 79);
  textSize(16);
  text(noteText, 160, 250);
  pop();
}

let rocketX = 200;
let rocketY = -200;
let gravity = 10;
let acceleration = 0.2;
let gameActive = true;
function draw() {
  background(255, 255, 255);
  //the scenery for game sreen
  groundAndSky();
  redGround();
  blueGround();

  //game screen
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

  // judgement for redGround
  if (rocketY >= 310 && rocketY < 315 && rocketX > -45 && rocketX < 13) {
    gameActive = false;
    if (gravity > 7) gameOver();
    else winPageForRedGround();
  }
  // judgement for blueGround
  if (rocketY >= 330 && rocketY < 335 && rocketX > 330 && rocketX < 470) {
    gameActive = false;
    if (gravity > 7) gameOver();
    else winPageForBlueGround();
  }

  // for the grass
  if (rocketY > 360) {
    gameActive = false;
    if (gravity > 5) gameOver();
    else winPageForGrass();
  }
}
