var database;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var form, game, player
var distance = 0;
var car1, car2, car3, car4, cars

function setup(){
    createCanvas(displayWidth-20, displayHeight-20);
    database = firebase.database();
    console.log(database);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }
}
