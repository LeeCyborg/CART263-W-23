let table;
let points = [];

function preload() {
  table = loadTable("EVA_Data.csv", "csv", "header");
}

function setup() {
  createCanvas(800, 800);
  background(0);
  for (var r = 0; r < table.getRowCount(); r++){ // Cycle through each row of the table
      points[r] = new DataPoint(table.getString(r, 1), 
                                table.getString(r, 2), 
                                table.getString(r, 5), 
                                table.getString(r, 0));
                                // Pass through the values in each row
  }
}
class DataPoint { 
    constructor(country, name, duration, ID){ 
        // Add each data point to the object
        this.country = country;
        this.duration = duration;
        this.name = name;
        this.ID = ID;
        this.x;
        this.y;
    }

    drawBasic(){ 
        this.x = random(width);
        this.y = random(height);
        noStroke();
        ellipse(random(width), random(height),int(this.duration)*3);
    }

    drawCircle(){
        this.radius = 150;
        this.t=0;
        this.angle = map(this.ID, 0, table.getRowCount(), 0, 1)*Math.PI*2;
        this.x = Math.cos(this.angle)*this.radius+width/2;
        this.y = Math.sin(this.angle)*this.radius+height/2;
        noStroke();
        fill(0, 200, 20, 40);
        ellipse(this.x, this.y,int(this.duration)*3);
        fill(0, 100, 200);
        textSize(5);
        push();
        if(this.angle > Math.PI/2 && this.angle < Math.PI*1.5){
          this.t = textWidth(this.name);
          fill(255, 0,0);
          translate(this.x, this.y);
          rotate(this.angle+Math.PI);
        } else { 
          translate(this.x, this.y);
          rotate(this.angle);
        }
        text(this.name, 0-this.t, 0);
        pop();
    }
}


