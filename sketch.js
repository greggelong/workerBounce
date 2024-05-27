let gregs = [];
let img 
function preload(){
    img = loadImage("greg.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER)
  angleMode(DEGREES)
  print(img)
  img.resize(300,0)
  for (let i =0; i<16; i++){
  gregs[i] = new Ball(width/2,height/2);
  }
}

function draw() {
  background(255);
  for (let i =0; i < gregs.length; i++){
    
  gregs[i].update();
  gregs[i].show();
  gregs[i].edges();
  }
}