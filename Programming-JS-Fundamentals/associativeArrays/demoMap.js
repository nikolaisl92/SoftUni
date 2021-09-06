function solve() {
    let person = new Map();
    person.set('name', 'Nikolay');
    person.set('age', 28);

    let personName = person.get('name');

    if(person.has('car')) {
        console.log('OK')
    } else {
        person.set('car', 'Citroen')
    }
    person.delete('age');
    person.clear() // изтрива всичко
    console.log(person.size) // показва колко броя ключове има 

}
solve()