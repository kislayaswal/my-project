var player,bg,playerimg,opponentimg
var opponent,opponentGroup
var bullet,bulletGroup
function preload(){
  bg=loadImage("bg.jpg")
  playerimg=loadImage("ss (2).png")
  opponentimg=loadImage("og (2).png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
 player=createSprite(width/2,height-120,100,10)
 player.addImage(playerimg)
 player.scale=0.4
 opponentGroup=new Group();
 bulletGroup=new Group();
  
  
}

function draw() {
  background(bg);  
 player.x=mouseX
  
 spawnOpponent();
if(keyDown("space")){
  shoot();
}
//bounceOff(movingRect,fixedRect)
  drawSprites();
}
function shoot(){
  bullet=createSprite(player.x,player.y,10,10)
  bullet.shapeColor="red"
  bulletGroup.add(bullet)
  bullet.velocityY=-4
}
function spawnOpponent(){
  if(frameCount%100===0){
    opponent=createSprite(random(50,width-150),0,10,10)
    opponent.addImage(opponentimg)
    opponent.scale=0.3
    opponent.mirrorY(-1)
    opponent.velocityY=+4
    opponentGroup.add(opponent)
  }
  
}
