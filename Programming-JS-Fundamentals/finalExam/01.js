function solve(input) {
    let email = input.shift();

    while (input[0] != 'Complete') {
        let line = input.shift().split(' ');
        if (line[1] == 'Upper') {
            email = email.toUpperCase();
            console.log(email)
        } else if (line[1] == 'Lower') {
            email = email.toLowerCase();
            console.log(email);
        } else if (line[0] == 'GetUsername') {
            if (email.includes('@')) {
              let index = email.indexOf('@');
              let print = email.substring(0, index);
              console.log(print)
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`)
            }
        } else if (line[0] == 'GetDomain') {
            let last = email.slice(-line[1]);
            console.log(last);
        } else if (line[0] == 'Replace') {
            let result = email.split(line[1]).join('-');
            console.log(result);
        } else if (line[0] == 'Encrypt') {
            let codes = [];
            for (let ch of email) {
                let code = ch.charCodeAt(0);
                codes.push(code)
            }
            console.log(codes.join(' '))
        }
    }

}
solve(["Mike123@somemail.com",
"Make Upper",
"GetDomain 3",
"GetUsername",
"Encrypt",
"Complete"])
