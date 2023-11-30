const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const minNumber = 1;
  const maxNumber = 100;
  const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  let attempts = 0;
 
  // * Example of how to use readline (Node.js module)

  rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close(); // Close the interface after receiving input
  });

  rl. question('Please choose a number between 1 and 100. ', (input) => {
    const number = parseInt(input);

    rl.close();
  })