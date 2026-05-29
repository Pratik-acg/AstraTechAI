//add a function to find MIN number in an array without using methods
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const numbers = [5, 10, 3, 8, 2];
console.log(findMin(numbers)); // Output: 2