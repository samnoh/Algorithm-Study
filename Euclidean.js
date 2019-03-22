// 22/03/19
// https://namu.wiki/w/유클리드%20호제법

// Greatest Common Divisor
function gcd(a, b) {
    const r = b % a;

    if (!r) { // === 0
        return a;
    }
    else {
        return gcd(r, a);
    }
}

module.exports = function (a, b) {
    const result = gcd(a, b);
    console.log(result === 1 ? 'Relatively prime' : Math.max(a, b) + ' is divisible by ' + result);
}

const euclidean = require('./Euclidean');
euclidean(12345, 1234) // 1
euclidean(22, 14) // 5