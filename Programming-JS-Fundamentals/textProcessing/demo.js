function demo() {
    let name = 'I am Nikolay Dimitrov';
    let sub = name.substring(5,10);
    console.log(sub)

    let myWeb = 'nikolaydimitrov.com';
    let result = myWeb.replace('.com', '.bg');
    console.log(result);

    console.log('hui'.repeat(3));

    for (let i = 0; i < 7; i++) {
        console.log('*'.repeat(i));
    }


    let str ='      Nikolay Dimitrov       ';
    console.log(str.trim())

    let hours = '11';
    let minutes = '7';
    let seconds = '19';
    console.log(`${hours}:${minutes.padStart(2, '0')}:${seconds}`)
}
demo()