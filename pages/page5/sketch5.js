let sketchFlashlight = function (p) {

let body;
let graph;
let clik;
let clak;
let cluk;

let time;

let rendu = 1;
  
p.setup = function() {
  p.createCanvas(1300,930);
  graph = p.createGraphics(1300,930);

  clik = p.select("#clik");
  clik.mousePressed(p.moreText);

  clak = p.select("#clak");
  clak.mousePressed(p.evenMoreText);
  clak.hide();
 
 clok = p.select("#clok");
  clok.mousePressed(p.againEvenMoreText);
  clok.hide();

  cluk = p.select("#cluk");
  cluk.hide();

  p.background(0);

}

  
p.draw = function(){


//p.image(body,376,179);
  
 
  graph.fill(0);
  graph.rect(0,0,1300,930);
  let d=600;
 let  r = 255;
  let b = 0;
  for(let i=0; i<50; i++){
    graph.erase(2*i,0);
      graph.ellipse(p.mouseX,p.mouseY,d,d);
     
      d-=10;
      r-= 10;
      b+=10;
      
      graph.noErase();
  }
 p.fill(255);
  p.textFont("Courier New");
  p.textSize(20);

if(rendu === 1){
  p.text('On ne dort pas bien, quand on est une approximation d’humain.', 20, 30);
  p.text('L’insomnie crée un terrain fertile pour l’infestation.', 20, 58);
 p.text('Dans l’espace avant l’inconscient, il y a le doute.', 20, 86);
 p.text('Ce soir-là, j’essaie de m’endormir, mais je n’ai pas de moutons. ', 20, 142);
 p.text('Je compte les craques, dans le plafond.', 20, 170);
 p.text('Un insecte d’échappe d’une crevasse.', 20, 198);
 p.text('Son corps est petit, rond. ', 20, 226);
 p.text('Le mouvement est furtif ; les pattes, rapides. ', 20, 254);
 p.text('Il s’arrête, un instant. Me regarde.', 20, 310);
 p.text('Est-ce qu’il se reconnaît, dans mon regard vacant? ', 20, 338);
 p.text('Lorsqu’il retourne dans son trou, il m’emmène avec lui.', 20, 366);
 p.text('Je suis aspirée. Dans le sommeil, dans le plafond, je ne suis pas certaine.', 20, 394);
 p.text('Tout à coup, je suis dans un nid. Un terrier. ', 20, 478);
 p.text('Il fait chaud, humide, terreux. Devant moi : une masse fourmillante.', 20, 506);
 p.text('Des insectes se collent entre eux. Ils ont ma taille. Certains, plus grands.', 20, 534);
 p.text('Des bruits minéraux, des petits clics d’articulations. Ils s’ajustent, se mettent à l’aise.', 20, 562);
 p.text('Une antenne est replacée, une patte s’étend et se replie.', 20, 590);
 p.text('« Ssssalut » me siffle un des insectes. Celui qui m’a enlevée.', 20, 646);
 p.text('Sa carapace est nacrée. Luisante, même dans la pénombre. ', 20, 702);
 p.text('On dirait un roi, un dieu... Recouvert de pierre de lune.', 20, 730);
 p.text('« Ssssilencieuse, hein? »', 20, 786);
 p.text('« Oui. » Je ne sais pas quoi dire. ', 20, 842);
}

if (rendu === 2){
  p.text('Je n’ai pas peur de la folie, mais il faut me montrer comment faire.', 20, 30);
 p.text('« Tu es une des nôtres, tu sssssssais? »', 20, 86);
 p.text('Il s’approche de moi, me grimpe dessus. ', 20, 142);
 p.text('Je suis couverte de ses pattes cartilagineuses, pendant un moment.', 20, 170);
 p.text('Puis il s’installe à mes côtés. ', 20, 198);
 p.text('« Pas encore complètement, mais bientôt... »', 20, 254);
 p.text('Je suis confortable, c’est étrange. Comme hypnotisée par la voix bruissante, la tiédeur environnante.', 20, 310);
 p.text('Le cliquetis des créatures qui nous entourent.', 20, 338);
 p.text('Le roi insecte place sa bouche près de mon cou.', 20, 366);
 p.text('Son souffle est moite. Ses mandibules bougent.', 20, 394);
 p.text('« Quand les gens rêvent de nature, tu sais, ils ne rêvent jamais à nous.', 20, 450);
 p.text('Ils dizzzent notre nom avec dédain. » ', 20, 478);
  p.text('Les autres insectes s’approchent de nous. Comme des petits, demandant le réconfort d’un câlin.', 20, 534);
 p.text('« Les gens nous casent dans leurs cauchemars, font des monssssstres de nous. »', 20, 590);
 p.text('Les enfants-insectes nous couvrent de leurs corps minéraux.', 20, 646);
 p.text('« Nous ssssssommes incontrôlables : c’est pour ça que les humains nous détesssstent. »', 20, 702);
 p.text('Je me sens chez nous, au milieu de cet amas ondoyant.', 20, 758);
 p.text('Les créatures bougent, s’ajustent autour de moi.', 20, 786);
 p.text('Elles aussi, écoutent le récit.', 20, 814);

 if(p.millis()>(time+5000)){
    clak.show();
 }
}

if (rendu === 3){
  p.text('« Sssssais-tu comment faire, pour différencier un insecte d’un cheveu,', 20, 30);
 p.text('quand il y a un frisssssson sur la peau? »', 20, 58);
 p.text('J’ai un frisson, sur ma peau. Une caresse froide et délicate.', 20, 114);
 p.text('Le roi attend ma réponse.', 20, 142);
 p.text('« Eum... On peut regarder? »', 20, 198);
 p.text('« Noooon. Regarder, c’est la pire chose à faire.', 20, 254);
 p.text('Les insectes, on peut ssssse transformer en cheveux, quand on nous regarde. »', 20, 282);
 p.text('Une mandibule effleure ma nuque.', 20, 338);
 p.text('« Sssssais-tu comment faire, pour différencier un insecte d’un bouton', 20, 394);
  p.text('quand quelque chose grouille sssssous la peau? »', 20, 422);
 p.text('Quelque chose grouille alors, sous la peau de mon bras. Je ne regarde pas.', 20, 478);
  p.text('« On peut toucher? » je réponds.', 20, 534);
 p.text('« Noooon. Toucher, c’est la pire chose à faire. ', 20, 590);
  p.text('Les insectes, on peut avoir peur, quand on nous touche.', 20, 618);
 p.text('Alors, on se cache sous la peau, ssssans bouger. On fait sssssemblant d’être une partie de toi. »', 20, 646);
 p.text('Sous la peau de mon bras, quelque chose s’installe, et ne bouge pas.', 20, 702);
 p.text('« Quand un insecte sssse convainc qu’il fait partie de toi, c’est presque impossssible de le faire partir.', 20, 758);
 p.text('Il est bien là. Il fait chaud, humide, confortable, dans un humain. ', 20, 786);
p.text('Tu ssssssais, il y a quelques insectes en toi, en ce moment. ', 20, 814);
 p.text('Ils se nourrissent de tes bonheurs, de tes peurs, de tes miettes. »', 20, 842);

if(p.millis()>(time+5000)){
    clok.show();
 }
}

if (rendu === 4){
  p.text('Oui.... Je les sens. Je les sens me grignoter.', 20, 30);
  p.text('« Ssssais-tu comment tu peux savoir qu’un insecte dans ton corps est bien un insecte, ', 20, 86);
 p.text('et pas autre chose?»', 20, 114);
 p.text('Autour de nous : les corps, les antennes s’agitent avec de plus en plus d’enthousiasme.', 20, 170);
 p.text('Des pattes graffignent ici et là ma chair infestée.', 20, 198);
 p.text('« Un inssssecte, ça va exactement où tu ne veux pas que ça aille.', 20, 254);
 p.text('Et peu importe combien tu esssssaies de le faire partir.... L’insecte reste là.', 20, 282);
  p.text('C’est comme ça, que tu peux sssssavoir. »', 20, 310);
 p.text('La masse d’insectes me pousse presque violemment, tout à coup.', 20, 366);
 p.text('Je suis emportée par un courant, arrachée des côtés du roi-insecte.', 20, 394);
  p.text('Il crie pour se faire entendre : un son stridant et pénétrant.', 20, 422);
 p.text('« SSSSAIS-TU COMMENT ÇA FONCTIONNE, UN INSECTE? ÇA VIT DANS TES DOUTES. »', 20, 478);
  p.text('Sa voix, de plus en plus lointaine.', 20, 534);
 p.text('« QUAND IL NE RESTE RIEN D’AUTRE DE TOI... IL RESTE L’INSECTE! »', 20, 590);
  p.text('Et je retombe dans mon lit. ', 20, 646);
 p.text('Dans mon corps mal ajusté.', 20, 674);
 p.text('Dans mes doutes, mon esprit grugé.', 20, 702);
 p.text('Quand je me lève, je ne suis plus moi. ', 20, 730);
 p.text('Quelque chose s’est brisé.', 20, 758);
 p.text('Le vide a pris toute la place.', 20, 786);
if(p.millis()>(time+5000)){
    cluk.show();
 }
}

  p.image(graph,0,0); 
 
}

p.moreText = function(){
  rendu = 2;
  clik.hide();

time = p.millis();
}

p.evenMoreText = function(){
  rendu = 3;
  clak.hide();

  time = p.millis();
}
  
p.againEvenMoreText = function(){
  rendu = 4;
  clok.hide();

time = p.millis();
}

  };

let myFlashlight= new p5(sketchFlashlight); 