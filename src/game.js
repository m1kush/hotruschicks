import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.gameObjects = [this.ball, this.paddle]; //WTF TAK MOŻNA?!?!?

        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);
        this.gameObjects.forEach((object) => object.update(deltaTime)); //dobra, c++ jest przestarzałe ngl
    }

    draw(context) {
        // this.paddle.draw(context);
        // this.ball.draw(context);
        this.gameObjects.forEach((object) => object.draw(context));
    }
}