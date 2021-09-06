function solve(array) {
  let sum = 0;
  let sumTwo = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    
    if (element % 2 == 0) {
      array[i] += i;
    } else {
      array[i] -= i;
    }
    sumTwo += array[i];
  }
  console.log(array);
  console.log(sum);
  console.log(sumTwo);
}
solve([5, 15, 23, 56, 35]);
