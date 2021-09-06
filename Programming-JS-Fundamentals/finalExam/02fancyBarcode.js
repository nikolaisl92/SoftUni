function solve(input) {
    let n = Number(input.shift());
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{3,}[A-Z])\1/;

    for (let i = 0; i < n; i++) {
        let line = input[i];
        let match = pattern.exec(line);
        let my = match[2];
        let pattern2 = /\d+/g;
        let numbers = pattern2.exec(my);
        if (numbers == null) {
            console.log(`Product group: 00`)
        } else {
            console.log(`Product group: ${numbers}`)
        }

}
}
solve(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
