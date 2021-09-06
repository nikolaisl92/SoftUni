function concatenateData(input) {

    let name = (input[0]);
    let surName = (input[1]);
    let age = Number(input[2]);
    let city = (input[3]);

    console.log(`You are ${name} ${surName}, a ${age}-years old person from ${city}.`);

}
concatenateData(['Maria', 'Ivanova', 20, 'Sofia']);