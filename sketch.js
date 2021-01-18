var score;
var monkey, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var brown,orange;
function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
 var survivalTime=0;
    
createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  monkey.velocityXEach=5;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
   obstacleGroup=new Group();
bananaGroup=new Group();
score=0;
}


function draw() {
  background(255);
if(ground.x<0){
  ground.x=ground.width/2;
}
if(keyDown("space")&& monkey.y >= 250){
monkey.velocityY= -12;
} 
     monkey.velocityY = monkey.velocityY + 0.8
if(ground.x < 0){
  
  ground.x = ground.width/2;
}
monkey.collide(ground);

createObstacle();
  SpawnFood();
  drawSprites();
stroke("red");
  textSize(20);
  fill("red");
  text("Score:" +score,500,50);
  
  if(obstacleGroup.isTouching(monkey)){
     ground.velocityX = 0;
        monkey.velocityY = 0;
obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);

  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 100,50);
  
}



function createObstacle(){
if(frameCount%300===0){
 var  obstacles=createSprite(800,320,10,40);
  obstacles.velocityX= -6;
  obstacles.addImage(obstacleImage);
  obstacles.scale=0.15;
  obstacles.lifetime=300;
  obstacleGroup.add(obstacles);
  
}
} 
  function SpawnFood(){
    if(frameCount%300===0){
 var  banana=createSprite(600,250,40,10);
      banana.y=random(120,200);
      banana.velocityX=-5;
      banana.lifetime=300;
      monkey.depth= banana.depth+1;
     banana.addImage(bananaImage);
      banana.scale=0.05;
      bananaGroup.add(banana)
      
      
      
    }
    
  }