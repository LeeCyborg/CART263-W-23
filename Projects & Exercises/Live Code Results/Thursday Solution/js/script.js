/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// make paddles
// make ball 
// make score board
// make paddles move 
// movement of ball 
// tie ball to score 

let p1Score, p2Score;
let paddle1Y;
let paddle2Y;
let paddleSpeed = 5;
let paddleHeight = 30;
//ball variables
var ballX =0; 
var ballY =0; 
var ballSize = 10; 
var BallSpeedX; 
var BallSpeedY;

// Description of setup
function setup() {
    p1Score = 0;
    p2Score = 0;
    createCanvas(500, 500);
    

    paddle1Y = height/2;
    paddle2Y = height/2;
    SpawnBall();
    
    
}
// Description of draw
function draw(){
    background(100);
    paddleTeam1();
    paddleTeam2();
    MovePaddle();
    ballMove();
    handleScore();
    drawScore();


    

}

function handleScore() {
    if(ballX >= width) {
        p1Score ++;
        SpawnBall();
    } else if (ballX <= 0) {
        p2Score ++;
        SpawnBall();
    }
    print("SCORE " + p1Score + " " + p2Score)
}

function paddleTeam1(){
    fill( 0, 255, 0);
    rect(10, paddle1Y, 10, paddleHeight);

}
function paddleTeam2(){
    fill(255, 0, 0);
    rect(width-10, paddle2Y, 10, paddleHeight);

}

function SpawnBall(){

    ellipseMode(CENTER);
    ballX = width / 2;
    ballY = height / 2;
    BallSpeedX = 3;
    BallSpeedY = 6;
    if(p1Score >= 10 || p2Score >= 10){
        BallSpeedX = 0;
        BallSpeedY = 0;
    }

}

function ballMove(){
    circle(ballX, ballY, ballSize);

    ballX += BallSpeedX;
    ballY += BallSpeedY;

   print(ballY >= paddle1Y);
   print("paddeY" + paddle2Y + "bally" + ballY);

    if(ballY >= 490 || ballY <= 10){
        BallSpeedY *= -1;
    }
    if(ballX>=490 && ballY >= paddle2Y && ballY <= paddle2Y + paddleHeight){
        BallSpeedX *= -1;
        print("works");
    }
  
    if (ballX<=23 && ballY >= paddle1Y && ballY <= paddle1Y + paddleHeight){
        BallSpeedX *= -1;
    }
}
/*
function keyPressed(){
    if (keyCode == UP_ARROW){
        print("up arrow");
        paddle2Y -= paddleSpeed;
    } else if (keyCode == DOWN_ARROW){
        paddle2Y += paddleSpeed;
    } else if (keyCode == 87){
        paddle1Y -= paddleSpeed;
    } else if (keyCode == 83){
        paddle1Y += paddleSpeed;
    }
}*/

function MovePaddle(){
    if(keyIsDown(UP_ARROW)){
        paddle2Y -= paddleSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
        paddle2Y += paddleSpeed;
    }
    if(keyIsDown(87)){
        paddle1Y -= paddleSpeed;
    }
    if(keyIsDown(83)){
        paddle1Y += paddleSpeed;
    }
}

function drawScore(){
    textSize(50);
    textAlign(CENTER)
    text(p1Score + "-" + p2Score, width / 2, 100);
}