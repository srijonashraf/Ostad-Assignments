getEven = (numbersArray) => {
    const evenArray = numbersArray.filter(x => x % 2 === 0);
    console.log(`Filtered Even Numbers: ${JSON.stringify(evenArray)}`);
}

function main(input) {
    var originalArray = []
    const numbers = input.trim().split(' ');
    for (let i = 0; i < numbers.length; i++) {
        originalArray.push(parseInt(numbers[i]));
    }
    console.log(`Original Array: ${JSON.stringify(originalArray)}`); //I have used Json.stringify to print the array with [];
    getEven(originalArray);
}


process.stdin.on('data', data => {
    main(data.toString());
})