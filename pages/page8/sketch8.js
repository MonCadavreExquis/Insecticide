let sketch3DImage = function (p) {

let bck = 0;

let boop;
let first;
let second;

let fade = false;

let bool = false;
let inter;
let posneg = 1;
let rand;
  
let blu;
let re;
let blu0;
let re0;
  
let finX = 630;
let finC = 630;
let finOff = 0.0; 
let m;

let reX = 420;
let reC = 420;
let xoff = 0.0;
let n;

let insects = [];
let cnv;
let s;
let chance;
let mvt;
let angle;
let turn;
  
let minX;
let maxX;
let minY;
let maxY;
  
p.preload = function() {
 blu = p.loadImage("blu.png");
 re = p.loadImage("re.png");
 blu0 = p.loadImage("blu0.png");
 re0 = p.loadImage("re0.png");
}
  
p.setup = function() {
  p.createCanvas(1300, 930);
 boop = p.select("#boop");
 boop.mousePressed(p.moreText);

 first = p.select("#F");
 second = p.select("#S");
 second.hide();

 chance = 5;
  mvt = 100;
  
  minX = 15;
  maxX = 1280;
  minY = 15;
  maxY = 910;
   p.angleMode(p.DEGREES);

    //insects
  for (let i = 0; i < 1; i++) {
    let x = p.random(950,1000);
    let y = p.random(325,375);
    let s = p.random(30,40);
    insects[i] = new Insect(x, y, s);
  }
  

  //inter = setInterval(p.switcheroo,1000);
}

p.draw = function() {
   
 
  p.background(0);

  if(!fade){
  
  rand = p.random(20);
  
  if(rand<1){
     p.switcheroo();
  }
   
  if(!bool){
   for(i=0; i<11;i++){
   
   if (rand<3){
     posneg = p.abs(p.random(-1,1));
   }
   
   xoff = xoff + 0.001;
  n = p.noise(xoff) * 20;
p.copy(blu,0,0+50*i,blu.width,50,420+n*i*posneg,197+50*i,blu.width,50);
 } 
  
   for(i=0; i<11;i++){
   
   if (rand<3){
     posneg = p.abs(p.random(-1,1));
   }
   
   xoff = xoff + 0.001;
  n = p.noise(xoff) * 20;
p.copy(re,0,0+50*i,blu.width,50,420+n*i*posneg,197+50*i,blu.width,50);
 }   
  }

  if(bool){
      for(i=0; i<15;i++){
   
   if (rand<3){
     posneg = p.abs(p.random(-1,1));
   }
   
   xoff = xoff + 0.001;
  n = p.noise(xoff) * 20;
p.copy(blu0,0,0+50*i,blu0.width,50,376+n*i*posneg,179+50*i,blu0.width,50);
 } 
  
     for(i=0; i<15;i++){
   
   if (rand<3){
     posneg = p.abs(p.random(-1,1));
   }
   
   xoff = xoff + 0.001;
  n = p.noise(xoff) * 20;
p.copy(re0,0,0+50*i,blu0.width,50,376+n*i*posneg,179+50*i,blu0.width,50);
 } 
  }
}

if(fade){
  p.background(bck);

  
  //insects
  for (let insect of insects) {
    insect.update();
    insect.show();
    insect.checkLimits();
  }

  
  bck = bck + 0.16;
  if (bck> 250){
second.hide();
  }

  p.textFont("Courier New");
 
  p.textAlign(p.CENTER, p.CENTER);
  p.textStyle(p.BOLD);
  p.textSize(45);
  p.fill(0,0,255);
  p.text("FIN.",645,815);
   p.fill(255,0,0,175);
  p.text("FIN.",640+m,815);

  finOff = finOff + 0.1;
  m = p.noise(finOff) * 10;
}
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
   }
   
   if(this.pos.x > maxX){ 
       this.vel.x = -this.vel.x
   }
   
   if(this.pos.y < minY){
     this.vel.y = -this.vel.y
   }
   
   if(this.pos.y > maxY){   
       this.vel.y = -this.vel.y
   }
}
    
  update() {
    this.pos.add(this.vel);  
  }

  show() {  
    
    p.fill(0);
    p.stroke(0);
    
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


  
p.switcheroo = function(){
  bool = !bool;
  
}  


p.moreText = function(){
first.hide();
second.show();
boop.hide();
fade = true;
}

};
  let my3DImage= new p5(sketch3DImage); 