class Ball {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.clr = color(random(255), random(255), random(255));
     
      this.vel = createVector(random(3,-3),random(3,-3)); // this picks a random dir and mag
    //this.vel = p5.Vector.random2D(); // this only picks direction some theta
      this.sz = random(0.5,1);
      this.ang= random(360)
    }
  
    update() {
      this.pos.add(this.vel); 
      this.ang+=1
      if (this.ang>360) this.ang =0
  
  
    }
  
    show() {
      push()
      translate(this.pos.x,this.pos.y)
      rotate(this.ang)
      
      image(img,0,0, img.width*this.sz,img.height*this.sz);
      pop()
  
  
    }
     
    edges(){
     if (this.pos.x < 0 || this.pos.x > width){
       this.vel.x *= -1;
       
     }
      if (this.pos.y < 0 || this.pos.y > height){
       this.vel.y *=-1;
       
     }
      
      
    }
      
      
  
  
  }