function solve(arr) {
    let first = Number(arr.shift());
    let second = Number(arr.pop());
    
    return first + second;

}
solve(['20', '30', '40'])