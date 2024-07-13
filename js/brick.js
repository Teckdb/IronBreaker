class Brick {
    constructor(gameSize, playerPos, playerSize, ballPos, ballSize) {
        this.gameSize = gameSize

        this.playerSize = playerSize

        this.playerPos = playerPos

        this.ballPos = ballPos

        this.ballSize = ballSize

        this.brickSize = {
            w: 100,
            h: 100
        }

        this.brickPos = {
            left: gameSize.w / 2 - this.brickSize.w / 2,
            top: 50
        }

        this.BrickVel = {
            left: 1
        }


    }

    init() {

        this.brickElement = document.createElement('div')

        this.brickElement.style.position = "absolute"
        this.brickElement.style.width = `${this.brickSize.w}px`
        this.brickElement.style.height = `${this.brickSize.h}px`
        this.brickElement.style.left = `${this.brickPos.left}px`
        this.brickElement.style.top = `${this.brickPos.top}px`
        this.brickElement.style.backgroundColor = `pink`

        document.querySelector('#game-screen').appendChild(this.brickElement)
    }

    move() {
        this.updatePosition()

    }

    youWin() {
        this.brickElement.style.backgroundColor = `red`
        this.brickElement.style.visibility = `hidden`
        const paParalo = setTimeout(() => {
            alert(`YOU WIN!`)
        }, 250)



    }

    updatePosition() {

    }

}