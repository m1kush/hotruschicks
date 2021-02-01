import Paddle from "./paddle.js";
import InputHandler from "./input.js";

function gameLoop(timestamp) {
    //deltatime
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    //tutaj są rzeczy które się dzieją co klatkę

    //tło xd
    context.clearRect(0, 0, 800, 600);
    context.drawImage(mordaKupisza, 0, 0, GAME_WIDTH, GAME_HEIGHT);

    paddle.update(deltaTime);
    paddle.draw(context);

    context.drawImage(imgBall, 10, 10);

    //nie wiem
    requestAnimationFrame(gameLoop);
}

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

//images
let imgBall = document.getElementById("img_ball");
let mordaKupisza = document.getElementById("mordaKupisza");
gameLoop();

