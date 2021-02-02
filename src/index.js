import Game from "./game.js";
import Item from "./item.js";

function gameLoop(timestamp) {
    //deltatime
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    //tutaj są rzeczy które się dzieją co klatkę

    //tło xd
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
   // context.drawImage(mordaKupisza, 0, 0, GAME_WIDTH, GAME_HEIGHT);

    testItem.draw(context);
    testItem2.draw(context);

    //gra
    game.update(deltaTime);
    game.draw(context);
    //testItem.move(-5/deltaTime);

    //nie wiem
    requestAnimationFrame(gameLoop);
}

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//mordy kupisza itd
let mordaKupisza = document.getElementById("mordaKupisza");
let mordaKupisza2 = document.getElementById("mordaKupisza2");
let testItem = new Item(GAME_WIDTH, {x: 20, y: 300}, mordaKupisza2,  "Kupisz but better", 2,2, true);
let testItem2 = new Item(GAME_WIDTH, {x: 20+GAME_WIDTH/4, y: 300}, mordaKupisza, "Kupisz", 1, 1, false);
//game loop
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;
requestAnimationFrame(gameLoop);

