function startScreen() {
  push();
  translate(0, 0);
  let noteText = "Press down the SPACE key to decelerate! ";
  fill(0, 0, 0);
  textSize(18);
  text(noteText, 170, 330);
  let note1Text = "LEFT and RIGHT key to moving! ";
  fill(0, 0, 0);
  textSize(18);
  text(note1Text, 190, 380);
  push();
  fill(255, 140, 0);
  textSize(35);
  text("⚠", 130, 330);
  pop();
  pop();
}
function startButton() {
  push();
  translate(0, 0);
  strokeWeight(3);
  push();
  stroke(70, 130, 180);
  fill(173, 216, 230);
  rect(217, 200, 200, 70, 30);
  pop();
  let startText = "Click start";
  fill(255, 255, 255);
  textSize(38);
  text(startText, 234, 250);
  pop();
}

function draw() {
  background(255, 255, 255);
  startButton();
  startScreen();
}
function mouseClicked() {
  if (mouseX > 217 && mouseX < 217 + 200 && mouseY > 200 && mouseY < 200 + 70) {
    console.log("button clicked");
  }
  //stage =="game"
}
