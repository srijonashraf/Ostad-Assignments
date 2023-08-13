const readline = require('readline');

class MathUtility {
    static multiply(a, b) {
        return a * b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter two numbers separated by a space: ", (userInput) => {
    const inputArray = userInput.split(' ').map(Number);

    if (inputArray.length !== 2 || inputArray.some(isNaN)) {
        console.log("Invalid input. Please enter two valid numbers separated by a space.");
    } else {
        const [a, b] = inputArray;
        const product = MathUtility.multiply(a, b);
        console.log(`The product of ${a} and ${b} is ${product}`);
    }

    rl.close();
});
