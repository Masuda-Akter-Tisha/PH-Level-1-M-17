function sumOfNumbers (numbers) {
    let sum = 0;
   for (const num of numbers) {
    console.log(num);
    sum = num + sum;
   }
   return sum;
}

const nums = [12, 22, 30, 11, 23];
const result = sumOfNumbers(nums);
console.log(result);