function solve(input) {
  let mySentence = input.shift().split(" ");

  let words = {};

  for (let word of mySentence) {
    words[word] = 0;
  }
  for (let word of input) {
    if (Object.keys(words).includes(word)) {
      words[word] += 1;
    }
  }
  let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
  for (let [key, value] of sortedWords) {
    console.log(`${key} - ${value}`);
  }
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
