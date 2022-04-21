let sketch3DImage = function (p) {

let blu;
let re;
let reX = 420;
let reC = 420;
let xoff = 0.0;
let n;
  
p.preload = function() {
 blu = p.loadImage("blu.png");
 re = p.loadImage("re.png");
}
  
p.setup = function() {
  p.createCanvas(1300, 930);
}

p.draw = function() {
  p.background(0);
  p.image(blu,409,197);
  p.image(re, 390+n,197);
  
  

  xoff = xoff + 0.1;
  n = p.noise(xoff) * 40;
  

  
}

};
  let my3DImage= new p5(sketch3DImage); 