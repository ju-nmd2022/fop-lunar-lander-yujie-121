function gameOver() {
  push();
  translate(0, 0);
  fill(255, 255, 255);
  textSize(65);
  text("GAME OVER", 150, 200);
  let noteText = "You can press down the Enter key to replay the game!";
  fill(0, 0, 0);
  textSize(16);
  text(noteText, 160, 250);
  pop();
}
function winPageForGrass() {
  push();
  translate(0, 0);
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let noteText = "You can press down the Enter key to replay the game!";
  fill(0, 0, 0);
  textSize(16);
  text(noteText, 160, 250);
  pop();
}
function winPageForRedGround() {
  push();
  translate(0, 0);
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let hardModeText = "WIN THE HARD MODE";
  fill(0, 128, 128);
  textSize(26);
  text(hardModeText, 210, 250);
  pop();
}
function winPageForBlueGround() {
  push();
  translate(0, 0);
  fill(255, 255, 255);
  textSize(65);
  text("YOU WIN", 200, 200);
  let hardModeText = "WIN THE EASY MODE";
  fill(0, 128, 128);
  textSize(26);
  text(hardModeText, 210, 250);
  pop();
}

function reStartButton() {
  push();
  translate(0, 0);
  strokeWeight(3);
  push();
  stroke(70, 130, 180);
  fill(173, 216, 230);
  rect(217, 250, 205, 70, 30);
  pop();
  let startText = "Play again";
  fill(255, 255, 255);
  textSize(38);
  text(startText, 234, 300);
  fill(0, 0, 0);
  text("Congratulations!", 180, 180);
  pop();
}

function draw() {
  background(255, 255, 255);
  // background(173, 216, 230);
  // gameOver();
  // winPageForRedGround();
  //   winPageForBlueGround();
  reStartButton();
}
function mouseClicked() {
  if (mouseX > 217 && mouseX < 217 + 205 && mouseY > 250 && mouseY < 250 + 70) {
    console.log("button clicked");
  }
  //stage =="game"
}
