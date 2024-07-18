const Game = {

    gameSize: {
        w: 700,
        h: window.innerHeight
    },

    gamePos: {
        left: (window.innerWidth / 2) - 350,
        top: 0
    },

    gameArea: document.getElementById('game-screen'),

    mousePosition: 0,

    scoreboardElement: document.createElement('div'),

    scoreboardSize: {
        h: 50,
        w: 200
    },

    scoreboardPos: {
        top: window.innerHeight - 100,
        left: -250 //+
    },

    firstPlayer: undefined,

    ball: undefined,

    ball1: [],

    hasWon: false,

    hasLost: false,

    hasLostBonus: false,

    lifes: 4,

    actualMap: [],

    balls: [],

    totalBonus: [],

    points: 0,

    center: 0,

    clickToStart: false,

    scoreCredits: document.querySelector('#score'),

    winnerCredits: document.querySelector('#points'),

    stopGame: undefined,

    init() {
        this.setGameDimensions()
        this.showScoreboard()
        this.start()
    },

    setGameDimensions() {
        document.querySelector('#game-background').style.height = `${window.innerHeight}px`
        document.querySelector('#game-background').style.width = `${window.innerWidth}px`
        document.querySelector('#game-background').style.position = `absolute`

        document.querySelector('#game-screen').style.height = `${this.gameSize.h}px`
        document.querySelector('#game-screen').style.width = `${this.gameSize.w}px`
        document.querySelector('#game-screen').style.background = `rgba(121, 58, 246, 0.34)`
        document.querySelector('#game-screen').style.border = '1px solid black'
        document.querySelector('#game-screen').style.borderRadius = '60px'
        document.querySelector('#game-screen').style.left = `${this.gamePos.left}px`
        document.querySelector('#game-screen').style.cursor = `none`

    },

    showScoreboard() {
        this.scoreboardElement.style.height = `${this.scoreboardSize.h}px`
        this.scoreboardElement.style.width = `${this.scoreboardSize.w}px`
        this.scoreboardElement.style.position = `absolute`
        this.scoreboardElement.style.top = `${this.scoreboardPos.top}px`
        this.scoreboardElement.style.left = `${this.scoreboardPos.left}px`
        this.scoreboardElement.style.background = `rgba(121, 58, 246, 0.34)`
        this.scoreboardElement.style.color = `#f5ff62`
        this.scoreboardElement.style.border = '1px solid black'
        this.scoreboardElement.style.borderRadius = '60px'
        this.scoreboardElement.style.display = 'flex'
        this.scoreboardElement.style.justifyContent = 'center'
        this.scoreboardElement.style.alignItems = 'center'

        document.querySelector('#game-screen').appendChild(this.scoreboardElement)
    },

    start() {
        this.createPlayer()
        this.createBalls()
        this.createBricks()
        this.setEventListeners()
        this.gameLoop()
    },

    gameLoop() {
        stopGame = setInterval(() => {
            this.moveAll()
        }, 13
        )
    },

    createPlayer() {
        this.firstPlayer = new Player(this.gameSize, this.mousePosition)
    },

    createBalls() {
        this.balls = ballsData.map((eachBall) => {
            return new Ball(this.gameSize, eachBall.ballSize, this.firstPlayer.playerSize)
        })
        this.checkLife()
    },

    createBricks() {
        this.actualMap = mapLevel1.map((eachBrick) => {
            return new Brick(eachBrick.brickSize, eachBrick.brickPos)

        })
    },

    setEventListeners() {
        document.onmousemove = event => {

            const rect = this.gameArea.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            this.center = x - this.firstPlayer.playerSize.w / 2

            this.firstPlayer.move(this.center)
        }

        document.onclick = event => {
            if (!this.clickToStart) {
                this.clickToStart = true
            }
        }
    },

    moveAll() {
        this.firstPlayer.move()
        this.ball.move(this.center, this.clickToStart)
        this.checkCollisionBallPlayer()
        this.checkCollisionBallBrick()
        this.checkForBonus()
        this.checkLoseBall()

        this.scoreboardElement.innerHTML = `${this.points} points <br> ${this.lifes} lives`
    },

    checkCollisionBallPlayer() {
        if (
            this.firstPlayer.playerPos.left <= this.ball.ballPos.left + this.ball.ballSize.w &&
            this.firstPlayer.playerPos.left + this.firstPlayer.playerSize.w >= this.ball.ballPos.left &&
            this.firstPlayer.playerPos.top <= this.ball.ballPos.top + this.ball.ballSize.h &&
            this.firstPlayer.playerPos.top + this.firstPlayer.playerSize.h >= this.ball.ballPos.top
        ) {
            this.ball.turnTop()
        }
    },

    checkCollisionBallBrick() {
        this.actualMap.forEach((eachBrick, idx) => {
            if (
                eachBrick.brickPos.left <= this.ball.ballPos.left + this.ball.ballSize.w &&
                eachBrick.brickPos.left + eachBrick.brickSize.w >= this.ball.ballPos.left &&
                eachBrick.brickPos.top <= this.ball.ballPos.top + this.ball.ballSize.h &&
                eachBrick.brickPos.top + eachBrick.brickSize.h > this.ball.ballPos.top
            ) {
                this.ball.turnTop()
                this.points += 50
                this.actualMap.splice(idx, 1)
                if (Math.floor(Math.random() * 11) >= 8) {
                    this.totalBonus.push(new Bonus(this.gameSize, eachBrick.brickPos, Math.floor(Math.random() * 6), eachBrick.brickSize))
                }
                eachBrick.removeBrick()
            }
        })

        if (!this.hasWon && this.actualMap.length === 0) {
            this.hasWon = true
            this.youWin()
        }
    },

    checkForBonus() {
        this.totalBonus.forEach((elm, idx) => {
            elm.move()
            if (this.firstPlayer.playerPos.left <= elm.bonusPos.left + elm.bonusSize.w &&
                this.firstPlayer.playerPos.left + this.firstPlayer.playerSize.w >= elm.bonusPos.left &&
                this.firstPlayer.playerPos.top <= elm.bonusPos.top + elm.bonusSize.h &&
                this.firstPlayer.playerPos.top + this.firstPlayer.playerSize.h >= elm.bonusPos.top) {
                this.applyBonus(elm.id)
                elm.removeBonus()
                this.totalBonus.splice(idx, 1)
            }
            if ((elm.bonusPos.top >= this.gameSize.h + 50) && (elm.bonusPos.top <= elm.gameSize.h + 60) && !this.hasLostBonus) {
                elm.removeBonus()
                this.totalBonus.splice(idx, 1)
            }
        })
    },

    checkLoseBall() {
        this.balls.forEach((elm) => {
            if ((elm.ballPos.top >= this.gameSize.h + 50) && (elm.ballPos.top <= elm.gameSize.h + 60) && !this.hasLost) {
                this.hasLost = true
                this.clickToStart = false
                this.removeLife()
                elm.removeBall()
            }
        })
    },

    applyBonus(idx) {
        switch (idx) {
            case 0:
                this.ball.increaseBall()
                break;
            case 1:
                this.firstPlayer.reducePlayer()
                break;
            case 2:
                this.firstPlayer.increasePlayer()
                break;
            case 3:
                this.lifes--
                this.balls.pop()
                break;
            case 4:
                this.lifes++
                this.balls.push(new Ball(this.gameSize, ballsData[0].ballSize, this.firstPlayer.playerSize))
                break;
            case 5:
                this.firstPlayer.updatePositionBonus()
                break;
        }
    },

    checkLife() {
        if (this.lifes !== 0) {
            this.lifes--
            this.hasLost = false
            this.newLife()

        }
        else {
            this.youLose()
        }
    },

    newLife() {
        this.ball = this.balls[0]
        this.ball.init()
    },

    removeLife() {
        this.balls.shift()
        this.checkLife()
    },

    youWin() {
        const timeoutID = setTimeout(() => {
            document.querySelector('#game-screen').style.visibility = 'hidden'
            document.querySelector('#winner-credits').style.visibility = 'visible'
            this.winnerCredits.innerHTML = `${this.points}`
            clearInterval(stopGame)
        }, 600)
    },

    youLose() {
        const timeoutID = setTimeout(() => {
            document.querySelector('#game-screen').style.visibility = 'hidden'
            document.querySelector('#game-credits').style.visibility = 'visible'
            this.scoreCredits.innerHTML = `${this.points}`
        }, 600)
    }
}