import Brick from "./brick.js";

export function buildLevel(game, level) {
    let bricks = [];
    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick===1) {
                let brick = new Brick(game, {x:0, y:0});
                brick.position = {x: brick.width*brickIndex, y: 50+brick.height*rowIndex};
                bricks.push(brick);
            }
        });
    });
    return bricks;
}

export const level1 = [
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
]