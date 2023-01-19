/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// Grid 
// draw x an o 
// Turn tracker 
// check if someone wins 
// score counter 

let grids = ["1","2","3","4","5","6","7","8","9"]

let playerTurn = true; 

let currentSign = "x";

// Description of setup
function setup() {
    createCanvas(600, 600);
    background(100);

    
}
// Description of draw
function draw(){
    background(100)
    drawGrid();

    checkWin();


}
function checkWin() {
    if (grids[0] === grids[1] && grids[1] === grids[2]) {
        print('X wins');
    }
}

function drawGrid() {
    textAlign(CENTER, CENTER);
    textSize(50)
    let rowDistance = 25;
    let colDistance = 25;
    let m = 0;

    for (let i = 0; i < 3; i++)
    {
        for (let k = 0; k < 3; k++)
        {
            text(grids[m], k + colDistance, i + rowDistance);
            colDistance += 25;
            m++;
            colDistance += width/3;
        }
        rowDistance += height/3;
        colDistance = 25;
       //print(rowDistance);
    }
}

function mousePressed() {

    if (playerTurn){
        currentSign = "X";
        playerTurn = false;
    } else {
        currentSign = "O";
        playerTurn = true;
    }

    print(mouseX,mouseY);
    if (mouseX<200 && mouseY < 200) {
        grids[0] = currentSign
    }
    else if (mouseX < 400 && mouseY < 200) 
    {
        grids[1] = currentSign
    }
    else if (mouseX < 600 && mouseY < 200)
    {
        grids[2] = currentSign
    }
    else if (mouseX < 200 && mouseY < 400)
    {
        grids[3] = currentSign
    }
    else if (mouseX < 400 && mouseY < 400)
    {
        grids[4] = currentSign
    }

    else if (mouseX < 600 && mouseY < 400)
    {
        grids[5] = currentSign
    }
    else if (mouseX < 200 && mouseY < 600)
    {
        grids[6] = currentSign
    }
    else if (mouseX < 400 && mouseY < 600)
    {
        grids[7] = currentSign
    }
    else if (mouseX < 600 && mouseY < 600)
    {
        grids[8] = currentSign
    }


}