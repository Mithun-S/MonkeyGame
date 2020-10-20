var monkey, monkey_running;
var Bananas, bananaImage, Rocks, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function spawnBananas() {
  //write code here to spawn the Bananas
  if (frameCount % 60 === 0) {
    Bananas = createSprite(500, 220, 40, 10);
    Bananas.y = Math.round(random(190, 220));
    Bananas.addImage(bananaImage);
    Bananas.velocityX = -3;
    Bananas.scale = 0.1;
  }
}

function spawnObstacles() {
  //write code here to spawn the Bananas
  if (frameCount % 100 === 0) {
    Rocks = createSprite(500, 315, 40, 10);
    Rocks.addImage(obstacleImage);
    Rocks.velocityX = -3;
    Rocks.scale = 0.169;
  }

}

function setup() {

  //creating monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  //creating ground
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  invisibleGround = createSprite(400, 352, 900, 10);
  invisibleGround.visible = false;
}


function draw() {

  background(225);

  ground.x = ground.width / 2;
  console.log(ground.x);
  background(255);
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space") && monkey.y >= 310) {
    monkey.velocityY = -14;
  }

  //gravity
  monkey.velocityY = monkey.velocityY + 0.6;

  spawnBananas();

  spawnObstacles();

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(invisibleGround);

  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time: " + survivalTime, 100, 50);

  drawSprites();

}