class Ball {

    constructor(gameSize, playerPos, playerSize) {

        this.gameSize = gameSize
        this.playerPos = playerPos
        this.playerSize = playerSize

        this.ballSize = {
            w: 50,
            h: 50
        }

        this.ballPos = {
            left: gameSize.w / 2,
            top: this.gameSize.h - this.ballSize.h - 110,
        }

        this.ballVel = {
            left: 1,
            top: -2
        }

        this.ballPhysics = {
            speed: {
                left: 3, //3
                top: 8//8
            }
        }

        this.gameOver = false


    }

    init() {
        this.ballElement = document.createElement('div')

        this.ballElement.style.position = "absolute"
        this.ballElement.style.width = `${this.ballSize.w}px`
        this.ballElement.style.height = `${this.ballSize.h}px`
        this.ballElement.style.borderRadius = `50%`
        this.ballElement.style.left = `${this.gameSize.w / 2}px`
        this.ballElement.style.top = `${this.gameSize.h - this.ballSize.h - 110}px`
        this.ballElement.style.backgroundColor = `steelblue`

        document.querySelector('#game-screen').appendChild(this.ballElement)
    }

    move() {
        this.ballPos.top += this.ballPhysics.speed.top
        this.ballPos.left += this.ballPhysics.speed.left

        this.checkBorderCollision()
        this.updatePosition()
    }

    checkBorderCollision() {

        if ((this.ballPos.top >= this.gameSize.h + 100) && (this.ballPos.top <= this.gameSize.h + 110)) {
            this.gameOver = true
        } else {
            this.gameOver = false
        }

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

    updatePosition() {
        this.ballElement.style.left = `${this.ballPos.left}px`
        this.ballElement.style.top = `${this.ballPos.top}px`
    }
    // clearBall() {
    //     this.ba
    // }

}