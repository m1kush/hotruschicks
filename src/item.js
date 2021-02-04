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

    setPosition(position) { //niby działa ale po co skoro i tak aby utworzyć nowy item musisz iść naokoło
        this.position = position;
        this.image.position = position;
        this.rareBG.position = {x:position.x, y:position.y+this.image.height};
    }

    scaleItem(newScale) { //nie działa btw, instrukcja kopiowania i skalowania elementów jest w case.js:43
        return new Item(this.image.width*newScale, this.position, this.image.image, this.rareBG.name, this.rareBG.rarity, this.rareBG.rawquality, this.rareBG.qualityImage, this.rareBG.stattrak, this.rareBG.stattrakImage);
    }
}