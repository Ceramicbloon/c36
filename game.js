class Game{
    constructor(){

    }
    getState(){
       var gameStateRef = database.ref('/');
       gameStateRef.on('value', function(data){
           gameState = data.val();
       })
    }

    update(state){
        database.ref('gameState').set({
            gameState : state
        })
    }

    start(){
        if(gameState == 0){

             form1 = new Form();
            form1.display();
        }
    }
}