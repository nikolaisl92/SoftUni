function solve(arr) {
    for (const number of arr) {
        let numberToString = String(number);
        let reversed = numberToString.split('').reverse();
        let result = Number(reversed.join(''));
        if (number == result) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
solve([123,323,421,121])