function oddAndEvenSum(n) {
let arr = String(n).split('');
let odd = 0;
let even = 0;
for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    if(num % 2 === 0) {
        even +=num;
    } else {
        odd += num
    }
    
}
console.log(`Odd sum = ${odd}, Even sum = ${even}`)

}
oddAndEvenSum(1000435)