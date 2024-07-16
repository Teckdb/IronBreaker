class Brick {
    constructor(brickSize, brickPos) {

        this.brickSize = brickSize

        this.brickPos = brickPos

        this.init()
    }

    init() {

        this.brickElement = document.createElement('div')

        this.brickElement.style.position = "absolute"
        this.brickElement.style.width = `${this.brickSize.w}px`
        this.brickElement.style.height = `${this.brickSize.h}px`
        this.brickElement.style.left = `${this.brickPos.left}px`
        this.brickElement.style.top = `${this.brickPos.top}px`
        this.brickElement.style.backgroundColor = `#${((1 << 24) * Math.random() | 0).toString(16)}`
        this.brickElement.style.border = '1px solid purple'
        this.brickElement.style.borderRadius = '5px'

        document.querySelector('#game-screen').appendChild(this.brickElement)
    }

    removeBrick() {
        this.brickElement.remove()
    }
}