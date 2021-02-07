var monkey,monkey_running
var bannana,bannanaImage,obstacle,obstacleImage
var FoodGroup,obstaclegroup
var score,ground
var SurvivalTime

function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bannanaImage=loadImage("banana.png")
obstacleImage=loadImage("obstacle.png")
FoodGroup=new Group()
obstacleGroup=new Group()
}

function setup(){
  createCanvas(670,400)
  score=0
  survivalTime=0

  
  obstacle=createSprite(400,390,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2 
  
  ground=createSprite(0,400,1500,10)
  
  
  bannana=createSprite(400,200,10,10)
  bannana.addImage(bannanaImage)
  bannana.scale=0.1
  
  
  monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
monkey.scale=0.1
}




function draw(){
  background("green")
  fill("black")
  text("SurvivalTime:"+SurvivalTime)
  
  drawSprites()
if(keyDown("space")&&monkey.y>=200){
monkey.velocityY=-12
}



}


















