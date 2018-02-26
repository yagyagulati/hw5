let drops = [];

function setup() {
  createCanvas(400, 400);
	 for (let i = 0; i < 50; i++) {
   let x=10+100*i;
		 drops[i] = new drop(x,200,20);
	 }
}
  
function draw() {
	background(mouseX,random(255),mouseY);
for (let i=0;i<drops.length;i++){
	drops[i].show();
	drops[i].move();
}
	stroke(0);
	fill(0);
	strokeWeight(1);

		text('Inspiration from "The Coding Train"', 50,380);
}

class drop{
	constructor(x,y,r){
		this.x = random(width);
		this.y = random(height);
		this.r= (10,30);
	}
	
	move(){
		this.x = this.x +random(-5,5);
		this.y = this.y+random(-5,5);
	}
	show(){
fill(0,30);
stroke(255,255,0);
		strokeWeight(4);
		ellipse(mouseX,this.y, this.r*2);
		ellipse(mouseX+100,this.y, this.r*2);
		ellipse(this.x,mouseY, this.r*2);
		ellipse(this.x,mouseY+100, this.r*2);

	}
}
