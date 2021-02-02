import Game from "./game.js";
import ItemImage from "./itemimage.js";

function gameLoop(timestamp) {
    //deltatime
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    //tutaj są rzeczy które się dzieją co klatkę

    //tło xd
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
   // context.drawImage(mordaKupisza, 0, 0, GAME_WIDTH, GAME_HEIGHT);
    testitem.draw(context);

    //gra
    game.update(deltaTime);
    game.draw(context);
    lel++;
    testitem.move(-5/deltaTime)

    //nie wiem
    requestAnimationFrame(gameLoop);
}

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//mordy kupisza itd
let mordaKupisza = document.getElementById("mordaKupisza");
let testitem = new ItemImage(GAME_WIDTH, mordaKupisza, {x: 20, y: 20});
let lel=0;

//game loop
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;
requestAnimationFrame(gameLoop);

