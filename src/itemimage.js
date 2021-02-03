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
        if (this.quality === 2) {
            context.drawImage(document.getElementById("scratches1"), this.position.x, this.position.y, this.width, this.height + 1);
        }
        if (this.quality === 3) {
            context.drawImage(document.getElementById("scratches2"), this.position.x, this.position.y, this.width, this.height + 1);
        }
        if (this.quality === 4) {
            context.drawImage(document.getElementById("scratches3"), this.position.x, this.position.y, this.width, this.height + 1);
        }
        if (this.quality === 5) {
            context.drawImage(document.getElementById("scratches4"), this.position.x, this.position.y, this.width, this.height + 1);
        }
    }

    move(distance) {
        this.position.x -= distance;
    }
}