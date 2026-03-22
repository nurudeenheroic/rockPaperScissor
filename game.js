
let result ='';
let displayResult = document.querySelector('.displayResult');
let displayScore = document.querySelector('.displayScore');
let score = { wins: 0, losses: 0, ties: 0 };
let scoresDisplay = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.random();
    if (randomNumber <= 1/3 && randomNumber > 0
    ) {
            computerChoice = "Rock";
    } else if (randomNumber <= 2/3 && randomNumber > 1/3) {
        computerChoice = "Paper";
    } else if (randomNumber <= 1 && randomNumber > 2/3) {
        computerChoice = "Scissors";
    }
    return computerChoice;
};
function gameRound(computerChoice, humanChoice) {
    if (humanChoice === 'Rock' && computerChoice === 'Rock' || humanChoice === 'Paper' && computerChoice === 'Paper') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. It's a tie!`;
        displayResult.innerHTML = result;
        score.ties += 1;
        scoresDisplay = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses} `;
        displayScore.innerHTML = scoresDisplay;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Scissors') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. It's a tie!`;
        displayResult.innerHTML = result;
        score.ties += 1;
        scoresDisplay = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses} `;
        displayScore.innerHTML = scoresDisplay;
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors' || humanChoice === 'Paper' && computerChoice === 'Rock') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`;
        displayResult.innerHTML = result;
        score.wins += 1;
        scoresDisplay = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses} `;
        displayScore.innerHTML = scoresDisplay;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`;
        displayResult.innerHTML = result;
        score.wins += 1;
        scoresDisplay = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses} `;
        displayScore.innerHTML = scoresDisplay;
    }
    else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`;
        displayResult.innerHTML = result;
        score.losses += 1;
        scoresDisplay = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses} `;
        displayScore.innerHTML = scoresDisplay;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        result = `You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`;
        displayResult.innerHTML = result;
        score.losses += 1;
        scoresDisplay = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses} `;
        displayScore.innerHTML = scoresDisplay;
    } 
};
function playGame(humanChoice) {
        computerSelection = getComputerChoice();
        gameRound(computerSelection, humanChoice);
    if (score.wins === 5 && score.wins > score.losses) {
        displayScore.innerHTML = `You won the game! Final score: ${scoresDisplay}`;
    } else if (score.wins < score.losses && score.losses === 5) {
        displayScore.innerHTML = `You lost the game! Final score: ${scoresDisplay}`;
    } else if (score.ties === 5) {
        displayScore.innerHTML = `The game ended in a tie! Final score: ${scoresDisplay}`;
    }
};
function reset() {
    score = { wins: 0, losses: 0, ties: 0 };
    scoresDisplay = `Wins: 0 Losses: 0 Ties: 0`;
    displayScore.innerHTML = scoresDisplay;
    displayResult.innerHTML = 'Game reset. Click a button to play again!';
}