function processRarity(rarity) {
    if (rarity === 1) return "rgba(77, 105, 205, 1)";
    if (rarity === 2) return "rgba(137, 71, 255, 1)";
    if (rarity === 3) return "rgba(212, 43, 230, 1)";
    if (rarity === 4) return "rgba(235, 75, 75, 1)";
    if (rarity === 5) return "rgba(202, 171, 5, 1)";
}

function processQuality(quality) {
    if(quality === 1) return $.i18n("case-factory-new");
    if(quality === 2) return $.i18n("case-minimal-wear");
    if(quality === 3) return $.i18n("case-field-tested");
    if(quality === 4) return $.i18n("case-well-worn");
    if(quality === 5) return $.i18n("case-battle-scarred");
}

export default class RareBG {
    constructor(canvasWidth, rarity, position, itemName, quality, stattrak) {
        this.width = canvasWidth / 5;
        this.height = this.width / 5;
        this.position = {x: position.x, y: position.y + this.width * 4/5};
        this.name = itemName;
        this.color = processRarity(rarity);
        this.quality = processQuality(quality);
        this.rarity = rarity;
        this.rawquality = quality;
        this.stattrak = stattrak;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        let fontSize = this.height / 3.4;
        context.font = fontSize.toString()+"px Verdana";
        if(this.stattrak) {
            context.fillStyle = "gold";
        } else {
            context.fillStyle = "white";
        }
        context.textAlign = "left";
        let outputName = this.name;
        if(this.stattrak) {
            outputName += " " + "(" + $.i18n("case-stattrak") + ")";
        }
        context.fillText(outputName, this.position.x+fontSize/2, this.position.y+fontSize*1.2);
        context.fillStyle = "white";
        context.fillText(this.quality, this.position.x+fontSize/2, this.position.y+fontSize*2.7);
    }

    move(distance) {
        this.position.x-=distance;
    }
}