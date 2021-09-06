function solve(string) {
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
  let match = pattern.exec(string);
  let result = [];
  let points = 0;
  while (match != null) {
    result.push(match[2]);
    points += Number(match[2].length)
    match = pattern.exec(string);
  }
  console.log(`Destinations: ${result.join(', ')}`);
  console.log(`Travel Points: ${points}`)
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
