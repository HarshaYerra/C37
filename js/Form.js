class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play")
        this.greeting = createElement("h2");

    }
    hide (){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    //display the form
     display(){
         var title = createElement('h2')
         title.html("Car Racing Game")
         title.position(130, 0)
         this.input.position(130, 160)
         this.button.position(250, 200) 

         this.button.mousePressed(()=>{
             this.input.hide()
             this.button.hide()
        
             player.name = this.input.value();

            // playerCount = playerCount + 1;
            playerCount += 1
            player.index = playerCount
            player.update();
            player.updateCount(playerCount)
            
            this.greeting.html("Hello " + player.name)
            this.greeting.position(130, 160)

         });
     }
    //when button will get pressed
    //increase the playerCount

    //update the playerCount value

    //update the playername inside the database
    
}