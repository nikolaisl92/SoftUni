function city(object) {
    // let keys = Object.keys(object);
    // let values = Object.values(object);
    // for (i = 0; i < keys.length; i++) {
    //     console.log(`${keys[i]} -> ${values[i]}`)
    // }
    for (let key of Object.keys(object)) {
        console.log(key, '->' ,object[key]);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)