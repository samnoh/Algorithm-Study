// 14/03/19
// https://www.youtube.com/watch?v=mK1nPP413SA

/*
You have isSubstring() which checks if one word is a substring of another.
Given two strings, write code to check if the second string is a 'rotation' of the first
using only one call to isSubstring()
*/

module.exports = function (s1, s2) {
    const combine = s2 + s2;
    return combine.includes(s1)
}

const isSubstring = require('./is_substring');
console.log(isSubstring('string', 'ringst')); // true
console.log(isSubstring('string', 'rinstg')); // false
