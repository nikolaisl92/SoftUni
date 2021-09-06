function solve(currentStock, products) {
  let store = [];

  for (let i = 0; i < currentStock.length - 1; i += 2) {
    let product = currentStock[i];
    let quontity = Number(currentStock[i + 1]);

    let productObject = {
      product,
      quontity,
    };
    store.push(productObject);
  }

  for (let i = 0; i < products.length - 1; i += 2) {
    let product = products[i];
    let quontity = Number(products[i + 1]);

    let productObject = {
      product,
      quontity,
    };

    let indexOfProduct = store.findIndex(x => x.product === product);
    if (indexOfProduct === -1) {
      store.push(productObject);
    } else {
      store[indexOfProduct].quontity += quontity;
    }
  }
  for (let things of store) {
    console.log(`${things.product} -> ${things.quontity}`);
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
