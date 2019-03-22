// 14/03/19
// https://www.youtube.com/watch?v=_3_580GhBYc

module.exports.inplace = function (str) {
    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}


const palindrome = require('./is_palindrome')

console.log(palindrome.inplace('mom')); // true
console.log(palindrome.inplace('racecar')); // true
console.log(palindrome.inplace('hello')); // false
