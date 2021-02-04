import ItemImage from "./itemimage.js";
import RareBG from "./rarebg.js";

export default class Item {
    constructor(canvasWidth, position, image, itemName, rarity, quality, qualityImage, stattrak, stattrakImage) {
        this.position = position;
        this.image = new ItemImage(canvasWidth, image, position, quality, qualityImage, stattrak, stattrakImage);
        this.rareBG = new RareBG(canvasWidth, rarity, position, itemName, quality, stattrak);
    }

    draw(context) {
        this.image.draw(context);
        this.rareBG.draw(context);
    }

    move(distance) {
        this.image.move(distance);
        this.rareBG.move(distance);
    }

    setPosition(position) {
        this.position = position;
        this.image.position = position;
        this.rareBG.position = position;
    }
}