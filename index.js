// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player3Score = 0
let player1Turn = true
let player2Turn = false
let player3Turn = false
// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player3Dice = document.getElementById("player3Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player3Scoreboard = document.getElementById("player3Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function showOptionButton() {
    rollBtn.style.display = "block"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player3Dice.classList.remove("active")
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
         showOptionButton()
    } else if (player2Turn){
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.remove("active")
        player3Dice.classList.add("active")
        message.textContent = "Player 3 Turn"
    } else {
        player3Score += randomNumber
        player3Scoreboard.textContent = player3Score
        player3Dice.textContent = randomNumber
        player3Dice.classList.remove("active")
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    if(player1Turn) {
        player1Turn = false
        player2Turn = true
    }else if (player2Turn){
        player2Turn = false
        player3Turn = true
    } else {
        player3Turn = false
        player1Turn = true
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🎉"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    } else if (player3Score >= 20) {
        message.textContent = "Player 3 Won 🎉"
        showResetButton()}
    // player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player3Score = 0 
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player3Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player3Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player3Dice.classList.remove("active")
    player1Dice.classList.add("active")
}