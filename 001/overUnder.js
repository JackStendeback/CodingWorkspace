const readline = require('readline'); // * This requires the 'readline' node.js module to be used.

// * This creates the readline interface, needed to ask questions to be input into the terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// * Setting global variables for the min, max, and number to be guessed.
const minNumber = 1;
const maxNumber = 100;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// * After success is reached, you will be shown the amount of attempts taken to guess the secret number.
let attempts = 0; 

// * The function that asks you for numbers, and then guides you in the right direction via 'Too high' or 'Too low', until you reach the right number.
const guessTheNumber = () => {
  // * readline prompts user to enter a number between the min and max amounts declared earlier.
    rl.question(`Guess a number between ${minNumber} and ${maxNumber}: `, (answer) => {
      // * This parses the users input, making sure it turns into an integer.
        const userGuess = parseInt(answer);

        // * If user number is not a valid number, or is below the min or above the max, a prompt appears, asking to enter a valid number.
        if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
            console.log('Please enter a valid number within the specified range.');
            guessTheNumber();
        } else {
          // * If its a valid number, each attempt to guess the secret number increases your 'attempt' score by 1.
            attempts++;

            // * When guessed successfully, you are given the current number of attempts taken to reach the secret number.
            if (userGuess === secretNumber) {
                console.log(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`);
                rl.close();
                
                // * If you are too low, you will be prompted to enter another guess, which is then send through again via calling the 'guessTheNumber' function once more.
            } else if (userGuess < secretNumber) {
                console.log('Too low! Try a higher number.');
                guessTheNumber();

                // * If you are too high, you will be prompted to enter another guess, which is then send through again via calling the 'guessTheNumber' function once more.
            } else {
                console.log('Too high! Try a lower number.');
                guessTheNumber();
            }
        }
    });
};

// * Introductory statements welcoming you to the game, and explaining the rules!
console.log('Welcome to Guess the Number game!');
console.log(`Try to guess a number between ${minNumber} and ${maxNumber}.`);

// * Calling the function to start the guessing game! Will finish and be exited once the correct number is input by the user.
guessTheNumber();


// TODO: These were Nate Master's two interview questions for Mastercard!!

// ? iterate through a multi dimensional matrix, finding smallest number in each column and each row.

// ? walking through a sql query and seeing what would be going through ineach part.