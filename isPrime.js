// 15/03/19
// Prime Numbers

module.exports.number = function (num) {
    for (let i = 2; i * i < num; i++) {
        if (num % i === 0) return false;
    }

    return num > 1;
}

// Sieve of Eratosthenes Algorithm
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
module.exports.list = function (size) {
    if (size <= 1) return null;

    prime_arr = new Array(size + 1).fill(true, 2); // assume every numbers are prime 

    for (let i = 2; i * i <= size; i++) {
        for (let j = i * i; j <= size && prime_arr[i]; j += i) {
            prime_arr[j] = false; // not prime number
        }
    }

    return prime_arr
        .map((e, index) => {
            if (e) {
                return e = index;
            }
        })
        .filter(e => e);
}


const isPrime = require('./isPrime');
console.log(isPrime.number(999959)); // true

const t1 = Date.now();
console.log(isPrime.list(19));
// [ 2,   3,   5,   7,   11,   13,   17,   19]
const t2 = Date.now();
console.log(t2 - t1 + 'ms')