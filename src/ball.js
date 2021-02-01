export default class Ball {
    constructor(game) {
        this.image = document.getElementById("img_ball");
        this.speed = {x: 10, y: 10};
        this.position = {x: 10, y: 10};
        this.size = 16;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x / deltaTime;
        this.position.y += this.speed.y / deltaTime;

        //kolizje
        //ściany
        if (this.position.x > this.gameWidth - this.size) {
            this.position.x = this.gameWidth - this.size;
            this.speed.x *= -1;
        }
        if (this.position.x < 0) {
            this.position.x = 0;
            this.speed.x *= -1;
        }
        //sufit i podłoga
        if (this.position.y > this.gameHeight - this.size) {
            this.position.y = this.gameHeight - this.size;
            this.speed.y *= -1;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
            this.speed.y *= -1;
        }
        //paletka
        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        if(bottomOfBall>=topOfPaddle)
        {
            if(this.position.x+this.size/2>=this.game.paddle.position.x && this.position.x+this.size/2<=this.game.paddle.position.x+this.game.paddle.width)
            {
                this.speed.y*=-1;
                this.position.y=topOfPaddle-this.size;
            }
        }
    }
}