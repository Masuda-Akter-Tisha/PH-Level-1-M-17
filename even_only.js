function sumOfEvenNumber (number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            console.log(number[i]);
             sum = number[i] + sum;
        }
    }
    return sum;
}

// const num = [10, 22, 31, 43, 102, 40, 55];
// const result = sumOfEvenNumber (num);
// console.log('number of sum:', result);

function sumOfEvenNumber (number) {
    let sum = 0;
    for (let num of number) {
        if (num % 2 === 0) {
            console.log(num);
             sum = num + sum;
        }
    }
    return sum;
}

// const num1 = [10, 22, 31, 43, 102, 40, 55];
// const result1 = sumOfEvenNumber (num1);
//  console.log('number of sum:', result1);

function evenNumOfArray (number) {
    let even = [];
    for (let num of number) {
        if (num % 2 === 0) {
            console.log(num);
            even.push(num);
        }
    }
    return even;
}

const num2 = [10, 22, 31, 43, 102, 40, 55];
const result2 = evenNumOfArray (num2);
 console.log('even numbers are:', result2);