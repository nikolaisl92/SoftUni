function solve(string) {
  let obj = {};
  let listOfStings = string.split(" ");

  for (let string of listOfStings) {
    let stringToLowerCase = string.toLowerCase();
    if (!Object.keys(obj).includes(stringToLowerCase)) {
      obj[stringToLowerCase] = 0;
    }
    obj[stringToLowerCase] += 1;
  }
  let result = [];
  for (let [key, value] of Object.entries(obj)) {
    if (value % 2 !== 0) {
      result.push(key);
    }
  }
  console.log(result.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
