let sketchFirstPage = function (p) {
  
  let a;

p.setup = function() {
  p.createCanvas(1300, 930);
  p.textFont("Courier New");
  p.fill(255);
  p.textAlign(p.CENTER, p.CENTER);
  a = p.createA("pages/page1/page1.html","Commencer");

 a.position(570,640);
}

p.draw = function(){
  p.background(0);
  p.textSize(60);
  p.text("Insecticide",650,400);

  p.textSize(30);
   p.text("par Luana Belinsky",650,490);
}
  
  };
  let myFirstPage= new p5(sketchFirstPage); 