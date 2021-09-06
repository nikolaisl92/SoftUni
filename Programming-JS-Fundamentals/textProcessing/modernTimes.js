function solve(text) {
//   let result = [];
//   let collecting = false;
//   let currennWord = "";

//   for (let char of text) {
//     if (collecting) {
//       if (char == " ") {
//         collecting = false;
//         if (currennWord.length > 0) {
//           result.push(currennWord);
//         }
//         currennWord = "";
//       } else {
//         let code = char.charCodeAt(0);
//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//           currennWord += char;
//         } else {
//           collecting = false;
//         }
//       }
//     } else {
//       if (char == "#") {
//         collecting = true;
//       }
//     }
//   }
//   if (collecting && currennWord.length > 0) {
//     result.push(currennWord);
//   }
//   for (let myWord of result) {
//     console.log(myWord);
//   }

let tokens = text.split(' ');
let result = [];

for (let token of tokens) {
    if(token.length >1 && token[0] == '#') {
        let valid = true;
        for (let char of token.substring(1)) { 
            let code = char.charCodeAt(0);
            if (code < 65 || code > 122 || (code >= 91 && code <= 96)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            result.push(token.substring(1))
        }
    }
}
  for (let myWord of result) {
    console.log(myWord);
  }
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
