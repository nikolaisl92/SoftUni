function solve(townList) {
    for (let townInfo of townList) {
        let current = townInfo.split(' | ');
        let town = current[0];
        let latitude = Number(current[1]).toFixed(2);
        let longitude = Number(current[2]).toFixed(2);
        let obj = {
            town,
            latitude,
            longitude, 
        }
        console.log(obj);
    }

}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)