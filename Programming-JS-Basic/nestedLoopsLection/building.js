function solve(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    
    for(i = x; i>0; i--) {
        let result = '';
        for(z = 0; z < y; z++) {
            if(i === x) {
                result += 'L' + i + z + ' ';
            } else if (i % 2 ===0) {
                result += 'O' + i + z + ' ';
            } else if (i % 2 !== 0) {
                result += 'A' + i + z + ' ';
            }
            
        }
        console.log(result)
    }

}
solve(["6", "4"])