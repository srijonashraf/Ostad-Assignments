const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

findMaxNumber = (...numbers) => {
    if (numbers.length === 0) {
        return null;
    } else {
        return Math.max(...numbers);
    }
}

function askProperty() {
    r1.question("Enter numbers to find the max [Type 'done' to exit the input]: ", function (input) {
        if (input === 'done') {
            r1.close();
        }
        else {

            const sendNumbers = input.split(' ').map(Number);
            console.log(findMaxNumber(...sendNumbers));
            askProperty()
        }

    });
}

askProperty();
