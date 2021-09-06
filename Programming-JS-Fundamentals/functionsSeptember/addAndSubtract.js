function addAndSubtract(a, b, c) {

    // function sum(x, y) {
    //     return x+y;
    // }
    // let result = sum(a, b);
    // return result - c;

    let sum = (a,b) => a+b;
    return sum(a, b) - c;

}
console.log(addAndSubtract(23, 6, 10));
