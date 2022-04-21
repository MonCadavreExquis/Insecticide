let sketchTvChest = function (p) {
  
let tvImage;  
let dis;
let disM;
  
let cx;
let cy;
  
p.preload = function(){
  tvImage = p.loadImage("tvchest.png")
}
  
p.setup = function() {
  p.createCanvas(1300, 930);
 
  p.noStroke();
  
  cx = p.width/2;
  cy = p.height/2;
  
}

p.draw = function() {
  p.background(20);
  
  for (let i=0; i<disM*45;i++){
    if(p.random(2)<1){
      p.fill(255,0,0);
    }else{
      if(p.random(2)<1){
      p.fill(0,0,255);
      }else{
      p.fill(255);
    }
    }
    p.rect(p.random(450,800), p.random(p.height),2,2) 
  }

if(p.mouseX>0 && p.mouseX<1300 && p.mouseY<930 && p.mouseY>0){
dis = p.dist(p.mouseX, p.mouseY, cx,cy);
disM = p.map(dis,0, 800, 60,0);
   
  p.frameRate(disM);
}else{
  p.frameRate(5);
}

  p.image(tvImage,0,0);
}
  
  
   };

let myTvChest = new p5(sketchTvChest); 