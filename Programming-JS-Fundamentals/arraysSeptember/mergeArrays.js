function solve(arrOne, arrTwo) {
  let result = [];
  for (let i = 0; i < arrOne.length; i++) {
    if (i % 2 === 0) {
      let sum = Number(arrOne[i]) + Number(arrTwo[i]);
      result.push(sum);
    } else {
        let sumTwo = arrOne[i] + arrTwo[i];
        result.push(sumTwo)
    }
  }
  console.log(result.join(' - '))
}
solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
