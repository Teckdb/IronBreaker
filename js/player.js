class Player {

    constructor(gameSize) {
        this.gameSize = gameSize

        this.playerSize = {
            w: 108,
            h: 20
        }

        this.playerPos = {
            left: gameSize.w / 2 - this.playerSize.w / 2,
            top: this.gameSize.h - 100
        }

        this.counter1 = false
        this.counter2 = false
        this.counter3 = false

        this.init()

        this.bonusUpdate = true
    }

    init() {
        this.playerElement = document.createElement('div')

        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.gameSize.w / 2 - this.playerSize.w / 2}px`
        this.playerElement.style.top = `${this.playerPos.top}px`
        this.playerElement.style.borderRadius = '20px'
        this.playerElement.style.border = '2px solid black'
        this.playerElement.style.boxShadow = '4px 4px 4px rgba(0, 0, 0, 0.2)'
        this.playerElement.style.background = 'silver'

        document.querySelector('#game-screen').appendChild(this.playerElement)
    }

    move(xPosition) {
        if ((xPosition >= 0) && (xPosition <= this.gameSize.w - this.playerSize.w)) {
            this.playerPos.left = xPosition
        }
        this.updatePosition()
    }

    updatePosition() {
        if (this.bonusUpdate) {
            this.playerElement.style.left = `${this.playerPos.left}px`
            this.playerElement.style.width = `${this.playerSize.w}px`
        } else {
            this.playerElement.style.left = `${this.playerPos.left + 100}px`
        }
    }

    updatePositionBonus() {
        if (!this.counter3) {
            this.bonusUpdate = false
            this.counter3 = true
            setTimeout(() => {
                this.bonusUpdate = true
                this.counter3 = false
            }, 1000)
        }
    }

    reducePlayer() {
        if (!this.counter1) {
            this.playerSize.w -= 50
            this.counter1 = true
            this.updatePosition
            setTimeout(() => {
                this.playerSize.w += 50
                this.updatePosition
                this.counter1 = false
            }, 6000)
        }
    }

    increasePlayer() {
        if (!this.counter2) {
            this.playerSize.w += 50
            this.counter2 = true
            this.updatePosition
            setTimeout(() => {
                this.playerSize.w -= 50
                this.updatePosition
                this.counter2 = false


            }, 6000)
        }
    }

    removeLife() {
        if (this.lifes != 0) {
            this.lifes--
        }
    }
}