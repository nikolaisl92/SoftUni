function demo(input) {
    let tab = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= input.length-1; i++) {
        current = input[i];
        if(current === "Facebook") {
            salary-=150;
        } else if(current === "Instagram") {
            salary -=100;
        } else if (current === "Reddit") {
            salary -=50;
        } else {
            salary = salary;
        }
    }
    if(salary<=0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}
demo(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
