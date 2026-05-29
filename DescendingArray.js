
//WAF to sort an array of numbers in descending order without using methods
function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const numbers = [5, 10, 3, 8, 2];
console.log(sortArrayDescending(numbers)); // Output: [9, 8, 5, 2, 1]
