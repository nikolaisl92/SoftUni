function solve(str, censore) {
//   let found = str.includes(censore);
//   while (found) {
//     str = str.replace(censore, "*".repeat(censore.length));
//     found = str.includes(censore);
//   }
//   console.log(str);

let arr = str.split(censore);
console.log(arr.join('*'.repeat(censore.length)))

}
solve("A small sentence with some words small", "small");
