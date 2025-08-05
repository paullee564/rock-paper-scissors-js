console.log("Rock, Paper, Scissors Game");

let gameOver = false;
let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (gameOver) return;

        const humanChoice = button.id; // Get the id of the clicked button
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

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
    let result = document.getElementById("result");
    let score = document.getElementById("score");

    if(gameOver) {
        result.innerText = "Game over! Please refresh the page to play again.";
        return;
    }
    
    if (humanChoice === computerChoice) {
        result.innerText = `\nIt's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        score.innerText = `Computer: ${computerScore}    Player: ${humanScore}`;
        result.innerText = `\nYou win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        score.innerText = `Computer: ${computerScore}    Player: ${humanScore}`;
        result.innerText = `\nYou lose! ${computerChoice} beats ${humanChoice}.`;
    }

    if(humanScore === 5 || computerScore === 5) {
        result.innerText = "The winner is " + (humanScore > computerScore ? "Player" : "Computer") + "!";
        gameOver = true;
        return;
    }
}
