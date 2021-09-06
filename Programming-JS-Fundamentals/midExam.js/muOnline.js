function solve(input) {
  let health = 100;
  let bitcoins = 0;
  let isTrue = true;


  let arr = input.split("|");
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split(" ");
    if (current[0] === "potion") {
      health += Number(current[1]);
      if (health > 100) {
        let difference = health - 100;
        let newDifference = Number(current[1]) - difference;
        health = 100;
        console.log(`You healed for ${newDifference} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else {
      console.log(`You healed for ${current[1]} hp.`);
      console.log(`Current health: ${health} hp.`);
      }
    } else if (current[0] === "chest") {
      console.log(`You found ${current[1]} bitcoins.`);
      bitcoins += Number(current[1]);
    } else {
      health -= Number(current[1]);
      if (health > 0) {
        console.log(`You slayed ${current[0]}.`);
      } else if (health <= 0) {
        console.log(`You died! Killed by ${current[0]}.`);
        console.log(`Best room: ${i + 1}`);
        isTrue = false;
        break;
      }
    }
  }
  if (isTrue) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`)
    console.log(`Health: ${health}`);
  }
}
// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
