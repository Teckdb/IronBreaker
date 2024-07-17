class Ball {

    constructor(gameSize, ballSize, playerSize) {

        this.gameSize = gameSize

        this.ballSize = ballSize

        this.playerSize = playerSize

        this.ballPos = {
            left: this.gameSize.w / 2,
            top: this.gameSize.h - this.ballSize.h - 110,
        }

        this.ballPhysics = {
            speed: {
                left: 3, //default is => 3
                top: 10   //default is => 8
            }
        }

        this.loseBallInGame = false

        this.ballElement = document.createElement('div')

    }

    init() {

        this.ballElement.style.position = "absolute"
        this.ballElement.style.width = `${this.ballSize.w}px`
        this.ballElement.style.height = `${this.ballSize.h}px`
        this.ballElement.styleborder = '3px solid black'
        this.ballElement.style.borderRadius = `50%`
        this.ballElement.style.left = `${this.gameSize.w / 2}px`
        this.ballElement.style.top = `${this.gameSize.h - this.ballSize.h - 110}px`
        this.ballElement.style.backgroundColor = `#f5ff62`

        document.querySelector('#game-screen').appendChild(this.ballElement)
    }

    move(xPosition, clickToStart) {

        if (clickToStart) {
            this.ballPos.top += this.ballPhysics.speed.top
            this.ballPos.left += this.ballPhysics.speed.left
            this.updatePosition()

        } else {
            if ((xPosition >= 0) && (xPosition <= this.gameSize.w - this.playerSize.w)) {
                this.ballPos.left = xPosition + ((this.playerSize.w / 2) - (this.ballSize.w / 2))
                this.updatePosition()
            } else {
                //this.ballPos.left = this.gameSize.w / 2 - this.ballSize.w / 2
                this.updatePosition()
            }
        }

        this.checkBorderCollision()

    }

    checkBorderCollision() {

        if (this.ballPos.top <= 0) {
            this.turnTop()
        }

        if (this.ballPos.left >= this.gameSize.w - this.ballSize.w) {
            this.turnLeft()
        }

        if (this.ballPos.left <= 0) {
            this.turnLeft()
        }

    }

    turnTop() {
        this.ballPhysics.speed.top *= -1
    }

    turnLeft() {
        this.ballPhysics.speed.left *= -1
    }

    removeBall() {
        this.ballElement.remove()
    }

    updatePosition() {
        this.ballElement.style.left = `${this.ballPos.left}px`
        this.ballElement.style.top = `${this.ballPos.top}px`
    }
}