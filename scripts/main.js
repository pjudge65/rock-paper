

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else {
        if ((playerSelection === "Scissors" && computerSelection ==="Paper") || (playerSelection ==="Paper" && computerSelection === "Rock") || (playerSelection === "Rock" & computerSelection === "Scissors")) {
            return "Player";
        }
        else {
            return "Computer";
        }
    }
}

function game(){
    let numRounds = 5;
    let playerResult;
    let computerResult;
    let tallyPlayer = 0;
    let tallyComputer = 0;
    for (i = 0; i < 5; i++) {
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

    }
    if (tallyPlayer === tallyComputer) {
        alert("Game over. You tied the computer.");
    }
    else if(tallyPlayer > tallyComputer) {
        alert("Game over. You won!");
    }
    else {
        alert("Game over. You lose.");
    }
}