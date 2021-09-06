function solve(str) {
    let result = str[0];
    for (let i =0; i< str.length; i++) {
        if (str[i] != str[i-1]) {
            result += str[i]
        }
    }
    console.log(result.substring(1))
}
solve('aaaaabbbbbcdddeeeedssaa')
solve('qqqwerqwecccwd')