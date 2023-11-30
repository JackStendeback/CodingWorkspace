// TODO: Make a function that utilizes for loops, and if else statements, to output something fun & practical! 

// * Rock Paper Scissors vs Computer
// * Wins and Losses are tracked.

const choices = ["Rock", "Paper", "Scissors"];
let userWins = 0;
let computerWins = 0;

const computerSelection = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const userSelection = (string) => {
    console.log(`User selects: ${string}`);
    return string;
}

const playRound = (user, computer) => {
    if (user === computer) {
        console.log("Its a tie!")
    } else if (
        (user === "Rock" && computer === "Scissors") ||
        (user === "Paper" && computer === "Rock") ||
        (user === "Scissors" && computer === "Paper")
    ) {
        console.log(`You win! ${user} beats ${computer}!`);
        userWins++;
    } else {
        console.log(`You lose... ${computer} beats ${user}.`)
        computerWins++;
    }
}

const playGame = () => {
    for (i = 0; i < 5; i++) {
        const userChoice = userSelection(choices[Math.floor(Math.random() * choices.length)]);
        const computerChoice = computerSelection();
        playRound(userChoice, computerChoice);
    }
    console.log(`User wins: ${userWins}, Computer wins: ${computerWins}`);
    if (userWins > computerWins) {
        console.log("Congratulations! You win the game!");
    } else if (userWins < computerWins) {
        console.log("Sorry, you lost the game!");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();

// ? END OF ROCK PAPER SCISSORS CODE

// TODO: Create an Over-Under Guessing Game!


