class Form{
    constructor(){
 this.reset=createButton("Reset")
this.input=createInput("Name")
this.button=createButton("PLAY")
this.greeting=createElement('h3')
    }
hideForm(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}
display(){
    var title=createElement('h2')
    title.html("CAR RACING GAME")
    title.position(displayWidth/2-40,0)
    this.input.position(displayWidth/2-30,displayHeight/2-50)
    this.button.position(displayWidth/2+30,displayHeight/2)
    this.reset.position(displayWidth-100,20)
    this.button.mousePressed( ()=>
    {
  this.input.hide()
 this.button.hide()
  player.name=this.input.value()
  playercount +=1
player.index=playercount
  player.update()
  player.updatecount(playercount)
 this. greeting.html("HELLO "+player.name)
 this. greeting.position(displayWidth/2,displayHeight/3)

}

)
this.reset.mousePressed(()=>{
game.update(0)
player.updatecount(0)
database.ref("/").update({
  players:null,
  carsend:0
})
}
)
}


}