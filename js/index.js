const buttonStart = document.querySelector("#btn")
const hiddenMenu = document.querySelector("#game-menu")
const credits = document.querySelector('#game-credits')
const winnerCredits = document.querySelector('#winner-credits')
const buttonRestart = document.querySelector('#btn-restart')
const buttonRestart2 = document.querySelector(`#btn-restart-2`)
const buttonMute = document.querySelector('.mute-btn');
const myAudio = document.querySelector('.audioLoop')

hiddenMenu.style.left = `${window.innerWidth / 2 - 350}px`
credits.style.left = `${window.innerWidth / 2 - 350}px`
winnerCredits.style.left = `${window.innerWidth / 2 - 350}px`

buttonStart.addEventListener("click", () => {
    hiddenMenu.style.visibility = "hidden"
    Game.init()
})

buttonRestart.addEventListener("click", () => {
    window.location.reload()
})

buttonRestart2.addEventListener("click", () => {
    window.location.reload()
})

buttonMute.addEventListener('click', () => {
    myAudio.muted = !myAudio.muted;
})

