let sketchPullLegs = function (p) {
 
let acc = 0.3;

let count = 0;
let clik;
let clak;
let clok;

let first;
let second;
let third;
  
let body;
let bodyX = 509;
let bodyY = 215;
  
let leg1;
let leg1X = 501;
let leg1Y = 197;
let leg1X0 = 501;
let leg1Y0 = 197;
let leg1DistX;
let leg1DistY;
let leg1Dragged = false; 
let leg1Bool=false;
let leg1Fall = false;
let leg1Scalar = 5;
let leg1Angle = 0;
  
let leg2;
let leg2X = 409;
let leg2Y = 345;
let leg2X0 = 409;
let leg2Y0 = 345;
let leg2DistX;
let leg2DistY;
let leg2Dragged = false; 
let leg2Bool=false;
let leg2Fall = false;
let leg2Scalar = 6;
let leg2Angle = 0;
  
let leg3;
let leg3X = 436;
let leg3Y = 425;
let leg3X0 = 436;
let leg3Y0 = 425;
let leg3DistX;
let leg3DistY;
let leg3Dragged = false; 
let leg3Bool=false;
let leg3Fall = false;
let leg3Scalar = 5;
let leg3Angle = 0;
  
let leg4;
let leg4X = 700;
let leg4Y = 198;
let leg4X0 = 700;
let leg4Y0 = 198;
let leg4DistX;
let leg4DistY;
let leg4Dragged = false; 
let leg4Bool=false;
let leg4Fall = false;
let leg4Scalar = 6;
let leg4Angle = 0;
  
let leg5;
let leg5X = 723;
let leg5Y = 342;
let leg5X0 = 723;
let leg5Y0 = 342;
let leg5DistX;
let leg5DistY;
let leg5Dragged = false; 
let leg5Bool=false;
let leg5Fall = false;
let leg5Scalar = 5;
let leg5Angle = 0;
  
let leg6;
let leg6X = 768;
let leg6Y = 418;
let leg6X0 = 768;
let leg6Y0 = 418;
let leg6DistX;
let leg6DistY;
let leg6Dragged = false; 
let leg6Bool=false;
let leg6Fall = false;
let leg6Scalar = 6;
let leg6Angle = 0;
  

p.preload = function(){
  body = p.createImg("body.png", "body");
  leg1 = p.createImg("leg1.png", "leg1");
  leg2 = p.createImg("leg2.png", "leg2");
  leg3 = p.createImg("leg3.png", "leg3");
  leg4 = p.createImg("leg4.png", "leg4");
  leg5 = p.createImg("leg5.png", "leg5");
  leg6 = p.createImg("leg6.png", "leg6");
  
  body.hide();
  leg1.hide();
  leg2.hide();
  leg3.hide();
  leg4.hide();
  leg5.hide();
  leg6.hide();

  second = p.select("#S");
  second.hide();
  third = p.select("#T");
  third.hide();
  clak = p.select("#clak");
  clak.hide();
  clak.mousePressed(p.evenMore);
  clok = p.select("#clok");
  clok.hide();
}  
  
p.setup = function(){
  p.createCanvas(1300, 930);
  p.fill(255);
  p.textFont("Courier New");
  p.textSize(20);
  clik = p.select("#clik");
  clik.mousePressed(p.moreText);
  first = p.select("#F");


  
  leg1.id("leg1")
  document.getElementById('leg1').setAttribute('draggable', false);
    leg2.id("leg2")
  document.getElementById('leg2').setAttribute('draggable', false);
    leg3.id("leg3")
  document.getElementById('leg3').setAttribute('draggable', false);
    leg4.id("leg4")
  document.getElementById('leg4').setAttribute('draggable', false);
    leg5.id("leg5")
  document.getElementById('leg5').setAttribute('draggable', false);
    leg6.id("leg6")
  document.getElementById('leg6').setAttribute('draggable', false);
    body.id("body")
  document.getElementById('body').setAttribute('draggable', false);
  
  
  body.position(bodyX, bodyY);
  leg1.position(leg1X, leg1Y);
  leg2.position(leg2X, leg2Y);
  leg3.position(leg3X, leg3Y);
  leg4.position(leg4X, leg4Y);
  leg5.position(leg5X, leg5Y);
  leg6.position(leg6X, leg6Y);
  
  body.show();
  leg1.show();
  leg2.show();
  leg3.show();
  leg4.show();
  leg5.show();
  leg6.show();
}

p.draw = function() {
  
  
  p.background(0);
  body.position(bodyX, bodyY);
  
  leg1X0 = p.constrain(leg1X,0,1203);
  leg1Y0 = p.constrain(leg1Y,0,780);
  
  leg2X0 = p.constrain(leg2X,0,1133);
  leg2Y0 = p.constrain(leg2Y,0,822);
  
  leg3X0 = p.constrain(leg3X,0,1204);
  leg3Y0 = p.constrain(leg3Y,0,750);
  
  leg4X0 = p.constrain(leg4X,0,1205);
  leg4Y0 = p.constrain(leg4Y,0,780);
  
  leg5X0 = p.constrain(leg5X,0,1136);
  leg5Y0 = p.constrain(leg5Y,0,843);
  
  leg6X0 = p.constrain(leg6X,0,1197);
  leg6Y0 = p.constrain(leg6Y,0,743);
  
  leg1.position(leg1X0, leg1Y0);
  leg2.position(leg2X0, leg2Y0);
  leg3.position(leg3X0, leg3Y0);
  leg4.position(leg4X0, leg4Y0);
  leg5.position(leg5X0, leg5Y0);
  leg6.position(leg6X0, leg6Y0);
  
  
  if (count>0){
    p.text("Un peu...",880,250);
  }

  if (count>1){
    p.text("Beaucoup...",930,350);
  }

  if (count>2){
    p.text("Passionnément...",980,450);
  }

  if (count>3){
    p.text("À la folie...",980,550);
  }

  if (count>4){
    p.text("Plus que tout...",930,650);
  }

  if (count>5){
    p.text("Pas du tout...",880,750);
  }



  leg1.mousePressed(p.leg1Move);
  if(leg1Fall){
    leg1X = leg1X + leg1Scalar * p.sin(leg1Angle);
    leg1Y = leg1Y + leg1Scalar * p.cos(leg1Angle);
    leg1Angle = leg1Angle -0.02;
  }


    leg2.mousePressed(p.leg2Move);
  if(leg2Fall){
   leg2X = leg2X + leg2Scalar * p.cos(leg2Angle);
    leg2Y = leg2Y + leg2Scalar * p.sin(leg2Angle);
    leg2Angle = leg2Angle +0.02;
  }
  

    leg3.mousePressed(p.leg3Move);
  if(leg3Fall){
    leg3X = leg3X - leg3Scalar * p.cos(leg3Angle);
    leg3Y = leg3Y - leg3Scalar * p.sin(leg3Angle);
    leg3Angle = leg3Angle -0.02;
  }

  
    leg4.mousePressed(p.leg4Move);
  if(leg4Fall){
   leg4X = leg4X + leg4Scalar * p.cos(leg4Angle);
    leg4Y = leg4Y + leg4Scalar * p.sin(leg4Angle);
    leg4Angle = leg4Angle +0.02;
  }

  
    leg5.mousePressed(p.leg5Move);
  if(leg5Fall){
    leg5X = leg5X + leg5Scalar * p.cos(leg5Angle);
    leg5Y = leg5Y + leg5Scalar * p.sin(leg5Angle);
    leg5Angle = leg5Angle -0.02;
  }
  
    leg6.mousePressed(p.leg6Move);
  if(leg6Fall){
    leg6X = leg6X - leg6Scalar * p.cos(leg6Angle);
    leg6Y = leg6Y - leg6Scalar * p.sin(leg6Angle);
    leg6Angle = leg6Angle +0.02;
  }  
  }
  
p.mouseDragged = function(){
 if(leg1Dragged && !leg1Fall){
      if(!leg1Bool){
       leg1DistX = p.mouseX-501;
       leg1DistY = p.mouseY-197;
       leg1Bool = true;
   }
   leg1X = p.mouseX-leg1DistX;
   leg1Y = p.mouseY-leg1DistY;
 } 
  
  if(leg2Dragged && !leg2Fall){
      if(!leg2Bool){
       leg2DistX = p.mouseX-409;
       leg2DistY = p.mouseY-345;
       leg2Bool = true;
   }
   leg2X = p.mouseX-leg2DistX;
   leg2Y = p.mouseY-leg2DistY;
 } 
  
  if(leg3Dragged && !leg3Fall){
      if(!leg3Bool){
       leg3DistX = p.mouseX-436;
       leg3DistY = p.mouseY-425;
       leg3Bool = true;
   }
   leg3X = p.mouseX-leg3DistX;
   leg3Y = p.mouseY-leg3DistY;
 } 
  
  if(leg4Dragged && !leg4Fall){
      if(!leg4Bool){
       leg4DistX = p.mouseX-700;
       leg4DistY = p.mouseY-198;
       leg4Bool = true;
   }
   leg4X = p.mouseX-leg4DistX;
   leg4Y = p.mouseY-leg4DistY;
 } 
  
  if(leg5Dragged && !leg5Fall){
      if(!leg5Bool){
       leg5DistX = p.mouseX-723;
       leg5DistY = p.mouseY-342;
       leg5Bool = true;
   }
   leg5X = p.mouseX-leg5DistX;
   leg5Y = p.mouseY-leg5DistY;
 } 
  
  if(leg6Dragged && !leg6Fall){
      if(!leg6Bool){
       leg6DistX = p.mouseX-768;
       leg6DistY = p.mouseY-418;
       leg6Bool = true;
   }
   leg6X = p.mouseX-leg6DistX;
   leg6Y = p.mouseY-leg6DistY;
 } 
}
  
p.mouseReleased = function(){
  if(leg1Dragged){
    if(!leg1Fall){count ++;}
    leg1Fall = true;
   }
  
  if(leg2Dragged){
    if(!leg2Fall){count ++;}
    leg2Fall = true;
  }
  
  if(leg3Dragged){
    if(!leg3Fall){count ++;}
    leg3Fall = true;
  }
  
  if(leg4Dragged){
    if(!leg4Fall){count ++;}
    leg4Fall = true;
  }
  
  if(leg5Dragged){
    if(!leg5Fall){count ++;}
    leg5Fall = true;
  }

  if(leg6Dragged){
    if(!leg6Fall){count ++;}
    leg6Fall = true;
  }
}

p.leg1Move = function(){
  leg1Dragged = true;
}
  
p.leg2Move = function(){
  leg2Dragged = true;
}
  
p.leg3Move = function(){
  leg3Dragged = true;
}

p.leg4Move = function(){
  leg4Dragged = true;
}
  
p.leg5Move = function(){
  leg5Dragged = true;
}
  
p.leg6Move = function(){
  leg6Dragged = true;
}

p.moreText = function(){
  leg1.addClass("nope");
  leg2.addClass("nope");
  leg3.addClass("nope");
  leg4.addClass("nope");
  leg5.addClass("nope");
  leg6.addClass("nope");

first.hide();
second.show();
clik.hide();
clak.show();
count = -10;
}

p.evenMore = function(){
second.hide();
third.show();
clak.hide();
clok.show();
}
};

let myPullLegs= new p5(sketchPullLegs); 