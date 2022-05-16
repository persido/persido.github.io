//global variables to control interactivity
let blinkAmount = 0;
let talkAmount = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //mapping x and y mouse coords to range from zero to one
  blinkAmount = map(mouseX, 0, width, 0, 1, 1);
  talkAmount = map(mouseY, 0, height, 0, 1, 1);
  
  //draw the face
  background(220);
  stroke(0); //black outline
  
  fill(240,200,160); //skin color fill
  ellipse(width/2, height/2, 100,130); //face
  
  fill(255); //white for eyes
  ellipse(width/2 - 20, height/2 - 15, 20, 15*blinkAmount); //white of eye
  ellipse(width/2 + 20, height/2 - 15, 20, 15*blinkAmount);
  
  noStroke();
  
  fill(0,0,255); //blue for eyes
  ellipse(width/2 - 20, height/2 - 15, 10, 10*blinkAmount); //blue iris
  ellipse(width/2 + 20, height/2 - 15, 10, 10*blinkAmount);
  
  fill(0); //black for mouth & pupils
  
  ellipse(width/2 - 20, height/2 - 15, 4, 4*blinkAmount); //black pupil
  ellipse(width/2 + 20, height/2 - 15, 4, 4*blinkAmount);
  
  ellipse(width/2, height/2 + 25, 50, 15*talkAmount); //mouth
}