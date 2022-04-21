let sketchAnxietyBalls = function (p) {

let insects = [];
let cnv;
let s;
let chance;
let mvt;
let angle;
let turn;
let clicked = false;
  
let minX;
let maxX;
let minY;
let maxY;

let maxVel;
let spee;
let resetSpee;

  
let limitMinX = false;
let limitMaxX = false;
let limitMinY = false;
let limitMaxY = false;
  
p.preload = function(){
  head = p.loadImage("head3d.png");
}
  
p.setup = function() {
  
  //var
  chance = 5;
  mvt = 100;
  
  minX = 755;
  maxX = 1220;
  minY = 130;
  maxY = 580;
  
  maxVel = 15;
  spee = 1.13;
  resetSpee = 0.04;
  
  //canvas and constants
 p.createCanvas(1300, 930);
 p.angleMode(p.DEGREES);

  
  //insects
  for (let i = 0; i < 30; i++) {
    let x = p.random(950,1000);
    let y = p.random(325,375);
    let s = p.random(30,40);
    insects[i] = new Insect(x, y, s);
  }
}

p.draw = function() {
  p.background(0);
  
  //insects
  for (let insect of insects) {
    insect.update();
    insect.show();
    insect.checkLimits();
  }
  
  p.image(head,0,0);
 
}
  
  
  
  class Insect {
  constructor(x, y, s) {
    this.pos = p.createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(p.random(1,1.5));
    this.s = s;
  }

 checkLimits(){
   
   if(this.pos.x < minX){
      this.vel.x = -this.vel.x
       this.vel.mult(spee);
       this.pos.x = minX; 
      
     if (this.vel.x >= maxVel){
      this.vel.mult(resetSpee);
     } 
   }
   
   if(this.pos.x > maxX){ 
       this.vel.x = -this.vel.x
       this.vel.mult(spee);
       this.pos.x = maxX;
      
     if (this.vel.x <= -maxVel){
     this.vel.mult(resetSpee);
     } 
   }
   
   if(this.pos.y < minY){
     this.vel.y = -this.vel.y
       this.vel.mult(spee);
       this.pos.y = minY; 
      
     if (this.vel.y >= maxVel){
      this.vel.mult(resetSpee);
     } 
   }
   
   if(this.pos.y > maxY){   
       this.vel.y = -this.vel.y
       this.vel.mult(spee);
       this.pos.y = maxY;
      
     if (this.vel.y <= -maxVel){
     this.vel.mult(resetSpee);
     } 
   }
}
    
  update() {
    this.pos.add(this.vel);  
  }

  show() {  
    
    p.fill(255);
    p.stroke(255);
    
  s = this.s;  

  angle = p.atan(this.vel.y/this.vel.x);

  //translate
  p.push();
  p.translate(this.pos.x,this.pos.y);
    if(this.vel.x<0){
       p.rotate(angle-90);
    }else{
        p.rotate(angle+90);
    }

 
  
  //body
  p.beginShape();
    p.vertex(0, -(s*100/150));
    p.bezierVertex((s*25/150), -(s*100/150), (s*40/150), -(s*50/150), (s*40/150), -(s*40/150));
    p.bezierVertex((s*40/150), -(s*15/150), (s*25/150), 0, 0, 0);
    p.bezierVertex(-(s*25/150), 0, -(s*40/150), -(s*15/150), -(s*40/150), -(s*40/150));
    p.bezierVertex(-(s*40/150), -(s*50/150), -(s*25/150), -(s*100/150), 0, -(s*100/150));
    p.endShape();
  p.bezier(-(s*28/150),-(s*78/150),-(s*10/150),-(s*55/150),(s*10/150),-(s*55/150),(s*28/150),-(s*78/150));
  
  
  //head 
  p.bezier(-(s*12/150),-(s*97/150),-(s*10/150),-(s*113/150),(s*10/150),-(s*113/150),(s*12/150),-(s*97/150));

  p.bezier(-(s*5/150),-(s*108/150),-(s*7/150),-(s*110/150),-(s*7/150),-(s*110/150),-(s*4/150),-(s*114/150));
    p.bezier((s*5/150),-(s*108/150),(s*7/150),-(s*110/150),(s*7/150),-(s*110/150),(s*4/150),-(s*114/150));
   
  

  //legs
  p.push();
p.translate(-(s*17/150),-(s*93/150));
if(p.random(10)<chance){
 p.rotate(p.random(-(s*mvt/150),(s*mvt/150))); 
}
p.line(0,0,-(s*21/150),-(s*16/150));
p.line(-(s*21/150),-(s*16/150),-(s*28/150),-(s*45/150));
 p.pop();
  

  p.push();
p.translate((s*17/150),-(s*93/150));
if(p.random(10)<chance){
 p.rotate(p.random(-(s*mvt/150),(s*mvt/150))); 
}
p.line(0,0,(s*21/150),-(s*16/150));
p.line((s*21/150),-(s*16/150),(s*28/150),-(s*45/150));
 p.pop();



p.push();
p.translate(-(s*25/150),-(s*80/150));
if(p.random(10)<chance){
 p.rotate(p.random(-(s*mvt/150),(s*mvt/150))); 
}
p.line(0,0,-(s*25/150),(s*2/150));
p.line(-(s*25/150),(s*2/150),-(s*37/150),(s*22/150));
p.pop();
  
p.push();
p.translate((s*25/150),-(s*80/150));
if(p.random(10)<chance){
 p.rotate(p.random(-(s*mvt/150),(s*mvt/150))); 
}
p.line(0,0,(s*25/150),(s*2/150));
p.line((s*25/150),(s*2/150),(s*37/150),(s*22/150));
p.pop();

p.push();
p.translate(-(s*35/150),-(s*60/150));
if(p.random(10)<chance){
 p.rotate(p.random(-(s*mvt/150),(s*mvt/150))); 
}
p.line(0,0,-(s*18/150),(s*18/150));
p.line(-(s*18/150),(s*18/150),-(s*18/150),(s*45/150));
p.pop();
  
p.push();
p.translate((s*35/150),-(s*60/150));
if(p.random(10)<chance){
 p.rotate(p.random(-(s*mvt/150),(s*mvt/150))); 
}
p.line(0,0,(s*18/150),(s*18/150));
p.line((s*18/150),(s*18/150),(s*18/150),(s*45/150));
p.pop();
  
  p.pop();

  }
}

  
 };

let myAnxietyBalls = new p5(sketchAnxietyBalls); 
