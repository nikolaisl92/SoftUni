function solve(word, symbol, template) {
    let result = word.replace('_', symbol);

    if(result == template) {
        console.log('Matched');
    } else {
        console.log('Not Matched')
    }

}
solve('Str_ng', 'i', 'String')