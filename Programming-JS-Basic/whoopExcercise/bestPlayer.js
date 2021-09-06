function demo(input) {
    let index = 0;
    let command = input[index];
    index++;
    let name = '';
    let goals = 0;
    let flag = true;

    while (command !== 'END') {
        command = input[index];
        let current = command;
        
        name += current;
        index++;
        goals += current;
        index++;

    }
    console.log(goals)
}
demo(['Neymar',
    '2',
    'Ronaldo',
    '1',
    'Messi',
    '3',
    'END',
    ])