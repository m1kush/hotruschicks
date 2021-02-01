export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 30;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
        this.color = "#00ffff";
        this.xspeed = 0;
        this.maxSpeed = 20;
        this.gameWidth=gameWidth;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) {
            return;
        }

        this.position.x += this.xspeed / deltaTime;
        if(this.position.x<0)
        {
            this.position.x=0;
        }
        if(this.position.x>this.gameWidth-this.width)
        {
            this.position.x = this.gameWidth-this.width;
        }
    }

    moveLeft(){
        this.xspeed = -this.maxSpeed;
    }

    moveRight(){
        this.xspeed = this.maxSpeed;
    }

    stop(){
        this.xspeed = 0;
    }
}