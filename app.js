

let player1Name = prompt(`Player1: Enter your name`);
let player2Name = prompt(`Player2: Enter your name`);

document.querySelector("#player1Name").innerHTML = player1Name;
document.querySelector("#player2Name").innerHTML = player2Name;


const player1Element = document.querySelector("#player1");
const player2Element = document.querySelector("#player2");

player1Element.classList.add("activePlayer");
player2Element.classList.remove("activePlayer")

let currentPlayer = true;

let gameArea = document.querySelector("#gameArea")
let currentScore1 = 0;
let currentScore2 = 0;

let image = document.querySelector("img")
let currentScoreHtml1 = document.querySelector("#currentScore1");
let currentScoreHtml2 = document.querySelector("#currentScore2");

let totalScore1 = document.querySelector("#totalScore1");
let totalScore2 = document.querySelector("#totalScore2");

function roll(){
    let diceNumber = Math.ceil(Math.random() * 6);
    image.src = `./Assets/${diceNumber}.png`
    console.log(diceNumber);
    
    if(diceNumber != 1){
        if(currentPlayer){
            currentScore1 += diceNumber 
            currentScoreHtml1.innerHTML = currentScore1
        }else{
            currentScore2 += diceNumber
            currentScoreHtml2.innerHTML = currentScore2
        }
    }else{
        if (currentPlayer) {
            currentScore1 = 0;
            currentScoreHtml1.innerHTML = currentScore1;
        }else{
            currentScore2 = 0;
            currentScoreHtml2.innerHTML = currentScore2;    
        }
        currentPlayer = !currentPlayer;
        player1Element.classList.toggle("activePlayer")
        player2Element.classList.toggle("activePlayer")
    }
}

function hold(){
    if (currentPlayer) {
        totalScore1.innerHTML = +totalScore1.innerHTML + currentScore1
        currentScore1 = 0
        currentScore1.innerHTML = currentScore1;

        if (totalScore1.innerHTML >= 100) {
            gameArea.innerHTML = `<h1>Winner is ${player1Name}</h1>`
        }
    }else{
        totalScore2.innerHTML = +totalScore2.innerHTML + currentScore2;
        currentScore2 = 0;
        currentScore2.innerHTML = currentScore2;
        if(totalScore2.innerHTML >= 100){
            gameArea.innerHTML = `<h1>Winner is ${player2Name}</h1>`
        }
    }
    currentPlayer = !currentPlayer;
    player1Element.classList.toggle("activePlayer")
    player2Element.classList.toggle("activePlayer")

}

