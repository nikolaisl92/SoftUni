function demo(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1All = p1 * h;
    let p2All = p2 * h;
    let all = p1All + p2All;
    let over = all - v;
    let percentAll = (all / v) * 100;
    let percentp1 = (p1All / all) * 100;
    let percentp2 = (p2All / all) * 100;
    if (v > all) {
        console.log(`The pool is ${percentAll.toFixed(2)}% full. Pipe 1: ${percentp1.toFixed(2)}%. Pipe 2: ${percentp2.toFixed(2)}%.`)
    } else {
        console.log(`For ${h} hours the pool overflows with ${over.toFixed(2)} liters.`)
    }
}
demo(['100', '100', '100', '2.5'])