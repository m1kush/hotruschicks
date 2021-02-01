import Game from "./game.js";

function gameLoop(timestamp) {
    //deltatime
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    //tutaj są rzeczy które się dzieją co klatkę

    //tło xd
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    context.drawImage(mordaKupisza, 0, 0, GAME_WIDTH, GAME_HEIGHT);

    //gra
    game.update(deltaTime);
    game.draw(context);

    //nie wiem
    requestAnimationFrame(gameLoop);
}

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//mordy kupisza itd
let mordaKupisza = document.getElementById("mordaKupisza");

//game loop
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();
let lastTime = 0;
requestAnimationFrame(gameLoop);

