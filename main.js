function myRandom() {
	return Math.floor(Math.random() * 3);
}

function computerPlay() {
	let number = myRandom();
	switch (number) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
		default:
			return alert('Somenthing went wrong!');
	}
}

function playRound(computerSelection, playerSelection) {
	const comp = computerSelection.toLowerCase();
	const player = playerSelection.toLowerCase();

	if (comp == player) {
		return `That's a tie! Computer also chose: ${comp}`;
	} else if (comp == 'rock') {
		if (player == 'scissors') {
			return 'You Loose! Rock beats Scissors!';
		} else {
			return 'You win! Paper beats Rock!';
		}
	} else if (comp == 'paper') {
		if (player == 'scissors') {
			return 'You Win! Scissors beats Paper!';
		} else {
			return 'You Loose! Paper beats Rock';
		}
	} else {
		if (player == 'rock') {
			return 'You win! Rock beats Scissors';
		} else {
			return 'You Loose! Scissors beats Paper!';
		}
	}
}

function game() {
	const resultsBox = document.querySelector('#game');
	const paragraph = document.createElement('p');
	const buttons = document.querySelectorAll('.btn');
	let result = '';

	buttons.forEach((button) =>
		button.addEventListener('click', function () {
			result = playRound(computerPlay(), button.id);
			paragraph.textContent = result;
			givePoints(result);
			checkVictory();
		})
	);

	resultsBox.appendChild(paragraph);
}

let playerPoints = 0;
let computerPoints = 0;
const displayPointsComp = document.querySelector('#computer-score');
const displayPointsJogador = document.querySelector('#player-score');

function givePoints(result = ' ') {
	if (result.toLowerCase().includes('win')) {
		playerPoints++;
	} else if (result.toLowerCase().includes('loose')) {
		computerPoints++;
	}
	displayPointsJogador.textContent = `${playerPoints}`;
	displayPointsComp.textContent = `${computerPoints}`;
}

function checkVictory() {
	if (playerPoints == 5 || computerPoints == 5) {
		if (playerPoints == 5) {
			setTimeout(() => {
				window.alert('Game Over!!\n You win!\n A new round will start!');
				playerPoints = 0;
				computerPoints = 0;
				givePoints();
			}, 500);
		} else {
			setTimeout(() => {
				window.alert('Game Over!!\n You lost!\n A new round will start!');
				playerPoints = 0;
				computerPoints = 0;
				givePoints();
			}, 500);
		}
	}
}

game();
