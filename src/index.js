import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

function gameLoop(timestamp) {
    //deltatime
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    //tutaj są rzeczy które się dzieją co klatkę

    //tło xd
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    context.drawImage(mordaKupisza, 0, 0, GAME_WIDTH, GAME_HEIGHT);

    paddle.update(deltaTime);
    paddle.draw(context);

    ball.draw(context);

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

//mordy kupisza itd
let ball = new Ball();
let mordaKupisza = document.getElementById("mordaKupisza");

//game loop
requestAnimationFrame(gameLoop);

