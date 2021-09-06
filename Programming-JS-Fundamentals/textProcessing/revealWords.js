function solve(a,b) {
    b = ` ${b} `;
    let words = a.split(', ');

    for (let word of words) {
        let match = ` ${'*'.repeat(word.length)} `;
        word = ` ${word} `;

        b = b.replace(match, word)
    }
    console.log(b.trim())

    // let word = a.split(', ');
    // let sentence = b.split(' ');
    // for(let el of word){
    //     for (let i = 0; i < sentence.length; i++) {
    //           let words = sentence[i];
    //         if('*'.repeat(el.length) === words){
    //             sentence[i] = el;
    //         }
    //     }
    // }
    // console.log(sentence.join(' '));
}
solve('great',
'softuni is ***** place for learning new programming languages'
)
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)