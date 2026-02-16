//function declare
function makeupKoro (){
    console.log('blusher use koro');
    console.log('glitter use koro');
    console.log('do not use eyelash');
}

//call the function
makeupKoro();

// function sum (a,b){
//     const add = a + b;
//     console.log(add);
// }
//  sum(20,8);

function sum (a,b){
    const add = a + b;
    return add;
}
//  console.log(sum(20,8));
let total = sum(20,8);
console.log(total);

function square (number){
    console.log('value of the number parameter', number);
    const borgo = number**2;
    return borgo;
}
let result = square (4);
console.log('square of the given number is:', result);
result = square (5);
console.log('square of the given number is:', result);
