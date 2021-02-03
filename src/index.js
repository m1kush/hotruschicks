import Items from "./items.js";

function gameLoop(timestamp) {
    //deltatime
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    //tutaj są rzeczy które się dzieją co klatkę

    //tło xd
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    // context.drawImage(mordaKupisza, 0, 0, canvasWidth, canvasHeight);

    // testItem.draw(context);
    // testItem2.draw(context);
    itemy.update(deltaTime);
    itemy.draw(context);
    context.fillStyle = "red";
    context.fillRect(canvasWidth/2-1, 0, 2, canvasHeight);

    //nie wiem
    requestAnimationFrame(gameLoop);
}

function drop() {
    itemy.drop();
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
let itemy = new Items(canvasWidth);
document.getElementById("dropButton").onclick = drop;
//itemy.test();

//animationLoop
let lastTime = 0;
requestAnimationFrame(gameLoop);

