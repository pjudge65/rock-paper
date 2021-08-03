let tallyPlayer = 0;
let tallyComputer = 0;

const results = document.querySelector("#results");
const currentPlay = document.querySelector("#currentPlay");
const winner = document.querySelector("#winner");
results.textContent = `Score: ${tallyPlayer} (you) - ${tallyComputer} (computer)`;


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener('click', (e) => {playRound("Rock", computerPlay())});
paperBtn.addEventListener('click', (e) => { playRound("Paper", computerPlay())});
scissorsBtn.addEventListener('click', (e) => { playRound("Scissors", computerPlay())});


function computerPlay() {
    let playIndex = Math.floor(Math.random() * 3);
    if (playIndex === 0) {
        return "Rock";
    }
    else if (playIndex === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playerPlay() {
    return prompt("Rock, Paper, or Scissors?");
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    while (tallyPlayer<5 && tallyComputer<5){
    if (playerSelection === computerSelection) {
        currentPlay.textContent = `${playerSelection} vs ${computerSelection} - Tie!`
        return "Tie";
    }
    else {
        if ((playerSelection === "Scissors" && computerSelection ==="Paper") || 
              (playerSelection ==="Paper" && computerSelection === "Rock") || 
                (playerSelection === "Rock" & computerSelection === "Scissors")) {
            tallyPlayer++;
            currentPlay.textContent = `${playerSelection} beats ${computerSelection}`;
            results.textContent = `Score: ${tallyPlayer} (you) - ${tallyComputer} (computer)`;
            if (tallyPlayer==5) {
                winner.textContent = "You Win! The Computer loses!"
            }
            return "Player";
        }
        else {
            tallyComputer++;
            currentPlay.textContent = `${playerSelection} loses to ${computerSelection}`;
            results.textContent = `Score: ${tallyPlayer} (you) - ${tallyComputer} (computer)`;
            if (tallyComputer==5) {
                winner.textContent = "The Computer Wins! You Lose!"
            }
            return "Computer";
        }
    }
}
}




function game(){

    let playerResult;
    let computerResult;


    //select the div element and display the score



    //keeps playing as long as player and computer has less than 5 points each
    while (tallyPlayer < 5 && tallyComputer < 5) {
        playerResult = playerPlay();
        computerResult = computerPlay();
        if (playRound(playerResult, computerResult) === "Tie") {
            alert(`Computer played ${computerResult}. You tied. ${tallyPlayer}-${tallyComputer}`);
            i--;
            continue;
        }
        else if (playRound(playerResult, computerResult) === "Player") {
            tallyPlayer += 1;
            alert(`Computer played ${computerResult}. You won this round. ${tallyPlayer}-${tallyComputer}`);
            continue;
        }
        else {
            tallyComputer += 1;
            alert(`Computer played ${computerResult}. You lost this round. ${tallyPlayer}-${tallyComputer}`);
            continue;
        }


        results.textContent = `Score: ${tallyPlayer} (you) - ${tallyComputer} (computer)`;
    }

    // if someone reaches 5 points, stops playing the game and "announces" a winner
    const winnerAnnounce = document.createElement('div');
    if (tallyPlayer > tallyComputer) {
    winnerAnnounce.textContent = "You Won!";
    document.appendChild(winnerAnnounce);
    }
    else {
        winnerAnnounce.textContent = "The Computer wins! You lose!";
        document.appendChild(winnerAnnounce);
    }


}