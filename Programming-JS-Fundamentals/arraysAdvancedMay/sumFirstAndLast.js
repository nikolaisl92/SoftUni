function sumFirstLast(arr) {
    // let first = Number(arr.shift());
    // let last = Number(arr.pop());
    
    return Number(arr.shift()) + Number(arr.pop())

}
console.log(sumFirstLast(['20', '30', '40']));