function demo(arr) {
 
    let y = arr.map(Number);
    let sorted = arr.sort((a, b) => b - a)
    console.log(sorted)

}
demo([1, 2, 3, '4', '5', 6, 7])