function demo(input) {
    let num = Number(input[0]);
    let chef = input[1];
    let index = 2;
    let next = input[index];
    let sumOne = 0;

    while (true) {
        if(next === 'Stop') {
            break;
        }
        next = Number(input[index]);
        sumOne += next;
        index++;
    }
    console.log(sumOne)
    

}
demo(['2',
    'Chef Angelov',
    '9',
    '9',
    '9',
    'Stop',
    'Chef Rowe',
    '10',
    '10',
    '10',
    '10',
    'Stop'
    ])