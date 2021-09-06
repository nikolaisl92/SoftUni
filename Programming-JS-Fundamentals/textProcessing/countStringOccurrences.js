function solve(str, word) {
//     let a = str.split(' ');
//     let result = 0;

//     for (let i = 0; i < a.length; i++) {
//         let current = a[i];
//         if (current === word) {
//             result++
//         }
//     }
//    console.log(result) 

   console.log(str.split(' ').filter(x => x == word).length)
}
solve("This is a word and it also is a sentence",
"is"
)