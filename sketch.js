let gregs = [];
let img = [];
function preload() {
  img[0] = loadImage("yuan.png");
  img[1] = loadImage("greg.png");
  img[2] = loadImage("david.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  pixelDensity(1);
  imageMode(CENTER);
  angleMode(DEGREES);
  print(img);
  img[1].resize(300, 0);
  img[0].resize(0, 400);
  img[2].resize(0, 400);
  for (let i = 0; i < 26; i++) {
    gregs[i] = new Ball(width / 2, height / 2);
  }
}

function draw() {
  background(255);
  for (let i = 0; i < gregs.length; i++) {
    gregs[i].update();
    gregs[i].show();
    gregs[i].edges();
  }
}
