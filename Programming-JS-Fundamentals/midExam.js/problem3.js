function solve(input) {
  let products = input.shift().split("|");
 
  for (let comand of input) {
    comand = comand.split('%');
    switch (comand[0]) {
      case "Important":
        if (products.includes(comand[1]) === false) {
          products.unshift(comand[1]);
        } else if (products.includes(comand[1]) === true) {
          let index = products.indexOf(comand[1]);
          const product = products[index]
          products.splice(index, 1);
          products.unshift(product)
        }
        break;
      case "Add":
        if (products.includes(comand[1]) === true) {
          console.log("The product is already in the products.");
        } else {
          products = products.push(comand[1]);
        }
        break;
      case "Swap":
        if (products.includes(comand[1]) === true && products.includes(comand[2]) === true) {
          const firstIndex = products.indexOf(comand[1]);
          const secondIndex = products.indexOf(comand[2]);
          const tmp = products[secondIndex]
          products[secondIndex] = products[firstIndex]
          products[firstIndex] = tmp
        } else if (
          products.includes(comand[1]) === true &&
          products.includes(comand[2]) === false
        ) {
          console.log(`Product ${comand[2]} missing!`);
        } else if (products.includes(comand[1]) === false && products.includes(comand[2]) === true) {
          console.log(`Product ${comand[1]} missing!`);
        }
        break;
      case "Remove":
        if (products.includes(comand[1]) === true) {
          let index = products.indexOf(comand[1]);
          products.splice(index, 1);
        } else {
          console.log(`Product ${comand[1]} isn't in the products.`);
        }
        break;
      case "Reverse":
        products = products.reverse();
        break;
    }
  }
 
  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]}`)
  }
}
solve(["apple|cheese|salt|bananas",
"Remove%cheese",
"Swap%salt%bananas",
"Shop!"])

