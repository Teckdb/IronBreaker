const Game = {

    gameSize: {
        w: 700,
        h: window.innerHeight
    },

    gamePos: {
        left: 25,
        top: 0
    },

    keys: {
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight'
    },

    mousePosition: 0,

    gameArea: document.getElementById('game-screen'),

    firstPlayer: undefined,
    pelotaDePrueba: undefined,
    intervalGame: undefined,

    frameCounter: 0,

    actualMap: [],

    randomColor: Math.floor(Math.random() * 360),

    //lifes: 3,
    ball: [],

    init() {
        this.setGameDimensions()
        this.start()
    },

    setGameDimensions() {
        // document.querySelector('#game-background').style.backgroundImage = `url('img/img_back.png')`
        document.querySelector('#game-background').style.height = `${window.innerHeight}px`
        document.querySelector('#game-background').style.width = `${window.innerWidth}px`
        document.querySelector('#game-background').position = `absolute`
        // document.querySelector('#game-background').style.backgroundRepeat = ``
        document.querySelector('#game-background').style.background = `turquoise`

        document.querySelector('#game-screen').style.height = `${this.gameSize.h}px`
        document.querySelector('#game-screen').style.width = `${this.gameSize.w}px`
        document.querySelector('#game-screen').style.background = `ivory`
        document.querySelector('#game-screen').style.left = `${this.gamePos.left}%`
        document.querySelector('#game-screen').style.cursor = `none`

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
        }, 20)
    },

    createPlayer() {
        firstPlayer = new Player(this.gameSize, this.mousePosition)
        firstPlayer.init()
    },

    createBall() {
        pelotaDePrueba = new Ball(this.gameSize, firstPlayer.playerPos, firstPlayer.playerSize)
        pelotaDePrueba.init()

        // for (let i = lifes; i > 0; i--) {
        //     this.ball.push(new Ball(this.gameSize, firstPlayer.playerPos, firstPlayer.playerPos))
        // }
    },

    createBrick() {
        actualMap = mapLevel1.map((eachBrick) => {
            this.actualMap.push(new Brick(this.gameArea, this.gameSize, eachBrick.brickSize, eachBrick.brickPos))

        })
        //actualMap.init()
        console.log(this.actualMap)
    },

    setEventListeners() {

        document.onmousemove = event => {

            const rect = this.gameArea.getBoundingClientRect(); // Obtener las coordenadas del área de juego
            const x = event.clientX - rect.left; // Coordenada X relativa al área de juego
            const y = event.clientY - rect.top;  // Coordenada Y relativa al área de juego

            // Mover el objeto a la posición del ratón dentro del área de juego
            firstPlayer.moveMouse(x - firstPlayer.playerSize.w / 2)
        }
    },

    moveAll() {
        firstPlayer.move()
        pelotaDePrueba.move()
        this.collisionBallPlayer()
        this.collisionBallBrick()
        this.checkLife()

    },

    collisionBallPlayer() {


        if (
            firstPlayer.playerPos.left <= pelotaDePrueba.ballPos.left + pelotaDePrueba.ballSize.w &&
            firstPlayer.playerPos.left + firstPlayer.playerSize.w >= pelotaDePrueba.ballPos.left &&
            firstPlayer.playerPos.top <= pelotaDePrueba.ballPos.top + pelotaDePrueba.ballSize.h &&
            firstPlayer.playerPos.top + firstPlayer.playerSize.h >= pelotaDePrueba.ballPos.top
        ) {
            pelotaDePrueba.turnTop()
        }


    },

    collisionBallBrick() {

        this.actualMap.forEach((brickEach, idx) => {
            if (
                brickEach.brickPos.left <= pelotaDePrueba.ballPos.left + pelotaDePrueba.ballSize.w &&
                brickEach.brickPos.left + brickEach.brickSize.w >= pelotaDePrueba.ballPos.left &&
                brickEach.brickPos.top <= pelotaDePrueba.ballPos.top + pelotaDePrueba.ballSize.h &&
                brickEach.brickPos.top + brickEach.brickSize.h > pelotaDePrueba.ballPos.top
            ) {
                pelotaDePrueba.turnTop()
                this.actualMap.splice(idx, 1)
                brickEach.brokenBrick()
            }
        })

        let counterFinish = 0
        if (this.actualMap.length === 0 && counterFinish === 0) {
            counterFinish++
            this.youWin()
        }




    },

    checkLife() {
        if (pelotaDePrueba.gameOver && this.lifes != 0) {
            this.newLife()
        }
    },

    youWin() {

        const timeoutID = setTimeout(() => {
            alert('MÁQUINA, MASTODONTE, GANADORRRRR')
        }, 1000)
    },

    newLife() {

    }

}