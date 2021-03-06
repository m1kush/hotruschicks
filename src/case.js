import Items from "./items.js";
import Item from "./item.js";
import {update_texts} from "./jquery_i18n/main-jquery_i18n.js";

const STATE = {
    IDLE: 0,
    ANIMATION: 1,
    DROPPED: 2,
    FADEOUT: 3,
    RETRIEVING: 4,
    AFTERDROP: 5,
    DEBUG: 69
}

export default class Case {
    constructor(canvasWidth) {
        this.items = null;
        this.canvasWidth = canvasWidth;
        this.state = STATE.IDLE;
        this.retrieved = null;
        this.retrievedOpacity = 0;
        this.retrievedFadeInSpeed = 0.0025;
    }

    drop() {
        if (this.state === STATE.IDLE || this.state === STATE.AFTERDROP) {
            this.state = STATE.ANIMATION;
            this.items = new Items(this.canvasWidth);
            this.retrievedOpacity = 0;
        }
    }

    update(deltaTime) {
        if (this.state === STATE.ANIMATION) {
            this.items.update(deltaTime);
            if (this.items.speed === 0) {
                this.state = STATE.DROPPED;
            }
        }
        if (this.state === STATE.DROPPED) {
            this.retrieved = this.items.retrieveItem();
            //this.retrieved.scaleItem(2);
            // this.retrieved.setPosition({x:0, y:0});
            let newCanvasWidth = 5 * this.canvasWidth / 2.5
            let newPosition = {x: this.canvasWidth / 2 - newCanvasWidth / 10, y: 0};
            let newImage = this.retrieved.image.image;
            let newName = this.retrieved.rareBG.name;
            let newRarity = this.retrieved.rareBG.rarity;
            let newQuality = this.retrieved.rareBG.rawquality;
            let newQualityImage = this.retrieved.image.qualityImage;
            let newStattrak = this.retrieved.rareBG.stattrak;
            let newStattrakImage = this.retrieved.image.stattrakImage;
            this.retrieved = new Item(newCanvasWidth, newPosition, newImage, newName, newRarity, newQuality, newQualityImage, newStattrak, newStattrakImage);
            this.state = STATE.FADEOUT;
        }
        if (this.state === STATE.FADEOUT) {
            this.items.fade(deltaTime);
            if (this.items.opacity === 0) {
                this.state = STATE.RETRIEVING;
            }
        }
        if (this.state === STATE.RETRIEVING) {
            this.retrievedOpacity += deltaTime * this.retrievedFadeInSpeed;
            if (this.retrievedOpacity > 1) {
                this.retrievedOpacity = 1;
                this.state = STATE.AFTERDROP;
            }
        }
        if (this.state === STATE.AFTERDROP) {
            document.getElementById("dropButton").dataset.i18n = "main-open-again";
            update_texts();
        }
    }

    draw(context) {
        if (this.state !== STATE.IDLE && this.state !== STATE.RETRIEVING && this.state !== STATE.AFTERDROP) {
            this.items.draw(context);
        }
        if (this.state !== STATE.RETRIEVING) {
            //rysowanie linii
            let globAlpha = context.globalAlpha;
            if (this.state === STATE.IDLE) {
                context.globalAlpha = 1;
            } else {
                context.globalAlpha = this.items.opacity;
            }
            context.fillStyle = "red";
            context.fillRect(this.canvasWidth / 2 - 1, 0, 2, this.canvasWidth / 2.5);
            context.globalAlpha = globAlpha;
        }
        if (this.state === STATE.RETRIEVING) {
            let globAlpha = context.globalAlpha;
            context.globalAlpha = this.retrievedOpacity;
            this.retrieved.draw(context);
            context.globalAlpha = globAlpha;
        }
        if (this.state === STATE.AFTERDROP) {
            this.retrieved.draw(context);
        }
    }

    getRetrievedItem() {
        return this.retrieved;
    }

    notOpening() {
        return this.state === STATE.IDLE || this.state === STATE.AFTERDROP;
    }
}