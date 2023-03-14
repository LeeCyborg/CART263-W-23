let cam;

function setup() {
  createCanvas(500, 500);
  //create a video capture object
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  /* Basic camera  */
  image(cam, 0, 0, width, width * cam.height / cam.width);
  filter(INVERT);

  /*Example functions */

  //findColor(0);
  //videoFilter();
}
// A function to filter video by looking through all of the pixels 
// and manipulating their value. 
function videoFilter(){
  background(255);
  //load pixels of the camera feed
  cam.loadPixels();

  let counter = 0;
  // Every pixel divided into 4 elements in the array, 
  // 0 is red, 1 is green, 2 is blue, 3 is green, 4 is alpha (opacity)
  for (let i = 0; i < cam.pixels.length; i += 4) {
    cam.pixels[i] = 0; // Get rid of all the red
    cam.pixels[i]+=counter; // Add red in as we  move down the image
    counter+=0.001; // increase counter by a very small amount
  }
  //update pixels and display them
  cam.updatePixels();
  // draw the camera
  image(cam, 0, 0, width, height);
}
// A function to tell you what color is most present in the camera, without
// displaying the camera 
  // 0 for red, 1 for green, 2 for blue
  // set thresh for 100 if no other input
function findColor(c, thresh=100){ 
  background(0);
  // set a counter to keep track of how much of the color there is
  let counter = 0;
  cam.loadPixels();
  // look at every 4th pixel and check it if it is greater than the threshhold. 
  for (let i = 0; i < cam.pixels.length; i += 4) {
    if(cam.pixels[i+c]>thresh){
      counter++;
    }
  }
  // map it to the total pixels and draw a circle
  s = map(counter, 0, (width*height)*4, 0, width); 
  fill(255);
  circle(width/2,height/2,s);
}