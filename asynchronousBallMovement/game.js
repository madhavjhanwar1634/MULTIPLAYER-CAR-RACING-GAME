class Game{
    constructor(){
    }

getState(){
    var gamestateref=database.ref("gamestate")
    gamestateref.on("value",function (data){
        gamestate=data.val()
    })   
}
update(state){
    database.ref('/').update({
        gamestate:state
    })    
}
 async start(){
    if(gamestate===0){
        player=new Player()
        var playercountref=await database.ref("playercount").once("value")
        if(playercountref.exists()){
            playercount=playercountref.val()
            player.getcount()
        }

       
        form=new Form()
        form.display()
    }
    car1=createSprite(100,200)
    car1.addImage(car1Image)
    car2=createSprite(300,200)
    car2.addImage(car2Image)
    car3=createSprite(500,200)
    car3.addImage(car3Image)
    car4=createSprite(700,200)
    car4.addImage(car4Image)
    cars=[car1,car2,car3,car4]
    pastfinish=false
}
play(){
    form.hideForm()
     textSize(25)
     text("GAME  START",120,100)
 
Player.getplayerinfo()
player.getcar()
if(allplayers!==undefined){
   // var displaypos=130
   background(groundImg)
   image(trackImg,0,-displayHeight*5,displayWidth,displayHeight*6)
    var index=0
    var x=200
    var y 
    for (var plr in allplayers){
        index=index+1
        x=x+200
        y=displayHeight-allplayers[plr].distance  
        cars[index-1].x=x
        cars[index-1].y=y       
                                                
        if(index===player.index){
fill("black")
stroke("black")
ellipse(x,y,90,90)
        
            cars[index-1].shapeColor="red"
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
            
        }
        
    }
      //  displaypos+=20
        //textSize(15)
        //text(allplayers[plr].name+": "+allplayers[plr].distance,120,displaypos)
    }

if(keyDown(UP_ARROW)&&player.index!==null&&pastfinish!==true){
    player.distance+=30
    player.update()

}
if(player.distance>=4140&&pastfinish===false){
    gamestate=2
    Player.getupdatecar()
    player.rank=finishedplayers
player.update()
pastfinish=true
}
drawSprites()
}
end(){
    console.log("gameEnded")
console.log(player.rank)
textAlign(CENTER)
textSize(25)
Player.getplayerinfo()
for(var plr in allplayers){
    if(allplayers[plr].rank===1){
        text("1st: "+allplayers[plr].name,displayWidth/2,displayHeight/4)
    }
    else if(allplayers[plr].rank===2){
        text("2nd: "+allplayers[plr].name,displayWidth/2,displayHeight/4+50)
    }
    else if(allplayers[plr].rank===3){
        text("3rd: "+allplayers[plr].name,displayWidth/2,displayHeight/4+150)
    }
    else if(allplayers[plr].rank===4){
        text("4th: "+allplayers[plr].name,displayWidth/2,displayHeight/4+250)
    }
}
}

}