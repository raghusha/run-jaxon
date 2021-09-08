var bomb,coin,energyDrink,runner;
var bombGroup,coinGroup,energyDrinkGroup;


function preload(){
  //pre-load images
bomb = loadImage ("bomb.png");
coin = loadImage ("coin.png");
energyDrink = loadImage ("energyDrink.png");
path = loadAnimation ("path.png");
power = loadAnimation ("power.png");
runner = loadAnimation ("Runner-1.png","Runner-2.png")


}

function setup(){
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
    if(path.y > 400){
      path.y = height/2;
    }
runner = createSprite(width/2,height-20,20,20);
runner.addAnimation("Runner-1.png","Runner-2.png");
runner.scale=0.09;

bombGroup=new Group();
coinGroup = new Group();
energyDrinkGroup = new Group();


}

function draw() {
  background(0);
  createCanvas(400,400);
  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    runner.collide(edges);
    
    if(path.y > 400){
      path.y = height/2;

      if (bombGroup.isTouching(runner)) {
        bombGroup.destroyEach();
        treasureCollection=treasureCollection+50;
      }
      else if (coinGroup.isTouching(runner)) {
        coinGroup.destroyEach();
        treasureCollection=treasureCollection+100;
        
      }else if(energyDrinkGroup.isTouching(runner)) {
        energyDrinkGroup.destroyEach();
        treasureCollection= treasureCollection + 150;
      }
      
          
          runner.addAnimation("SahilRunning",endImg);
          runner.x=200;
          runner.y=300;
          runner.scale=0.6;
          
          bombGroup.destroyEach();
          coinGroup.destroyEach();
          energyDrinkGroup.destroyEach();
          
          
          bombGroup.setVelocityYEach(0);
          coinGroup.setVelocityYEach(0);
          energyDrinkGroup.setVelocityYEach(0);
     
          
    }
  }
}

drawSprite();

function createBomb() {
  if (World.frameCount % 200 == 0) {
  var bombGroup = createSprite(Math.round(random(50, 350),40, 10, 10));
  bombGroup.addImage(cashImg);
  bombGroup.scale=0.12;
  bombGroup.velocityY = 3;
  bombGroup.lifetime = 150;
  bombGroup.add(bomb);
  }
}

function createCoin() {
  if (World.frameCount % 320 == 0) {
  var coinGroup = createSprite(Math.round(random(50, 350),40, 10, 10));
  coinGroup.addImage(diamondsImg);
  coinGroup.scale=0.03;
  coinGroup.velocityY = 3;
  coinGroup.lifetime = 150;
  coinGroup.add(coin);
}
}

function createEnergyDrink() {
  if (World.frameCount % 410 == 0) {
  var energyDrinkGroup= createSprite(Math.round(random(50, 350),40, 10, 10));
  energyDrinkGroup.addImage(jwelleryImg);
  energyDrinkGroup.scale=0.13;
  energyDrinkGroup.velocityY = 3;
  energyDrinkGroup.lifetime = 150;
  energyDrinkGroup.add(energyDrinkGroup);
  }
}











