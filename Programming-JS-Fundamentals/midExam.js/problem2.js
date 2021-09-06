function solve(input) {
    let sequence = input.shift().split(' ');
    
    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        if (current[0] === 'Add') {
            sequence.push(current[1]);
        } else if (current[0] === 'Remove') {
            if (sequence.includes(current[1]) === true) {
                let index = sequence.indexOf(current[1]);
                sequence.splice(index, 1);
            }
        } else if (current[0] === 'Replace') {
            sequence = sequence.toString().replace(current[1], current[2]).split(',');
        } else if (current[0] === 'Collapse') {
            for(let j = 0; j < sequence.length; j++) {
                let line = Number(sequence[j]);
                if (line < Number(current[1])) {
                   sequence.splice(j, 1)
                }
            }
        }
    }
console.log(sequence.join(' '))
}
solve(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])
