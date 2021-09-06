function solve(input) {
  let obj = {};
  let command = input.shift().split(": ");
  while (command[0] === "Add") {
    let [name, food, area] = command[1].split("-");
    if (Object.keys(obj).includes(name)) {
      obj[name].food += Number(food);
      obj[name].area = area;
    } else {
      obj[name] = {
        food: Number(food),
        area,
      };
    }
    command = input.shift().split(": ");
  }
  while (command[0] === "Feed") {
    let [name, food] = command[1].split("-");
    if (Object.keys(obj).includes(name)) {
      obj[name].food -= Number(food);
      if (obj[name].food <= 0) {
        console.log(`${name} was successfully fed`);
        delete obj[name];
      }
    }
    command = input.shift().split(": ");
  }
  const sorted = Object.entries(obj).sort(
    (a, b) => b[1].food - a[1].food || a[0].localeCompare(b[0])
  );
  console.log("Animals:");
  for (let n of sorted) {
    console.log(`${n[0]} -> ${n[1].food}g`);
  }
  const areas = {};

  sorted.map((el) => {
    if (Object.keys(areas).includes(el[1].area)) {
      areas[el[1].area] += 1;
    } else {
      areas[el[1].area] = 1;
    }
  });

  const sortedAreas = Object.entries(areas).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  console.log("Areas with hungry animals:");
  for (let m of sortedAreas) {
    console.log(`${m[0]}: ${m[1]}`);
  }
}
solve([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);
