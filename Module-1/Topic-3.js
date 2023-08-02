
multiplicationTable = (multiply)=>{
    for (let i=1; i<=10; i++){
        console.log(`${i} * ${multiply} = ${i * multiply}`);
    }
}
main = (input) => {
    const number = parseInt(input.trim());
    multiplicationTable(number);
}
process.stdin.on('data', data => {
    main(data.toString());
})