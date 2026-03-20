
let result = "";
let score = { wins: 0, losses: 0, ties: 0 };
let scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.random();
    if (randomNumber <= 1/3 && randomNumber > 0
    ) {
            computerChoice = "rock";
    } else if (randomNumber <= 2/3 && randomNumber > 1/3) {
        computerChoice = "paper";
    } else if (randomNumber <= 1 && randomNumber > 2/3) {
        computerChoice = "scissors";
    }
    return computerChoice;
};
function getHumanChoice() {
    let humanChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
}
function gameRound(computerChoice, humanChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock' || humanChoice === 'paper' && computerChoice === 'paper') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. It's a tie!`;
        score.ties += 1;
        scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(result + "\n" + scoresDisplay);
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. It's a tie!`;
        score.ties += 1;
        scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(result + "\n" + scoresDisplay);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`;
        score.wins += 1;
        scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(result + "\n" + scoresDisplay);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`;
        score.wins += 1;
        scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(result + "\n" + scoresDisplay);
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'scissors') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`;
        score.losses += 1;
        scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(result + "\n" + scoresDisplay);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`;
        score.losses += 1;
        scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
        alert(result + "\n" + scoresDisplay);
    } 
};
function playGame() {
    for (let i = 0; i < 5; i++) {
        alert (`game #${i + 1}`);
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        gameRound(computerSelection, humanSelection);
    };
    if (score.wins > score.losses) {
        alert(`You won the game! Final score: ${scoresDisplay}`);
    } else if (score.wins < score.losses) {
        alert(`You lost the game! Final score: ${scoresDisplay}`);
    } else {
        alert(`The game ended in a tie! Final score: ${scoresDisplay}`);
    }
};
playGame();