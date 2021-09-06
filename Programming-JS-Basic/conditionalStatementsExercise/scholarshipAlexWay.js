function scholarShip(input) {
    let income = Number(input[0]);
    let grades = Number(input[1]);
    let minWage = Number(input[2]);
   
    if (income < minWage && grades > 4.5) {
      if (grades >= 5.5 && minWage * 0.35 < grades * 25)
        console.log(`You get a scholarship for excellent results ${Math.floor(grades * 25)} BGN`);
      else
        console.log(`You get a Social scholarship ${Math.floor(minWage * 0.35)} BGN`);
    }
    else if (income >= minWage && grades >= 5.5)
      console.log(`You get a scholarship for excellent results ${Math.floor(grades * 25)} BGN`);
    else
      console.log(`You cannot get a scholarship!`);
  }
  scholarShip(["300.00", "5.65", "420.00"])
  