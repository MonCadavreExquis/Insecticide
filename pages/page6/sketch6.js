let sketchYCut = function (p) {
  
let cutBool = false;
let bugBool = false;

let bugs;

let first;
let second;
let third;
let clik;
let clok;
let clak;
  
let head;
let headX = 533;
let headY = 179;
  
let right;
let rightX = 646;
let rightY = 242;
  
let left;
let leftX = 376;
let leftY = 284;

let body;
  
let counter = 0;
let cut = false;

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

let maxVel;
let spee;
let resetSpee;

  
let limitMinX = false;
let limitMaxX = false;
let limitMinY = false;
let limitMaxY = false;
  
  
p.preload = function(){
head = p.loadImage("head.png");
right = p.loadImage("right.png");
left = p.loadImage("left.png");
body = p.loadImage("fullbod.png");
}
  
p.setup = function() {
  p.createCanvas(1300, 930);
  p.stroke(255,0,0);
  p.strokeWeight(6);
  p.setLineDash([10, 10]);
  p.pixelDensity(1);

  first = p.select("#F");
  second = p.select("#S");
  third = p.select("#T");
  clik = p.select("#clik");
  clok = p.select("#clok");
  clak = p.select("#clak");
  bugs = p.select("#bugs")

bugs.hide();
clik.mousePressed(p.moreText);
clok.mousePressed(p.evenMoreText);
clok.hide();
clak.hide();
third.hide();
  second.hide();

p.background(0);  
p.image(body,376,179);

   //var
  chance = 5;
  mvt = 100;
  
  minX = -15;
  maxX = 1315;
  minY = -15;
  maxY = 945;
  
  //canvas and constants
 p.angleMode(p.DEGREES);

  
  //insects
  for (let i = 0; i < 30; i++) {
    let x = p.random(625,675);
    let y = p.random(440,490);
    let s = p.random(30,40);
    insects[i] = new Insect(x, y, s);
  }
  
}

p.draw = function() {
//p.background(0);
  
if (bugBool){
     bugs.show();
     clak.show();
}


 if(cutBool){ 
if(!cut){
   p.loadPixels();
  
  for(let i=0; i<p.width; i++){
     for(let j=0; j<p.height; j++){
       let loc0 = (i + j*p.width)*4;
       let r0,g0,b0;
        r0 = p.pixels[loc0];
        g0 = p.pixels[loc0+1];
        b0 = p.pixels[loc0+2];
       
       
       
      if (r0>200 && g0<50 && b0<50){
        counter++;
       }
     }
  }

  if(counter<80 && counter>0){
    cut = true;
  }
  
  counter = 0;
  
        if(p.mouseX<800 && p.mouseX>100 && p.mouseY<700 && p.mouseY>200){
         
  for(let i=0; i<20; i++){
     for(let j=0; j<20; j++){
        let loc = (p.mouseX+i + (p.mouseY+j)*p.width)*4;
        let r,g,b;
        r = p.pixels[loc];
        g = p.pixels[loc+1];
        b = p.pixels[loc+2];
          
        if(r>200 && g<50 && b<50){
        p.pixels[loc] = 0;
        p.pixels[loc+1] = 0;
        p.pixels[loc+2] = 0;
        p.pixels[loc+3] = 0;
             
        }
      }
  }
        }

  p.updatePixels();
}
  
  if(cut){
    third.hide();

 p.background(0);
    p.strokeWeight(1);
    
      //insects
  for (let insect of insects) {
    insect.update();
    insect.show();
    insect.checkLimits();
  } 
 
   
    if(headY>-200){
      p.image(head, headX, headY);
       headY = headY-1.5;
    }
    
   
    if(leftX>-400){
      p.image(left, leftX, leftY);
      leftX = leftX-1.5;
    }
    
    if(rightX<1300){
      p.image(right, rightX, rightY);
      rightX = rightX + 1.5;
    }
  }
   
  }

}

p.setLineDash = function(list) {
  p.drawingContext.setLineDash(list);
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
      this.pos.x = maxX; 
      bugBool = true;
   }
   
   if(this.pos.x > maxX){ 
       this.pos.x = minX;
       bugBool = true;
   }
   
   if(this.pos.y < minY){
       this.pos.y = maxY; 
       bugBool = true;
   }
   
   if(this.pos.y > maxY){   
       this.pos.y = minY;
       bugBool = true;
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
  
  p.moreText = function(){
    first.hide();
    second.show();
    clik.hide();
    clok.show();
  }
  
  p.evenMoreText = function(){
    second.hide();
    third.show();
    clok.hide();
    cutBool = true;

  }
};

let myYCut= new p5(sketchYCut); 