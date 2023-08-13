const readline = require('readline');

const doubleNumbers = (numbers) => {
    return numbers.map(number => number * 2);
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (userInput) => {
    const inputArray = userInput.split(' ').map(Number);

    if (inputArray.some(isNaN)) {
        console.log("Invalid input. Please enter valid numbers separated by spaces.");
    } else {
        const doubledArray = doubleNumbers(inputArray);
        console.log("Doubled numbers:", doubledArray);
    }

    rl.close();
});
