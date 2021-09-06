function solve(str) {
    let first = str.slice(0, str.length/2).split('').reverse().join('');
    let second = str.slice(str.length/2).split('').reverse().join('');
    console.log(first);
    console.log(second);

    // let firstReverse = '';
    // let secondReverse = '';
    // for (let i = first.length-1; i >= 0; i--) {
    //     firstReverse += first[i];
    // }
    // for (let i = second.length-1; i >= 0; i--) {
    //     secondReverse += second[i];
    // }
    // console.log(firstReverse);
    // console.log(secondReverse);

}
solve('tluciffiDsIsihTgnizamAoSsIsihT')