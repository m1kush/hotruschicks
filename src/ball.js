export default class Ball{
    constructor() {
        this.image = document.getElementById("img_ball");
    }

    draw(context){
        context.drawImage(this.image, 10, 10, 16, 16);
    }

    update(){

    }
}