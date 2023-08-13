const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

rl.question("Enter elements for the first array, separated by commas: ", function (input1) {
    rl.question("Enter elements for the second array, separated by commas: ", function (input2) {
        const arr1 = input1.split(",").map(item => parseInt(item.trim()));
        const arr2 = input2.split(",").map(item => parseInt(item.trim()));

        console.log("Array 1:", arr1);
        console.log("Array 2:", arr2);
        console.log("Merged Array:", mergeArrays(arr1, arr2));

        rl.close();
    });
});
