class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }

    //retrieve the playerCount   
    getCount(){
      var playerCountRef = database.ref("playerCount") ;
      playerCountRef.on("value", function(data){
          playerCount = data.val();
      })
    }

    //update the PlayerCount
    updateCount(count){
        database.ref("/").update({
        playerCount: count
        })
    }
    //update the playerName and distance
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,

        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
            
        })
    }
}