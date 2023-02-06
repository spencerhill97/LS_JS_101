const readline = require('readline-sync');

const RESULTS_OBJ = {
  Rock: { winner: ['Lizard', 'Scissors'] },
  Paper: { winner: ['Rock', 'Spock'] },
  Scissors: { winner: ['Paper', 'Lizard'] },
  Spock: { winner: ['Rock', 'Scissors'] },
  Lizard: { winner: ['Paper', 'Spock'] },
}

const GAME_CHOICES = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors',
  4: 'Spock',
  5: 'Lizard',
};

function displayChoices(obj) {
  let result = Object.keys(obj).map(key => `${obj[key]}: ${key}`);

  return prompt(result.join(' | '));
}

function executeComputerChoice(obj) {
  let randomNumber = Math.floor(Math.random() * Object.values(obj).length);
  let result = Object.values(obj)[randomNumber];

  return result[0].toUpperCase() + result.slice(1);
}

function prompt(message) {
  return console.log(`=> ${message}`);
} 

function displayWinner(obj, numOfWins) {
  let result = Object.keys(obj).filter(key => obj[key] >= numOfWins);
  return prompt(`The ${result.join('')} won the best of 5 game!`);
}

while (true) {
  const GAMES_NEEDED_TO_WIN = 3;
  const gameScore = { user: 0, computer: 0 };
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');

  while (gameScore.user !== 3 && gameScore.computer !== 3) {
    console.log('-----------------------------------------------------');
    prompt(`User score: ${gameScore.user} | Computer score: ${gameScore.computer}`);
    
    console.log('-----------------------------------------------------');
    displayChoices(GAME_CHOICES);
    
    prompt('Please pick one of the numbers associated with your choice above!');
    let userChoice = readline.question();

    while (true) {
      if (userChoice in GAME_CHOICES) {
        userChoice = GAME_CHOICES[userChoice];
        break;
      } else {
        prompt('That is an invalid entry! Please choose one of the numbers above.');
        userChoice = readline.question();
      }
    }

    let computerChoice = executeComputerChoice(GAME_CHOICES);
    let userWins = RESULTS_OBJ[userChoice].winner.includes(computerChoice);
    
    console.clear();

    if (userChoice === computerChoice) {
      prompt(`You both chose ${userChoice}! The game ends in a tie!`);
    } else if (userWins === true) {
      gameScore.user += 1;
      prompt(`You won! ${userChoice} beats ${computerChoice}!`);
    } else {
      gameScore.computer += 1;
      prompt(`You lost! ${computerChoice} beats ${userChoice}!`);
    }
  }

  displayWinner(gameScore, GAMES_NEEDED_TO_WIN);

  prompt('Do you want to play another best of three game? "y" | "n"');
  let playAgain = readline.question().toLowerCase();

  while (true) {
    if (playAgain[0] === 'y' || playAgain[0] === 'n') {
      break;
    } else {
      prompt('Hmmm... looks like a typo! Please pick "yes" or "no"');
      playAgain = readline.question().toLowerCase();
    }
  }

  if (playAgain[0] === 'n') {
    break;
  }

  gameScore.user = 0;
  gameScore.computer = 0;
}
