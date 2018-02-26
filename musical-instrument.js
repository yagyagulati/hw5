var freqA = 1000;
var freqS = 350;
var freqD = 200;
var freqF = 300;


var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(200, 0, 255);
  textAlign(LEFT);

  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();

  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();

  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();

  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playing) {
    //background(255, 0, 0);
    // } else {
    //  background(255, 0, 255);
    if (keyIsPressed) {
      stroke(mouseX, mouseY,random(255));
	  line(mouseX, mouseY, random(), random());
      oscA.freq(mouseX);
      oscS.freq(mouseY);
      oscD.freq(mouseX+50);
      oscF.freq(mouseY+50);
  
    }
  }
  text('Press A/S/D/F/\n Keys to Play', width / 2, 128);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    background(148, 0, 211);
  } else if (key == 'S') {
    osc = oscS;
    background(75, 0, 130);
  } else if (key == 'D') {
    osc = oscD;
    background(0, 0, 255);
  } else if (key == 'F') {
    osc = oscF;
    background(255, 255, 0);
  } 
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    background(255, 255, 255);
  } else if (key == 'S') {
    osc = oscS;
    background(255, 255, 255);
  } else if (key == 'D') {
    osc = oscD;
    background(255, 255, 255);
  } else if (key == 'F') {
    osc = oscF;
    background(255, 255, 255);
  } 
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
