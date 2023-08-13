const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
    } else {
        for (let property in obj) {
            console.log(`${property}: ${obj[property]}`);
        }
    }
}

function createObjectFromUserInput() {
    const obj = {};

    function askProperty() {
        rl.question("Enter property name [Type 'done' to exit the input]: ", function (property) {
            if (property === 'done') {
                rl.close();
                printObjectProperties(obj);
            } else {
                rl.question(`Enter value for property '${property}': `, function (value) {
                    obj[property] = value;
                    askProperty();
                });
            }
        });
    }

    askProperty();
}

createObjectFromUserInput();
