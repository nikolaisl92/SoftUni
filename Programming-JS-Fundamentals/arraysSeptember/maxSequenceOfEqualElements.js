function solve(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let current = [array[i]];
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                current.push(array[j]);
            }else {
                break;
            }
            
        }
        if (result.length < current.length) {
            result = current;
        }
    }
    console.log(result.join(' '))
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])