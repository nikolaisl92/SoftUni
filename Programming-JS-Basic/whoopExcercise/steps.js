function demo(input) {
    let steps = 0;
    let goingHome = input[input.length - 2];
    let goal = 10000;

    if (goingHome === "Going home") {
        let i = 0;
        while (i < input.length - 2) {
            let current = Number(input[i]);
            steps += current;
            i++;
        }
        steps += Number(input[input.length - 1]);
    } else {
        i = 0;
        while (i < input.length) {
            let current = Number(input[i]);
            steps += current;
            i++;
        }
    }
    if (steps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - goal} steps over the goal!`)
    } else {
        console.log(`${goal - steps} more steps to reach goal.`)
    }
}
demo(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
