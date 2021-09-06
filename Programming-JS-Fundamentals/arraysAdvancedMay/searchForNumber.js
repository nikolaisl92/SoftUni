function solve(numbers, conditions) {
    let [amount, startDelete, element] = conditions;
    let newNumbers = [];
    for (let i = 0; i < amount; i++) {
        newNumbers.push(numbers[i]);
    }
    newNumbers.splice(0, startDelete);
    let counter = 0;
    for (let j = 0; j < newNumbers.length; j++) {
        if (newNumbers[j] === element) {
            counter++
        }
    }
    return `Number ${element} occurs ${counter} times.`
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )