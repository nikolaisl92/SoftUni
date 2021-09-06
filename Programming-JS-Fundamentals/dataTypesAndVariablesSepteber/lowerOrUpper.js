function solve(char) {
    let newChar = char.toUpperCase();

    if (char === newChar) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }

}
solve('L')