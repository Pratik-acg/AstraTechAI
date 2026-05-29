//add a function to find the SUM of all numbers in an array without using methods
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers = [5, 10, 3, 8, 2];
console.log(findSum(numbers)); // Output: 28