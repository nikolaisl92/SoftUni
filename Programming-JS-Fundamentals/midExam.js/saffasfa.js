function solve(input) {
    let sequence = input.shift().split(' ');
    let line = input.shift().split(' ');
    while (line[0] != 'Finish') {
        if (line[0] === 'Add') {
            sequence.push(line[1]);
        } else if (line[0] === 'Remove') {
            if (sequence.includes(line[1]) === true) {
                let index = sequence.indexOf(line[1]);
                sequence.splice(index, 1);
            }
        } else if (line[0] === 'Replace') {
            sequence.replace(line[1], line[2]);
        } else if (line[0] === 'Collapse') {
            for(let j = 0; j < sequence.length; j++) {
                let that = Number(sequence[j]);
                if (that < Number(line[1])) {
                   sequence.splice(j, 1)
                }
            }
        }
        line = input.shift().split(' ')
    }

console.log(sequence.join(' '))
}
solve(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])