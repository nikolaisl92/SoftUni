function demo (input) {
  let index = 0;
  let comand = input[index];
  index++;

  while (comand !== "Stop") {
      console.log(comand);
      comand = input[index];
      index++;
      
  }
    }

demo(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])