function solve() {
    let person = {
        name: 'Nikolay',
        age: 28,
        gender: 'male',
        sister: {name: 'Nevena', age: '31'} 
    }
    if (person.hasOwnProperty('job')) {
        consolve.log('ok')
    } else {
        person.job = 'yes'
    }
    person.surname = 'Dimitrov';
    person['type'] = 'gaze';
    person.age = 29;
    // Object.freeze(person); // Не може да се променя по обекта повече
    // Object.seal(person); // Може да променяш, но не и да триеш
    let keys = Object.keys(person);
    let values = Object.values(person);
    let entries = Object.entries(person);
    let personCoppy = Object.assign({}, person); // Shadow copy, not deep copy 
    //(не се запазват промените по обекта person, но се запазват тези по вътрешния обект sister)
    let person2 = JSON.parse(JSON.stringify(person)); // Deep copy
    person.name = 'Gosho';
    for (let key in person) { // for in се използва за обекти; for of за масиви
        console.log(`obj keys: ${key} <-> obj values: ${person[key]}`)
    }
}
solve()