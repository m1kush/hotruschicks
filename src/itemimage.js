export default class ItemImage {
    constructor(canvasWidth, image, position, quality, stattrak) {
        this.width = canvasWidth / 5;
        this.height = this.width * 4 / 5;
        this.image = image;
        this.position = position;
        this.quality = quality;
        this.stattrak = stattrak;
        this.stattrakImg = document.getElementById("stattrak");
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height + 1);
        if (this.stattrak) {
            context.drawImage(this.stattrakImg, this.position.x + this.width * 4 / 5, this.position.y + this.height * 3 / 4, this.width / 5, this.width / 5);
        }
        if (this.quality !== 1) {
            let przyciemnienie = 0.1 * this.quality;
            context.fillStyle = "rgba(0, 0, 0, " + przyciemnienie.toString() + ")";
            context.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    move(distance) {
        this.position.x -= distance;
    }
}