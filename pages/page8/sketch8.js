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
  bck = bck + 0.16;
  bck = p.constrain(bck,0,255);

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