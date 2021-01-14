class Player {
    constructor () {
        this.playerSprite = createSprite(50, 500, 20 , 20);
        this.playerSprite.shapeColor = "blue";
    }

    move() {
        if (keyDown(UP_ARROW)) {
            this.playerSprite.y = this.playerSprite.y - 10;
        }

        if (keyDown(DOWN_ARROW)) {
            this.playerSprite.y = this.playerSprite.y + 10;
        }

        if (keyDown(LEFT_ARROW)) {
            this.playerSprite.x = this.playerSprite.x - 10;
        }

        if (keyDown(RIGHT_ARROW)) {
            this.playerSprite.x = this.playerSprite.x + 10;
        }
    }
}