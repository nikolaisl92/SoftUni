function solve(arr) {
    let userName = arr.shift();
    let pass = userName.split('').reverse().join('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pass) {
            console.log(`User ${userName} logged in.`);
        } else {
            if (i === 3){
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }

        
    }

}
solve(['Acer','login','go','let me in','recA'])