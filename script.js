let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {

    let choices = ["rock", "paper", "scissors"];

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").innerText =
        "You: " + userChoice;

    document.getElementById("computerChoice").innerText =
        "Computer: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    }

    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        userScore++;
    }

    else {
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("result").innerText = result;

    document.getElementById("userScore").innerText = userScore;

    document.getElementById("computerScore").innerText = computerScore;
}