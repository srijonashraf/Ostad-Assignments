
gradeCalc = (score) => {
    let grade = null;

    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80 && score < 90:
            grade = 'B';
            break;
        case score >= 70 && score < 80:
            grade = 'C';
            break;
        case score >= 60 && score < 70:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    return grade;
}


main = (input) => {
    number = parseInt(input.trim());
    console.log(gradeCalc(number));
}

process.stdin.on('data', data => {
    main(data.toString());
})