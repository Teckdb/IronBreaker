const Game = {

    gameSize: {
        w: 700,
        h: window.innerHeight
    },

    keys: {
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight'
    },

    mousePosition: 0,

    firstPlayer: undefined,
    pelotaDePrueba: undefined,
    intervalGame: undefined,

    frameCounter: 0,

    init() {
        this.setGameDimensions()
        this.start()
    },

    setGameDimensions() {
        document.querySelector('#game-screen').style.height = `${this.gameSize.h}px`
        document.querySelector('#game-screen').style.width = `${this.gameSize.w}px`
        document.querySelector('#game-screen').style.backgroundColor = `green`
        document.querySelector('#game-screen').style.left = `25%`

    },

    start() {
        this.createPlayer()
        this.createBall()
        this.setEventListeners()
        this.createBrick()
        this.gameLoop()
    },

    gameLoop() {
        invervalGame = setInterval(() => {
            this.frameCounter++
            this.moveAll()

            if (pelotaDePrueba.gameOver) {
                alert('GAME OVER')
            }

        }, 20)
    },

    createPlayer() {
        firstPlayer = new Player(this.gameSize, this.mousePosition)
        firstPlayer.init()

    },

    createBall() {
        pelotaDePrueba = new Ball(this.gameSize, firstPlayer.playerPos, firstPlayer.playerSize)
        pelotaDePrueba.init()
    },

    createBrick() {
        brickDePrueba = new Brick(this.gameSize, firstPlayer.playerPos, firstPlayer.playerSize, pelotaDePrueba.ballPos, pelotaDePrueba.ballSize)
        brickDePrueba.init()
    },

    setEventListeners() {

        document.onkeydown = event => {

            switch (event.code) {
                case this.keys.LEFT:
                    firstPlayer.moveLeft()
                    break
                case this.keys.RIGHT:
                    firstPlayer.moveRight()
                    break
            }
        }
    },

    moveAll() {
        firstPlayer.move()
        pelotaDePrueba.move()
        brickDePrueba.move()
        this.collisionBallPlayer()
        this.collisionBallBrick()
    },

    collisionBallPlayer() {

        if (
            firstPlayer.playerPos.left < pelotaDePrueba.ballPos.left + pelotaDePrueba.ballSize.w &&
            firstPlayer.playerPos.left + firstPlayer.playerSize.w > pelotaDePrueba.ballPos.left &&
            firstPlayer.playerPos.top < pelotaDePrueba.ballPos.top + pelotaDePrueba.ballSize.h &&
            firstPlayer.playerPos.top + firstPlayer.playerSize.h > pelotaDePrueba.ballPos.top
        ) {
            pelotaDePrueba.turnTop()
        }

    },

    collisionBallBrick() {

        if (
            brickDePrueba.brickPos.left < pelotaDePrueba.ballPos.left + pelotaDePrueba.ballSize.w &&
            brickDePrueba.brickPos.left + brickDePrueba.brickSize.w > pelotaDePrueba.ballPos.left &&
            brickDePrueba.brickPos.top < pelotaDePrueba.ballPos.top + pelotaDePrueba.ballSize.h &&
            brickDePrueba.brickPos.top + brickDePrueba.brickSize.h > pelotaDePrueba.ballPos.top
        ) {
            pelotaDePrueba.turnTop()
            brickDePrueba.youWin()
            console.log("ouch")
        }

    }


}