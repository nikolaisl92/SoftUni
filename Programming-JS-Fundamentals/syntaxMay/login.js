function login(arr) {
    let user = arr.shift();
    let pass = user.split('').reverse().join('');
    let counter = 1;
    while (true) {
        let current = arr.shift();
        if (counter === 4) {
            console.log(`User ${user} blocked!`)
            break;
        }
        if(current === pass) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }

        counter++;
    }
   
}
login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','not sunny']);