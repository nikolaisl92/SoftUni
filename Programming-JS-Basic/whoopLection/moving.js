function demo(input) {
    let index = 0;
    let w = Number(input[index]);
    index++
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let cubicMeters = w*l*h;
    let command = input[index];
    index++;
    let isFreeSpace = true;


    while (command !== "Done") {
        let box = Number(command);
        cubicMeters -= box;

        if (cubicMeters < 0) {
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(cubicMeters)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if(isFreeSpace){
        console.log(`${cubicMeters} Cubic meters left.`); 
    }
    
}

demo(["10",
"1",
"2",
"4",
"6",
"Done"])

