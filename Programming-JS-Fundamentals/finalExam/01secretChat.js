function solve(input) {
    let message = input.shift();

    while (input[0] != 'Reveal') {
        let line = input.shift().split(':|:');
        let command = line[0];
        if (command == 'ChangeAll') {
            message = message.split(line[1]).join(line[2]);
            console.log(message);
        } else if (command == 'Reverse') {
            let y = line[1].split('').reverse().join(''); 
            if (message.includes(line[1]) == true) {
                message = message.split(line[1]).join(y);
                console.log(message);
            } else {
                console.log('error')
            }
        } else if (command == 'InsertSpace') {
            let left = message.substring(0, line[1]);
            let right = message.substring(line[1]);
            message = left + ' ' + right;
            console.log(message);
        } 
    }
    console.log(`You have a new text message: ${message}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )