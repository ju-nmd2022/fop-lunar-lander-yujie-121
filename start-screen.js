function startScreen() {
  push();
  translate(0, 0);
  let noteText = "Press down the SPACE key to decelerate! ";
  fill(0, 0, 0);
  textSize(18);
  text(noteText, 170, 230);
  let note1Text = "LEFT and RIGHT key to moving! ";
  fill(0, 0, 0);
  textSize(18);
  text(note1Text, 190, 280);

  fill(0, 0, 0);
  textSize(40);
  text("Smoothly Landing Challenge ", 80, 150);
  push();
  fill(255, 140, 0);
  textSize(30);
  text("⚠", 130, 230);
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
  rect(217, 350, 200, 70, 30);
  pop();
  let startText = "Click start";
  fill(255, 255, 255);
  textSize(38);
  text(startText, 234, 400);
  pop();
}

function draw() {
  background(255, 255, 255);
  startButton();
  startScreen();
}
function mouseClicked() {
  if (mouseX > 217 && mouseX < 217 + 200 && mouseY > 350 && mouseY < 350 + 70) {
    console.log("button clicked");
  }
  //stage =="game"
}
