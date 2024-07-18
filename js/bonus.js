class Bonus {

    constructor(gameSize, brickPos, id, brickSize) {
        this.gameSize = gameSize
        this.brickPos = brickPos
        this.id = id
        this.brickSize = brickSize

        this.bonusSize = {
            w: bonus[this.id].bonusSize.w,
            h: bonus[this.id].bonusSize.h
        }

        this.img = bonus[this.id].img.src

        this.bonusPos = {
            left: this.brickPos.left + (brickSize.w / 2 - this.bonusSize.w / 2),
            top: this.brickPos.top
        }

        this.init()
    }

    init() {
        this.bonusElement = document.createElement('div')

        this.bonusElement.style.position = "absolute"
        this.bonusElement.style.width = `${this.bonusSize.w}px`
        this.bonusElement.style.height = `${this.bonusSize.h}px`
        this.bonusElement.style.left = `${this.brickPos.left}px`
        this.bonusElement.style.top = `${this.brickPos.top}px`
        this.bonusElement.style.backgroundImage = `${this.img}`
        this.bonusElement.style.backgroundSize = `contain`
        this.bonusElement.style.backgroundRepeat = `no-repeat`

        document.querySelector('#game-screen').appendChild(this.bonusElement)
    }

    removeBonus() {
        this.bonusElement.remove()
    }

    move() {
        this.bonusPos.top += bonus[this.id].bonusPhysics.speed.top
        this.updatePosition()
    }

    updatePosition() {
        this.bonusElement.style.left = `${this.bonusPos.left}px`
        this.bonusElement.style.top = `${this.bonusPos.top}px`
    }
}