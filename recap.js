function add (num1, num2) {
    const result = num1 + num2;
    return result;
}
const output = add (30, 20);

function sub (num1, num2){
    return num1 - num2;
}
const folafol = sub (50 , 40);

console.log(output, folafol);

function doMath (num1,num2) {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const multi = sum * sub;
    const diff = multi / 2;
    return diff;
}

const lastResult = doMath (106, 55);
console.log(lastResult);