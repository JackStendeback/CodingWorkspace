// ? Try and find open source projects to work on!

// * Had trouble making FizzBuzz from scratch, so simplified it first.
const oneHundred = () => {
    for (let i = 1; i <= 100; i++) {
       console.log(i);
    }
}
// oneHundred();

const fizzBuzz = () => {
    let number = 1;
    for (let j = 0; j < 100; j++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz");
        } else if (number % 3 === 0 && number % 5 !== 0) {
            console.log("Fizz");
        } else if (number % 5 === 0 && number % 3 !== 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        }
        number++;
    }
}
fizzBuzz();

