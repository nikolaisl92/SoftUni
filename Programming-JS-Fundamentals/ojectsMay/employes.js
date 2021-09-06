function solve(arr) {
  for (let employee of arr) {
    let employeeData = {
      name: employee,
      personalNumber: employee.length,
    };
    console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNumber}`);
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
