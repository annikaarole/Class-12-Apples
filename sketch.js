var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples()
{
  if(frameCount % 80 === 0)
  {
    apple = createSprite(100,50,50,50);
    apple.addImage(appleImg);
    apple.y = Math.round(random(100,50));
    apple.scale = 0.03;
    apple.velocityY = 5;
    
    apple.lifetime = 200;
  }
}

function createLeaves()
{
  if(frameCount % 80 === 0)
  {
    leaf = createSprite(300,100,20,20);
    leaf.addImage(leafImg);
    leaf.y = Math.round(random(300,70));
    leaf.scale = 0.05;
    leaf.velocityY = 2;
    
    leaf.lifetime = 100;
  }
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //apple.collide(edges);

  drawSprites();
  createApples();
  createLeaves();

  // motion to left right using arrows
  if(keyDown("left"))
  {
    rabbit.x = rabbit.x - 5;
  }
  else if (keyDown("right"))
  {
    rabbit.x = rabbit.x + 5;
  }
}