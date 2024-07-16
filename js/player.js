class Player {

    constructor(gameSize) {

        this.gameSize = gameSize

        this.playerSize = {
            w: 100,
            h: 20
        }

        this.playerPos = {
            left: gameSize.w / 2 - this.playerSize.w / 2,
            top: this.gameSize.h - 100
        }

        this.init()

    }

    init() {

        this.playerElement = document.createElement('div')

        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.gameSize.w / 2 - this.playerSize.w / 2}px`
        this.playerElement.style.top = `${this.playerPos.top}px`
        this.playerElement.style.backgroundColor = `blue`

        document.querySelector('#game-screen').appendChild(this.playerElement)
    }

    move(xPosition) {

        if ((xPosition >= 0) && (xPosition <= this.gameSize.w - this.playerSize.w)) {
            this.playerPos.left = xPosition
        }

        this.updatePosition()
    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
    }

    removeLife() { //in progress
        if (this.lifes != 0) {
            this.lifes--
        }
    }

}