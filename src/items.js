import Item from "./item.js";

let mordyKupisza = [
    document.getElementById("milspec1"),
    document.getElementById("milspec2"),
    document.getElementById("milspec3"),
    document.getElementById("milspec4"),
    document.getElementById("milspec5"),
    document.getElementById("milspec6"),
    document.getElementById("milspec7"),
    document.getElementById("restricted1"),
    document.getElementById("restricted2"),
    document.getElementById("restricted3"),
    document.getElementById("restricted4"),
    document.getElementById("restricted5"),
    document.getElementById("classified1"),
    document.getElementById("classified2"),
    document.getElementById("classified3"),
    document.getElementById("covert1"),
    document.getElementById("covert2"),
    document.getElementById("knif")
];

let nazwyMordKupisza = [
    "Kupisz do wzięcia",
    "Młody Kupisz",
    "Kupisz z colą",
    "Kupisz programista",
    "Rebus z kupiszem",
    "WeirdKupisz",
    "Spalony Kupisz",
    "Kupisz Blond",
    "Imprezowy Kupisz",
    "Demot Kupisz",
    "Morda Kupisza MK 1",
    "EzKupisz",
    "Kupisz na koniu",
    "Selfie Kupisza",
    "Adam Kupisz-Małysz",
    "Kupisz UwU",
    "Kupisz OwO",
    "Rainbow Kupisz"
];

function generateItems(canvasWidth) {
    let itemy = [];
    for (let i = 0; i < 150; i++) {
        let newItem = new RandomItem();
        itemy.push(new Item(canvasWidth, {
            x: canvasWidth + i * canvasWidth / 4.5,
            y: (canvasWidth / 2.5 - canvasWidth / 5) / 2
        }, mordyKupisza[newItem.itemNumber], nazwyMordKupisza[newItem.itemNumber], newItem.rarity, newItem.wear, newItem.stattrak));
    }
    return itemy;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STATE  = {
    IDLE: 0,
    ANIMATION: 1,
    DROPPED: 2
}

class RandomItem {
    constructor() {
        this.rarity = 1;
        this.itemNumber = 0;
        let rng = Math.random();
        if (rng <= 0.0025575) {
            this.rarity = 5;
        } else if (rng <= 0.0063939) {
            this.rarity = 4;
        } else if (rng <= 0.0319693) {
            this.rarity = 3;
        } else if (rng <= 0.1598465) {
            this.rarity = 2;
        }
        switch (this.rarity) {
            case 1:
                this.itemNumber = getRandomInt(0, 6);
                break;
            case 2:
                this.itemNumber = getRandomInt(7, 11);
                break;
            case 3:
                this.itemNumber = getRandomInt(12, 14);
                break;
            case 4:
                this.itemNumber = getRandomInt(15, 16);
                break;
            case 5:
                this.itemNumber = 17;
        }
        this.wear = 5;
        rng = Math.random();
        if (rng <= 0.1471) {
            this.wear = 1;
        } else if (0.1471<rng && rng<=0.3939) {
            this.wear = 2;
        } else if (0.3939<rng && rng<=0.8257) {
            this.wear = 3;
        } else if (0.8257<rng && rng<=0.9049) {
            this.wear = 4;
        }
        this.stattrak = Math.random() <= 0.1;
    }
}


export default class Items {
    constructor(canvasWidth) {
        //każdy ciąg itemów ma konkretną ich ilość
        this.itemy = generateItems(canvasWidth);
        this.speed = 75/225*canvasWidth;
        this.deceleration = 0.08/1125*canvasWidth;
        this.canvasWidth = canvasWidth;
        this.state = STATE.IDLE;
    }

    test() {
        this.itemy.forEach((item) => console.log(item.rareBG.name, item.rareBG.color, item.rareBG.quality, item.rareBG.stattrak));
    }

    move(distance) {
        this.itemy.forEach((item) => item.move(distance));
    }

    draw(context) {
        this.itemy.forEach((item) => {
            if(-this.canvasWidth<item.position.x &&  item.position.x<this.canvasWidth*2) {
                item.draw(context)
            }
        });
    }

    update(deltaTime) {
        if(this.state===STATE.ANIMATION) {
            this.move(this.speed/deltaTime);
            this.speed-=this.deceleration*deltaTime;
            if(this.speed<0) {
                this.speed = 0;
                this.state = STATE.DROPPED;
            }
        }
    }

    drop() {
        this.state=STATE.ANIMATION;
    }
}