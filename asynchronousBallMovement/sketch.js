var gamestate=0
var database
var playercount
var form,player,game
var distance=0
var allplayers
var car1, car2,car3,car4,cars
var car1Image,car2Image,car3Image,car4Image
var groundImg,trackImg
var finishedplayers=0
var pastfinish

function preload(){
car1Image=loadImage("images/car1.png")
car2Image=loadImage("images/car2.png")
car3Image=loadImage("images/car3.png")
car4Image=loadImage("images/car4.png")
groundImg=loadImage("images/ground.png")
trackImg=loadImage("images/track.jpg")
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database()
   game=new Game()
   game.getState()
   game.start()
}

function draw(){
    background("white");
  if(playercount===4){
      game.update(1)
  } 
  if(gamestate===1){
      clear()
      game.play()
  }
  if(gamestate===2&&finishedplayers===4){
      game.end()
  }
}


