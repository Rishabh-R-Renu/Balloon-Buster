var bow ,bowImage; 

var green_balloon, red_balloon ,pink_balloon ,                   blue_balloon ,green_balloonImage ,red_balloonImage ,         pink_balloonImage ,blue_balloonImage;

var background ,backgroundImage;

var arrow ,arrowImage;

var redB;

var greenB;

var blueB;

var pinkB;

var arrowGroup;

var score;

function preload(){
  
  backgroundImage    = loadImage("background0.png");
  
  arrowImage         = loadImage("arrow0.png");
  
  bowImage           = loadImage("bow0.png");
  
  red_balloonImage   = loadImage("red_balloon0.png");
  
  green_balloonImage = loadImage("green_balloon0.png");
  
  pink_balloonImage  = loadImage("pink_balloon0.png");
  
  blue_balloonImage  = loadImage("blue_balloon0.png");
  
  
}

function setup() {
  createCanvas(600, 600);
  
  background = createSprite(0,100,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB       = new Group();
  greenB     = new Group();
  blueB      = new Group();
  pinkB      = new Group();

  arrowGroup = new Group(); 
 
  score      = 0;
}

function draw() {
   
 background.velocityX = -3;
 

 if (background.x < 0){
     background.x = background.width/2;
 }
   
 text("Score: "+ score, 500,50);
 
  
     bow.y = World.mouseY
  
   
   
  if (keyDown("space")) {
     var temp_arrow = createArrow();
     temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  
  pinkBalloon();
  greenBalloon();
  blueBalloon();
  redBalloon();
  createArrow();
  drawSprites();
}


function createArrow() {
  arrow = createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  arrow.setCollider("rectangle",40,10);
  return arrow;
}
  
  
function redBalloon() {
  
  if (frameCount % 100 === 0){
     var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
     red.addImage(red_balloonImage);
     red.velocityX = 1;
     red.scale = 0.1;
     redB.add(red);
     red.setCollider("circle",10,0,40);
     redB.lifetime=600/1;
 }
}
 
function blueBalloon() {
  
  if (frameCount % 200 === 0){
     var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
     blue.addImage(blue_balloonImage);
     blue.velocityX = 1;
     blue.scale = 0.1;
     blueB.add(blue);
     blue.setCollider("circle",10,0,40);
     blueB.lifetime=600/1;
  }  
}

  
function greenBalloon() {
 
  if (frameCount % 300 === 0){
     var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
     green.addImage(green_balloonImage);
     green.velocityX = 1;
     green.scale = 0.1
     greenB.add(green);
     green.setCollider("circle",10,0,40);
     greenB.lifetime=600/1;
  }
}

  
function pinkBalloon() {
 
  if (frameCount % 400 === 0){
     var pink = createSprite(0,Math.round(random(20, 370,)),10, 10);
     pink.addImage(pink_balloonImage);
     pink.velocityX = 1;
     pink.scale = 1
     pinkB.add(pink);
     pink.setCollider("circle",10,0,40);
     pinkB.lifetime=600/1;
  }
}