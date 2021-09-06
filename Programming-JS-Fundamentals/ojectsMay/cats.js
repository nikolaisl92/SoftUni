function solve(cats) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let theCats =[];
  for (let catData of cats) {
      let tokens = catData.split(' ');
      let name = tokens[0];
      let age = tokens[1];

      let cat = new Cat(name, age);
      theCats.push(cat);  
  }
  for (let cat of theCats) {
      cat.meow()
  }
}
solve(["Mellow 2", "Tom 5"]);
