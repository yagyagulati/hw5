var x = 210;
var y = 290;
var r = 0;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  for(i = 0; i < 100; i = i + 1) {
  push();
  fill(y);
  translate(x - i, y - 3.5 * i);
  rotate(r+i);
	rect(i , i, 10, 10);
  pop();
  }
  // up 3 pixels
  y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 1
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
}