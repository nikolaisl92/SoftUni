function solve(word, text) {
    let textArr = text.split(' ');
    let valid = false;
    for(let current of textArr) {
        if(word.toLocaleLowerCase() === current.toLocaleLowerCase()) {
          return  console.log(word);
        } else {
            valid = true;
        }
    }
    if(valid) {
        console.log(`${word} not found!`) 
    }
   
}
solve('javascript',
'JavaScript is the best programming language'
)
solve('python',
'JavaScript is the best programming language'
)