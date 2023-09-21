const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && screen1.classList.contains("hide")) {
        handleResetClick()
    }
})  

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber")

    if (!inputNumber.value || inputNumber.value < 0 || inputNumber.value > 10) {
        return alert("Digite um número entre 0 e 10")
    }

    if (inputNumber.value == randomNumber) {
        toggleScreen()

        document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttemps} tentativas!`
    }

    inputNumber.value = ""
    xAttemps++
}

function handleResetClick() {
    toggleScreen()
    xAttemps = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
