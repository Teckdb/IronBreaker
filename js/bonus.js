class Bonus {

    constructor(gameSize, brickPos, id) {
        this.gameSize = gameSize
        this.brickPos = brickPos
        this.id = id
        this.bonusPos = {
            left: this.brickPos.left,
            top: this.brickPos.top
        }
        this.init()

    }

    init() {

        this.bonusElement = document.createElement('div')

        this.bonusElement.style.position = "absolute"
        this.bonusElement.style.width = `${bonus[this.id].bonusSize.w}px`
        this.bonusElement.style.height = `${bonus[this.id].bonusSize.h}px`
        this.bonusElement.style.left = `${this.brickPos.left}px`
        this.bonusElement.style.top = `${this.brickPos.top}px`
        this.bonusElement.style.backgroundColor = `black`
        this.bonusElement.style.border = '2px solid navy'
        this.bonusElement.style.borderRadius = '5px'

        document.querySelector('#game-screen').appendChild(this.bonusElement)
    }

    move() {
        this.bonusPos.top += bonus.bonusPhysics.speed.top
    }

    updatePosition() {
        this.bonusElement.style.left = `${this.bonusPos.left}px`
        this.bonusElement.style.top = `${this.bonusPos.top}px`
    }
}