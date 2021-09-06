function solve(input) {
    let activationKey = input.shift();
    

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(">>>");
        if (current[0] === 'Slice') {
            sliced = activationKey.slice(current[1],current[2]);
            activationKey = activationKey.splice(current[1],current[2]);
            console.log(activationKey);
        } else if (current[0] === 'Flip') {
            if (current[1] === 'Upper') {
                activationKey= activationKey.toUppercase()
            } else {

            }
        } else if (current[0] === 'Contains') {

        } else {

        }
    }

}
solve((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)