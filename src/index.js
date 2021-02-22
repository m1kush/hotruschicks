import Case from "./case.js";
import { playSound } from './sounds.js';

function gameLoop(timestamp) {
    //deltatime
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    //tutaj są rzeczy które się dzieją co klatkę
    //czyszczenie ekranu
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    //rysowanie i update stanu skrzynki
    skrzynka.update(deltaTime);
    skrzynka.draw(context);

    //kolejna klatka
    requestAnimationFrame(gameLoop);
}

function drop() {
    if(skrzynka.notOpening())
    {
        playSound('open');
        skrzynka.drop();
    }
}

//canvas setup
let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");
let screenWidth = window.innerWidth;
let canvasWidth = screenWidth*0.8;
let canvasHeight = canvasWidth/2.5;
context.canvas.width = canvasWidth;
context.canvas.height = canvasHeight;

//itemy
let skrzynka = new Case(canvasWidth);
document.getElementById("dropButton").onclick = drop;
document.getElementById("steamlogin").height = "50";

//animationLoop
let lastTime = 0;
requestAnimationFrame(gameLoop);

