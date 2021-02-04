export default class ItemImage {
    constructor(canvasWidth, image, position, quality, qualityImage, stattrak, stattrakImage) {
        this.width = canvasWidth / 5;
        this.height = this.width * 4 / 5;
        this.image = image;
        this.position = position;
        this.quality = quality;
        this.qualityImage = qualityImage;
        this.stattrak = stattrak;
        this.stattrakImage = stattrakImage;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height + 1);
        if (this.stattrak) {
            context.drawImage(this.stattrakImage, this.position.x + this.width * 4 / 5, this.position.y + this.height * 3 / 4, this.width / 5, this.width / 5);
        }
        if (this.quality !== 1) {
            context.drawImage(this.qualityImage, this.position.x, this.position.y, this.width, this.height + 1);
        }

    }

    move(distance) {
        this.position.x -= distance;
    }
}