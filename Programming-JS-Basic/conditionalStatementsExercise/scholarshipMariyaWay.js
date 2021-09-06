function scolarship(input) {
    let incomeInLv = Number(input[0]);
    let avarageGrade = Number(input[1]);
    let minSalary = Number(input[2]);
    let socialScolarshipMoney = 0;
    let gradeSholarshipMoney = 0
 
    let isShcolarship = false;
    let isSocialScolarship = false;
 
    if (incomeInLv < minSalary) {
        isSocialScolarship = true;
        isShcolarship = true;
    }
    if (avarageGrade < 4.5) {
        isSocialScolarship = false;
        isShcolarship = false;
 
    }
 
    if (isSocialScolarship) {
        socialScolarshipMoney = Math.floor(minSalary * 0.35);
    }
    if (avarageGrade >= 5.5) {
        gradeSholarshipMoney = Math.floor(avarageGrade * 25);
        isShcolarship = true;
    }
    if (!isShcolarship) {
        console.log("You cannot get a scholarship!");
 
    } else if (gradeSholarshipMoney >= socialScolarshipMoney) {
        console.log(`You get a scholarship for excellent results ${gradeSholarshipMoney} BGN`);
    } else if (socialScolarshipMoney > gradeSholarshipMoney) {
        console.log(`You get a Social scholarship ${socialScolarshipMoney} BGN`);
    }
}
scolarship(["300.00", "5.65", "420.00"])