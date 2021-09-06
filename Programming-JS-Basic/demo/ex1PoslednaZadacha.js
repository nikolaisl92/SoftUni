function demo(input) {

    let daljina = Number (input[0]);
    let shirochina = Number (input[1]);
    let visochina = Number (input[2]);
    let percent = Number (input[3]);

    let sAqua = daljina * shirochina * visochina;

    let allLitters = sAqua * 0.001;

    let percentP = percent * 0.01;

    let realLitters = allLitters * (1 - percentP);


    console.log(realLitters);


}
demo(["85", "75", "47", "17"]);