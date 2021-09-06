function sort(arr) {
    // arr.sort((a, b) => {
    //     let firstCriteria = a.length - b.length;
    //     let secondCriteria = a.localeCompare(b);

    //     return firstCriteria || secondCriteria
    // })

    arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
console.log(arr.join('\n'));
}
sort(["alpha", "beta", "gamma"])