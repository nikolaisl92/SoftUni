function ocenki(input) {
    let num = Number(input[0]);
    let red1 = 0; //"Top students"
    let red2 = 0; //"Between 4.00 and 4.99"
    let red3 = 0; //"Between 3.00 and 3.99"
    let red4 = 0; //"Fail"
    let avg = 0;



    for (let i = 1; i <= num; i++) {
        current = Number(input[i]);
        avg += current;
        if (current < 3.00) {
            red4++;
        } else if (current < 4.00) {
            red3++;
        } else if (current < 5.00) {
            red2++;
        } else if (current >= 5.00) {
            red1++;
        }
    }

    avg = avg / num;
    red1 = (red1 / num) * 100;
    red2 = (red2 / num) * 100;
    red3 = (red3 / num) * 100;
    red4 = (red4 / num) * 100;

    console.log(`Top students: ${(red1).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(red2).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(red3).toFixed(2)}%`)
    console.log(`Fail: ${(red4).toFixed(2)}%`)
    console.log(`Average: ${(avg).toFixed(2)}`)



}
ocenki([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5]);