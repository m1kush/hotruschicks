import ItemImage from "./itemimage.js";
import RareBG from "./rarebg.js";

export default class Item {
    constructor(canvasWidth, position, image, rarity) {
        this.position = position;
        this.image = new ItemImage(canvasWidth, image, position);
        this.rareBG = new RareBG(canvasWidth, rarity);

    }

    draw(context) {
        this.image.draw(context);
        this.rareBG.draw(context);
    }

    move(distance) {
        this.image.move(distance);
        this.rareBG.move(distance);
    }
}