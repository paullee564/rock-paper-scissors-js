console.log("Rock, Paper, Scissors Game");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice));
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
         console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

}

function playGame(){
    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();