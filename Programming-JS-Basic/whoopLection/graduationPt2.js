function demo(input) {
    let index = 0;
    let name = input[index];
    index++;
    let klas = 0;
    let avg = 0;
    while (index<=12) {
        let grade = Number(input[index]);
        klas +=1;
        if(grade<4) {
            console.log(`${name} has been excluded at ${klas} grade`);
            break;
        }
        index++;
        avg +=grade;
        if(klas ===12) {
            console.log(`${name} graduated. Average grade: ${(avg/12).toFixed(2)}`);
            break;
        }
    }


}
demo(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
