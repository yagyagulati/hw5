var x1 = 60;
var y1 = 60;
var d1 = 60;


function setup() {
  createCanvas(500, 500);
  //colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  for(var i = 0; i < 30; i++) {
    stroke(255);
    fill(255, random(255), random(255));   
		ellipse(x1+i, y1 * i, d1);
    ellipse(x1 + i + 100, y1 * i , d1);
		ellipse(x1 + i+ 200, y1 * i , d1);
    ellipse(x1 + i+300, y1 * i , d1);
    ellipse(x1 + i+400, y1 * i , d1);
  }

  // 1% of the time
  if (random() < 0.01) {
    d1 = random(10, 30);
  }
}