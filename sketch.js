var ball, database;
var reference, form1
var ballPosition
var players;
var gameState = 0;
var game;
var form1;
function setup() {
    createCanvas(500, 500);
    database = firebase.database();
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("white");
    
//     reference = database.ref("ball/position") //database.refrecnce
//     reference.on("value", readPosition, showError)
// if(ballPosition != undefined){
//     if (keyDown(LEFT_ARROW)) {
//         writePosition(-1, 0)
//     }
//     else if (keyDown(RIGHT_ARROW)) {
//         writePosition(+1, 0);
//     }
//     else if (keyDown(UP_ARROW)) {
//         writePosition(0, -1)
//     }
//     else if (keyDown(DOWN_ARROW)) {
//         writePosition(0, +1)
//     }
// }
//     drawSprites();
 

// function readPosition(data) {
//     ballPosition = data.val();
//     ball.x = ballPosition.x
//     ball.y = ballPosition.y
// }

// function writePosition(x, y) {
//     reference.set({ x: ballPosition.x + x, y: ballPosition.y + y });
// }

// function showError() {
//     console.log("error")
}
