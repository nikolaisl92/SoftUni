function solve(str, char, result) {
    let res = str.replace('_', char);
    if(res === result) {
        console.log('Matched');
    } else {
        console.log('Not Matched')
    }
}
solve('Str_ng', 'I', 'Strong')