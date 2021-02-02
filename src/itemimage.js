export default class ItemImage {
    constructor(canvasWidth, image, position) {
        this.width = canvasWidth / 5;
        this.height = this.width * 4/5;
        this.image = image;
        this.position = position;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height+1);
    }

    move(distance) {
        this.position.x-=distance;
    }
}