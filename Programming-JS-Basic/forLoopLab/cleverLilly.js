function demo(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let sumOfToys = 0;
    let sumOfMoney = 0;
    let currentMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sumOfMoney += currentMoney;
            sumOfMoney -= 1;
            currentMoney += 10;
        } else {
            sumOfToys ++;
        }
    }
    sumOfMoney += toyPrice * sumOfToys;
    if (sumOfMoney >= washingMachine) {
        console.log(`Yes! ${(sumOfMoney - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - sumOfMoney).toFixed(2)}`)
    }


}
// function demo(arg1, arg2, arg3) {
//     let age = Number(arg1);
//     let washingMachine = Number(arg2);
//     let toyPrice = Number(arg3);
//     let sumOfToys = 0;
//     let sumOfMoney = 0;
//     let currentMoney = 10;

//     for (let i = 1; i <= age; i++) {
//         if (i % 2 === 0) {
//             sumOfMoney += currentMoney;
//             sumOfMoney -= 1;
//             currentMoney += 10;
//         } else {
//             sumOfToys ++;
//         }
//     }
//     sumOfMoney += toyPrice * sumOfToys;
//     if (sumOfMoney >= washingMachine) {
//         console.log(`Yes! ${(sumOfMoney - washingMachine).toFixed(2)}`);
//     } else {
//         console.log(`No! ${(washingMachine - sumOfMoney).toFixed(2)}`)
//     }


// }

demo("10", "170", "6")