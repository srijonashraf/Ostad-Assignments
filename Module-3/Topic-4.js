const readline = require('readline');

const calculateSquare = (number) => {
    return number * number;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (userInput) => {
    const number = parseFloat(userInput);

    if (!isNaN(number)) {
        const square = calculateSquare(number);
        console.log(`The square of ${number} is ${square}`);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }

    rl.close();
});
