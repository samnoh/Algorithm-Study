// 14/03/19
// https://www.youtube.com/watch?v=6I1L8oRl3FA

// Check given string s1 and s2 are permutation of each other.

module.exports = function (s1, s2) { // ascii letters only
    if (s1.length != s2.length) {
        return false
    }

    const ascii = new Array(128).fill(0);

    for (let i = 0; i < s1.length; i++) {
        ascii[s1[i].charCodeAt()] += 1;
    }

    for (let i = 0; i < s2.length; i++) {
        ascii[s2[i].charCodeAt()] -= 1;
        if (ascii[s2[i].charCodeAt()] < 0) {
            return false;
        }
    }

    return true;
}


const permutation = require('./permutation_str');

console.log(permutation('ABC', 'BCA')); // true
console.log(permutation('ABC', 'BDA')) // false