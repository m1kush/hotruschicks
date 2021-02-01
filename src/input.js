export default class InputHandler {
    constructor(paddle) {
        document.addEventListener("keydown", (event) => {
            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
                default:
                    alert("fajnie że sobie klikasz xd dawaj hajs za skiny");
            }
        });

        document.addEventListener("keyup", (event) => {
            switch (event.keyCode) {
                case 37:
                    if (paddle.xspeed < 0) {
                        paddle.stop();
                    }
                    break;
                case 39:
                    if (paddle.xspeed > 0) {
                        paddle.stop();
                    }
                    break;
            }
        });
    }
}