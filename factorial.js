// WAF to find factorial of N
function findFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(findFactorial(5)); // Output: 120