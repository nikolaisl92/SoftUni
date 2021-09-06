function solve(input) {
  let students = Number(input.shift());
  let lectures = Number(input.shift());
  let initialBonus = Number(input.shift());
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    let current = Number(input[i]);
    let bonus = (current / lectures) * (5 + initialBonus);
    bonus = Math.round(bonus);
    arr.push(bonus);
  }

  arr = arr.sort((a, b) => b - a);
  console.log(`Max Bonus: ${arr[0]}.`);
  let max = input.sort((a, b) => b - a);
  console.log(`The student has attended ${max[0]} lectures.`);
}
solve(["5", "25", "30", "12", "19", "24", "16", "20"]);
