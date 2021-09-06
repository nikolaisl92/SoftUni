// function furniture(array) {
 
//     let tempTotal = 0;
//     let pattern = /\b(?<name>[A-Z]+[a-z]*)\<{2}(?<price>\d+\.*\d*)\!(?<quantity>\d{1,})/g
//     console.log('Bought furniture:')
//     for (const str of array) {
//         let match = pattern.exec(str)
//         while (match !== null) {
//             let name = match.groups['name'];
//             let price = Number(match.groups['price']);
//             let quantity = Number(match.groups['quantity']);
//             match = pattern.exec(str);
//             console.log(`${name}`);
//             tempTotal += (price * quantity);
//         }
//     }
// console.log(`Total money spend: ${tempTotal.toFixed(2)}`)
 
// }
// furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

function solve(input) {
  let pattern =
    />>(?<name>[A-Za-z]+)<<(?<price>(?:\d+)(?:\.\d+)?)!(?<quantity>\d+)/;
  let furniture = [];
  let total = 0;
  while (input[0] != "Purchase") {
    let line = input.shift();
    let match = pattern.exec(line);
    if (match != null) {
      let { name, price, quantity } = match.groups;
      price = Number(price);
      quantity = Number(quantity);
      total += price * quantity;
      furniture.push(name);
    }
  }
  console.log("Bought furniture:");
  for (let item of furniture) {
      console.log(item)
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
} 
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
