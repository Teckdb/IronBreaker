class Brick {
    constructor(brickSize, brickPos) {

        this.brickSize = brickSize

        this.brickPos = brickPos

        this.randomNumber = Math.floor(Math.random() * 4)

        this.init()
    }

    init() {

        this.brickElement = document.createElement('div')

        this.brickElement.style.position = "absolute"
        this.brickElement.style.width = `${this.brickSize.w}px`
        this.brickElement.style.height = `${this.brickSize.h}px`
        this.brickElement.style.left = `${this.brickPos.left}px`
        this.brickElement.style.top = `${this.brickPos.top}px`
        this.brickElement.style.backgroundColor = `${brickColors[this.randomNumber]}`
        this.brickElement.style.border = '2px solid navy'
        this.brickElement.style.borderRadius = '5px'
        //this.brickElement.style.margin = '8px'
        // this.brickElement.style.boxShadow = '1px 1px 5px black'



        document.querySelector('#game-screen').appendChild(this.brickElement)
    }

    removeBrick() {
        this.brickElement.remove()
    }
}