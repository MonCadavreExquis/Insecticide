let sketchCrookedBody = function (p) {

let button; 
 
let assembled = false;  
  
let body;

let clik;
let clak;
let first;
let second;
let third;

let leftArm;
let leftArmX = 377;
let leftArmY = 310;
let leftArmVect;
let leftArmAngle = 0; 
let leftArmScalar = 5;  
  
let rightArm;
let rightArmX = 701;
let rightArmY = 299;
let rightArmVect;
let rightArmAngle = 0;  
let rightArmScalar = 6;  
  
let leftLeg;
let leftLegX = 479;
let leftLegY = 511;
let leftLegVect;
let leftLegAngle = 0; 
let leftLegScalar = 6;  


let rightLeg;
let rightLegX = 657;
let rightLegY = 512;
let rightLegVect;
let rightLegAngle = 0;  
let rightLegScalar = 4;  
  
p.preload = function(){
body = p.loadImage("body.png");
leftArm = p.loadImage("leftarm.png");
rightArm = p.loadImage("rightarm.png");
leftLeg = p.loadImage("leftleg.png");
rightLeg = p.loadImage("rightleg.png");
}
  
p.setup = function() {
  p.createCanvas(1300, 930);
  p.angleMode(p.DEGREES);
  p.stroke(255);
  p.strokeWeight(4);

  clik = p.select("#clik");
  clak = p.select("#clak");
  first = p.select("#F");
  second = p.select("#S");
  third = p.select("#T");
  
  button = p.createButton("Réassemble-moi");
  button.style('font-size', '24px');
  button.style('color', '#000000');
  button.style('background-color', "#ffffff");
  button.position(1080,550);
  button.mousePressed(p.buttonPressed);
  button.hide();

  clak.hide();
  clik.mousePressed(p.moreText);
  second.hide();
  third.hide();
  
  // leftArmVect = p5.Vector.random2D();
  // rightArmVect = p5.Vector.random2D();
  // leftLegVect = p5.Vector.random2D();
  // rightLegVect = p5.Vector.random2D();
}

p.draw = function() {
p.background(0);
  

p.image(body,577,179);
// p.line(leftArmX+200, leftArmY+32, 593, 342);
// p.line(rightArmX+17, rightArmY+31, 706, 336);
// p.line(leftLegX+128, leftLegY+47, 612, 544); 
// p.line(rightLegX+38, rightLegY+53, 694, 544);   

p.image(leftArm, leftArmX, leftArmY);
p.image(rightArm, rightArmX, rightArmY);
p.image(leftLeg, leftLegX, leftLegY);
p.image(rightLeg, rightLegX, rightLegY);
  

p.leftLegMove();
p.rightLegMove();
p.leftArmMove();
p.rightArmMove();

}

  
p.buttonPressed = function(){
  assembled = true;
  button.hide();
  clak.show();
  second.hide();
  third.show();
}
 
p.leftLegMove = function(){
  if(!assembled){
  leftLegX = leftLegX - leftLegScalar * p.cos(leftLegAngle);
  leftLegY = leftLegY - leftLegScalar * p.sin(leftLegAngle);
  leftLegAngle = leftLegAngle + 2;
}else{
  leftLegX = p.lerp(leftLegX, 479, 0.03);
  leftLegY = p.lerp(leftLegY, 511, 0.03);
}
}  
  
p.rightLegMove = function(){
  if(!assembled){
  rightLegX = rightLegX + rightLegScalar * p.cos(rightLegAngle);
  rightLegY = rightLegY + rightLegScalar * p.sin(rightLegAngle);
  rightLegAngle = rightLegAngle - 1;
}else{
  rightLegX = p.lerp(rightLegX, 657, 0.03);
  rightLegY = p.lerp(rightLegY, 512, 0.03);
}
}  
  
p.leftArmMove = function(){
  if(!assembled){
  leftArmX = leftArmX + leftArmScalar * p.sin(leftArmAngle);
  leftArmY = leftArmY + leftArmScalar * p.cos(leftArmAngle);
  leftArmAngle = leftArmAngle + 1;
}else{
  leftArmX = p.lerp(leftArmX, 377, 0.03);
  leftArmY = p.lerp(leftArmY, 310, 0.03);
}
}  
  
p.rightArmMove = function(){
  if(!assembled){  
  rightArmX = rightArmX + rightArmScalar * p.sin(rightArmAngle);
  rightArmY = rightArmY + rightArmScalar * p.cos(rightArmAngle);
  rightArmAngle = rightArmAngle - 1.5;
}else{
  rightArmX = p.lerp(rightArmX, 701, 0.03);
  rightArmY = p.lerp(rightArmY, 299, 0.03);
}
}    
  
p.moreText = function(){
  clik.hide();
  first.hide();
  second.show();
    button.show();
}

};

let myCrookedBody= new p5(sketchCrookedBody); 