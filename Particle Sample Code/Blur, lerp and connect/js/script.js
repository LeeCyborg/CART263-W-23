
let ball = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 50; i++){
    ball[i] = new Particle();
  }
}
function draw() {
  background(0);
  for(let i = 0; i < ball.length; i++){
    ball[i].move();
    ball[i].display();
    ball[i].connect(ball);
    //ball[i].fearMouse();
  }
}


class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = 20;
    this.diameter = random(50);
    this.thresh = 50;
  }
  connect(particles){ 
    for(let i = 0; i < particles.length; i++){
    if (dist(particles[i].x, particles[i].y, this.x, this.y) <= this.thresh) {
        stroke(255);
        line(particles[i].x, particles[i].y, this.x, this.y);
      }
    }
  }
  fearMouse(){ 
      if (dist(this.x, this.y, mouseX, mouseY) <= this.thresh) {
        this.move();
    }
  }

  move() {
      this.newX= this.x+random(-this.speed, this.speed);
      this.newY= this.y+random(-this.speed, this.speed);
      this.y =  lerp(this.y, this.newY, 0.1);
      this.x =  lerp(this.x, this.newX, 0.1);
    
  }

  display() {
    noStroke();
    //drawingContext.filter = 'blur('+String(random(20))+'px)';
    fill(this.x, this.y, this.diameter);
    ellipse(this.x, this.y, this.diameter);
  }
}
