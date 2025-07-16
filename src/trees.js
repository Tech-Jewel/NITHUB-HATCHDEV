function sum(n) {
    if (n < 1) {
        return 0;
    }
    return n + sum(n - 1);
}
console.log(sum(-20));
function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    return x * factorial(x - 1);
}
console.log(factorial(5));
function fibonacci(y) {
    if (y < 1) {
        return 0;
    }
    else if (y === 1) {
        return 1;
    }
    return fibonacci(y - 1) + fibonacci(y - 2);
}
console.log(fibonacci(6));

