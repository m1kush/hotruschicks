import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import {buildLevel, level1} from "./levels.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.gameObjects = [];
        new InputHandler(this.paddle, this);
    }

    start() {
        if (this.gamestate !== GAMESTATE.MENU) {
            return;
        }
        let bricks = buildLevel(this, level1);
        this.gameObjects = [this.ball, this.paddle, ...bricks]; //WTF TAK MOŻNA?!?!?
        this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltaTime) {

        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU) {
            return;
        }
        this.gameObjects.forEach((object) => object.update(deltaTime)); //dobra, c++ jest przestarzałe ngl
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    }

    draw(context) {
        this.gameObjects.forEach((object) => object.draw(context));
        if (this.gamestate === GAMESTATE.PAUSED) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0,0,0,0.5)";
            context.fill();
            context.font = "30px Consolas";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
        if (this.gamestate === GAMESTATE.MENU) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0,0,0,1)";
            context.fill();
            context.font = "30px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Press SPACEBAR to start", this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause() {
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}