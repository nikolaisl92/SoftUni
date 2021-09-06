// let text = 'Gosho: 125, Pesho: 3245';
// let pattern = /\d+/g;

// let match = pattern.exec(text);

// while(match != null) {
//     console.log(match);
//     match = pattern.exec(text);
// }



// let text = 'Gosho: 125, Pesho: 125';
// let pattern = text.replace(/125/g, '7');
// console.log(pattern)


// let date = 'Today is 02-05-10';
// let pat = /(\d{2})-(?<month>\d{2})-(\d{2})/g;

// let matchh = [...date.matchAll(pat)];

// console.log(matchh)

let nums = '1    2 3   4   5';
let reg = /\s+/g;

let result = nums.split(reg);
console.log(result)


