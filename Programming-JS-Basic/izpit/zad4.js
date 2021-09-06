function solve(input) {
    let cats = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let sum = 0;

    for (let i = 1; i<= cats; i++){
    let current = Number(input[i]);
    if(current >= 100 && current < 200){
        group1++;
        sum+= current;
    } else if (current >= 200 && current < 300) {
        group2++;
        sum+= current;
    } else if (current >= 300 && current < 400) {
        group3++;
        sum+= current;
    }

    }
    sum = sum/1000;
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${(sum * 12.45).toFixed(2)} lv.`);

}
solve(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])
