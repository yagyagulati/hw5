var x = 230;
var y = 220;
var x1 = 230;
var y1 = 220;
var x2 = 230;
var y2 = 220;
var x3 = 230;
var y3 = 220;
var x4 = 230;
var y4 = 220;
var x5 = 230;
var y5 = 220;
var x6 = 230;
var y6 = 220;
var x7 = 230;
var y7 = 220;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  fill(255,255,255)
	rect(0, 200, x, 20);
  
  // draw drip
 fill(0,50,255);
	ellipse(x, y, 10);
  ellipse(x1, y1, 15);
	ellipse(x2, y2, 8);
  ellipse(x3, y3, 13);
	ellipse(x4, y4, 10);
  ellipse(x5, y5, 15);
	ellipse(x6, y6, 8);
  ellipse(x7, y7, 13);

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3
	y1=y1+4
	y2=y2+5
	y3=y3+2
	y4 = y4+5
	y5 = y6+1
	y6 = y6+6
	y7 = y7+3
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
	 if (y1 > height*2) {
    // reset
    y1 = 220;
  }
	 if (y2 > height*2) {
    // reset
    y2 = 220;
  }
	 if (y3 > height*2) {
    // reset
    y3 = 220;
  }
	 if (y4 > height*2) {
    // reset
    y4 = 220;
  }
	 if (y5 > height*2) {
    // reset
    y5 = 220;
  }
	 if (y6 > height*2) {
    // reset
    y6 = 220;
  }
	if (y7> height*2){
		y7=220}
}