// function add (num1, num2, num3) {
//     console.log('value of the parameters:', num1, num2, num3);
//     let sum = num1 + num2 + num3;
//     console.log('The total value is:',sum);
// }
// add (20, 44, 63);
// add(40, 33, 107);

function add (num1, num2, num3) {
    console.log('value of the parameters:', num1, num2, num3);
    let sum = num1 + num2 + num3;
    return sum;
}
let total = add (20, 44, 63);
console.log('The total value is:',total);
total = add(40, 33, 107);
console.log('The total value is:',total);