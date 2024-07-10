function getComputerChoice() {
    let num = Math.ceil(Math.random()*9);
    if (num > 0 && num < 4) {
        return 'rock';
    } else if (num > 3 && num < 7) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getPlayerChoice() {
    let answer = (prompt('Choose paper, rock, or scissors')).toLowerCase();
    if (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors') {
        alert('Please try again and input only rock or paper or scissors.');
    } else {
        return answer;
    }
}




function playFullGame() {
    console.log('We\'ll play 5 rounds and see who wins!');
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }


    

function playRound(playerChoice, computerChoice) {
    if (playerChoice === undefined) {
        console.log('You\'ve entered an incorrect choice, try again.');
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('Paper beats rock. You lose');
            computerScore++;
        } else if (computerChoice === 'scissors') {
            console.log('Rock beats scissors, you win!');
            playerScore++;
        } else {
            console.log('You both chose rock, it\'s a tie.');
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('Paper beats rock, you win!');
            playerScore++;
        } else if (computerChoice === 'scissors') {
            console.log('Scissors beat paper. You lose.');
            computerScore++;
        } else {
            console.log('You both chose paper. It\'s a tie.');
        }
    } else {
        if (computerChoice === 'rock') {
            console.log('Rock beats scissors. You lose.');
            computerScore++;
        } else if (computerChoice === 'paper') {
            console.log('Scissors beats paper, you win!');
            playerScore++;
        } else {
            console.log('You both chose scissors. It\'s a tie.');
        }
    }
    console.log(`Your score: ${playerScore} Computer Score: ${computerScore}`);
}
}