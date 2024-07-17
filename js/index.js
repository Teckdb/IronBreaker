const buttonStart = document.querySelector("#btn")
const hiddenMenu = document.querySelector("#game-menu")
buttonStart.addEventListener("click", () => {
    hiddenMenu.style.visibility = "hidden"
    Game.init()
})
