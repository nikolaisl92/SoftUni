function solve(input) {
        let index = 0;
        let judges = Number(input[index++]);
        let subject = input[index++];
        let subjectCounter = 0;
        let totalGrades = 0;
     
        while (subject !== "Finish") {
            let tempGrades = 0;
            subjectCounter++;
            for (let i = 1; i <= judges; i++) {
                let tempGrade = Number(input[index++]);
                tempGrades += tempGrade;
            }
            console.log(`${subject} - ${(tempGrades / judges).toFixed(2)}.`);
            subject = input[index++];
            totalGrades += tempGrades / judges;
        }
        console.log(`Student's final assessment is ${(totalGrades / subjectCounter).toFixed(2)}.`);
    }
solve(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])