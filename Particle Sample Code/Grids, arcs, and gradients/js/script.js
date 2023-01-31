let ball = []; 
let t = 0;
function setup() {
 colorMode(HSB, 255);
let ncols = 10;
let nrows = 10;
  createCanvas(500, 500);
  for(let i = 0; i < ncols; i++){
    for(let j = 0; j< nrows; j++){
      let x=j*width/(ncols*1.0);
      let y=i*height/(nrows*1.0);
      ball[i*ncols+j] = new Particle(30, x, y);
    }
  }
}
function draw() {
background(0);
 t+=0.05;
  for(let i = 0; i < ball.length; i++){
    var n = noise(i*0.5 + t,i*0.05+t);
    ball[i].move(n*255, 0, t); // Using Perlin noise to make the R
  }
}

class Particle {
  constructor(pSize, x, y) {
    this.x = x+pSize;
    this.y = y+pSize;
    this.c = color(0, 0, 0);
    this.diameter = pSize;
    this.thresh = random(360);
    this.speed=0.5;
  }
  move(r, g, b) {
    this.thresh+=0.005;
    stroke(r,255,255, 100);
     noFill();
     arc(this.x, this.y, 30, 30, 0, this.thresh);
    let from = color(this.thresh, g, 0, 0);
    for(let i = 0; i < 50; i++){
      let interA = lerpColor( color(this.thresh/random(10),255,200, 80), from, i/50);
      stroke(interA);
      strokeWeight(1);
      arc(this.x, this.y, this.diameter+i, this.diameter+i, this.thresh/t, this.thresh/2);
    }
  }
}


