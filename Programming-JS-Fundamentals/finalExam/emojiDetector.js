function solve([input]) {
   let treshold = 1;
   let coolEmojis = [];
   let numOfEmojis = 0;
   let digits = input.match(/\d/g).map(Number);
   for (let n of digits) {
       treshold *= n;
   }
   let emoji = input.match(/(::|\*\*)([A-Z][a-z]{2,})(\1)/g);
   for (let every of emoji) {
       numOfEmojis++;
    let chars = every.slice(2, -2);
    let numOfChars = 0;
    for (char of chars) {
        numOfChars += char.charCodeAt(0);
    }
    if (numOfChars > treshold) {
        coolEmojis.push(every)
    }
   }
   console.log(`Cool threshold: ${treshold}`);
   console.log(`${numOfEmojis} emojis found in the text. The cool ones are:`);
   for (let n of coolEmojis) {
       console.log(n)
   }
   
}
solve(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'])