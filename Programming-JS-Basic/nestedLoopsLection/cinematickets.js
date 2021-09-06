function solve(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalTicket = 0;
    let studentTicket = 0;
    let kidTicket = 0;
    let standartTicket = 0;

    while (command !== 'Finish') {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let type = input[index];
        index++;
        let tempTickets = 0;
        while (type !== 'End') {
            switch (type) {
                case 'standard':
                    standartTicket++;
                    totalTicket++;
                    break;
                case 'student':
                    studentTicket++;
                    totalTicket++;
                    break;
                case 'kid':
                    kidTicket++;
                    totalTicket++;
            }
            tempTickets++;
            if (freeSpace <= tempTickets) {
                break;
            }
            type = input[index];
            index++;
        }
        console.log(`${name} - ${(tempTickets/freeSpace*100).toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${(studentTicket/totalTicket*100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTicket/totalTicket*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket/totalTicket*100).toFixed(2)}% kids tickets.`);

}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])