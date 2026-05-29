//add a function to find MAX number in an array without using methods
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const numbers = [5, 10, 3, 8, 2];
console.log(findMax(numbers)); // Output: 10