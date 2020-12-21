class Player{
    constructor()
    {
this.index=null
this.distance=0
this.name=null
this.rank=null
    }
getcount(){
   var   playercountref=database.ref("playercount")
   playercountref.on("value", (data)=>{
       playercount=data.val()
   })
}
updatecount(count){
database.ref('/').update({
playercount:count                                      
})

}
update(){
    var playerindex="players/player"+this.index
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance,
        rank:this.rank
    })
}
static getplayerinfo(){

var gettinginfo=database.ref("players")
gettinginfo.on("value",(data)=>{
    allplayers=data.val()
})
}
getcar(){
var getcarend=database.ref("carsend")
getcarend.on("value",(data)=>{
    finishedplayers=data.val()
})
}
static  getupdatecar(){
    database.ref("/").update({
        carsend:finishedplayers+1
    })
    this.rank+=1                   
}
}
