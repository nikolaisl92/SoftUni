function shesta(params) {
    let index = 0;

    let width = Number(params[index]);//0
    index++;

    let height = Number(params[index]);//1
    index++;

    let cake = width * height;

    let pieces = 0;

    let command = params[index];//2
    index++;

    while (command !== "STOP") {
        pieces += Number(command);
        if (pieces > cake) {
            break;
        }
        command = params[index];//3//4//5//......
        index++;
    }

    if (pieces > cake) {
        console.log(`No more cake left! You need ${pieces - cake} pieces more.`);
    } else {
        console.log(`${cake - pieces} pieces are left.`);
    }
}
shesta(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
