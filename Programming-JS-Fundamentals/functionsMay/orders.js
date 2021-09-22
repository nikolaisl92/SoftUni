function orders(drink, n) {
  let result = 0;
  if (drink == "coffee") {
    result = n * 1.5;
  } else if (drink == "water") {
    result = 1 * n;
  } else if (drink == "coke") {
    result = 1.4 * n;
  } else if (drink == "snacks") {
    result = 2 * n;
  }
  console.log(`${result.toFixed(2)}`);
}
orders("water", 5);
