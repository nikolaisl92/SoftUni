function solve(input) {
  let energy = Number(input.shift());
  let distance = Number(input.shift());
  let battlesWon = 0;

  while (distance != "End of battle") {
    if (energy < distance) {
      console.log(
        `Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`
      );
      break;
    }
    energy -= distance;
    battlesWon += 1;

    if (battlesWon % 3 == 0) {
      energy += battlesWon;
    }
    distance = input.shift();
  }

  if (distance == "End of battle") {
    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
  }
}

solve(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
solve(["200", "54", "14", "28", "13", "End of battle"]);
