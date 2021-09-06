function solve(input) {
    let pattern = /%([A-Z][a-z]+)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
    let total = 0;

    while(input[0] != 'end of shift') {
        let line = input.shift();
        let match = pattern.exec(line);
        
        if(match != null) {
            let [_, name, product, quantity, price] = match;
            quantity = Number(quantity);
            price = Number(price);
            console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`);
            total += (quantity*price)
        }
        
    }

console.log(`Total income: ${total.toFixed(2)}`)
}
solve(["%George%<Croissant>|2|10.3$",
"%Peter%<Gum>|1|1.3$",
"%Maria%<Cola>|1|2.4$",
"end of shift"])
