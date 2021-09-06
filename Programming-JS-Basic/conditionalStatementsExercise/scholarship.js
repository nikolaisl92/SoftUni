function scholarship(input) {
    let salary = Number (input[0]);
    let average = Number (input[1]);
    let minorSalary = Number (input[2]);

    if (salary > minorSalary) {
        console.log(`You cannot get a scholarship!`);
    } else if (salary < minorSalary && average > 4.5) {
        console.log(`You get a Social scholarship ${Math.floor(0.35 * minorSalary)} BGN`);
    } else if (average >= 5.50) {
        console.log(`You get a scholarship for excellent results ${Math.floor(average * 25)} BGN`);
    } else if ((0.35 * minorSalary) > (average * 25)) {
        console.log(`You get a Social scholarship ${Math.floor(0.35 * minorSalary)} BGN`);
    }

}
scholarship(["300.00", "5.65", "420.00"])

