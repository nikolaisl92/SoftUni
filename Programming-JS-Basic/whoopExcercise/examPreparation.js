function demo(input) {
    let allowedBadgrade = Number(input.shift());
    let badGrades = 0;
    let sumOfGrades = 0;
    let goodGrades = 0;
    let lastproblem = '';
    let problem = input.shift();
    let grade = Number(input.shift());
    while (badGrades < allowedBadgrade) {
        if (grade <= 4) {
            badGrades++;
        }
        if (problem === "Enough") {
            break;
        }
        goodGrades++;
        lastproblem = problem;
        sumOfGrades += Number(grade);
        problem = input.shift();
        grade = Number(input.shift());
    }
    if (badGrades < allowedBadgrade) {
        console.log(`Average score: ${(sumOfGrades/goodGrades).toFixed(2)}`);
        console.log(`Number of problems: ${goodGrades}`);
        console.log(`Last problem: ${lastproblem}`);
    } else {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}
demo(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])