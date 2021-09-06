function solve(inputArr) {
  //    let filtered = inputArr.filter(isOddIndex);
  //    let double = filtered.map(x => x*2);
  //    console.log(double.reverse().join(' '))

  //     function isOddIndex(value, index) {
  //         return (index % 2) == 1;
  //     }

  console.log(
    inputArr
      .filter((v, i) => i % 2 == 1)
      .map((x) => x * 2)
      .reverse()
      .join(" ")
  );
}
solve([10, 15, 20, 25]);
