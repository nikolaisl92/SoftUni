function smallestOfThreeNumbers(a, b, c) {
    // let min = Math.min(a, b, c);
    // return(min);

    let smallest = Number.MAX_SAFE_INTEGER;
    
    smallest = smaller(a, smallest);
    smallest = smaller(b, smallest);
    smallest = smaller(c, smallest);

    function smaller (n, small) {
        // if(n <small) {
        //     small = n;
        // }
        return n < small ? n : small;
    }
    return smallest;
}
console.log(smallestOfThreeNumbers(465, 5, 3465));