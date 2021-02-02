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
    itemy.draw(context);

    //gra
    // game.update(deltaTime);
    // game.draw(context);
    //testItem.move(-5/deltaTime);

    //nie wiem
    requestAnimationFrame(gameLoop);
}

//canvas setup
let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");
let screenWidth = window.innerWidth;
let canvasWidth = screenWidth*0.8;
let canvasHeight = canvasWidth/2.5;
context.canvas.width = canvasWidth;
context.canvas.height = canvasHeight;

//mordy kupisza itd
// let mordaKupisza = document.getElementById("mordaKupisza");
// let mordaKupisza2 = document.getElementById("mordaKupisza2");
// let testItem = new Item(canvasWidth, {x: 20, y: (canvasWidth/2.5-canvasWidth/5)/2}, mordaKupisza2, "Kupisz but better", 2, 2, true);
// let testItem2 = new Item(canvasWidth, {x: 20 + canvasWidth / 4, y: (canvasWidth/2.5-canvasWidth/5)/2}, mordaKupisza, "Kupisz", 1, 1, false);

let itemy = new Items(canvasWidth);
itemy.test();
//game loop
//let game = new Game(canvasWidth, canvasHeight);
let lastTime = 0;
requestAnimationFrame(gameLoop);

