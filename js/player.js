class Player {

    constructor(gameSize, mousePosition) {

        this.gameSize = gameSize

        this.playerSize = {
            w: 150,
            h: 20
        }

        this.playerPos = {
            left: gameSize.w / 2 - this.playerSize.w / 2,
            top: this.gameSize.h - 100
        }

        this.playerVel = {
            left: 100
        }

        this.mousePosition = mousePosition

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

    move() {
        this.updatePosition()
    }

    moveLeft() {
        if (this.playerPos.left > 0) {
            this.playerPos.left -= this.playerVel.left
        }
    }

    moveRight() {
        if (this.playerPos.left <= this.gameSize.w - this.playerSize.w) { this.playerPos.left += this.playerVel.left }
    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
    }


}