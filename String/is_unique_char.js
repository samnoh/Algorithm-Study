// 14/03/19
// https://www.youtube.com/watch?v=xnGyjBptpZ4

// use bit shift operation
module.exports.shift = function (str) { // but a-z only
    let checker = 0;

    for (let i = 0; i < str.length; i++) {
        let ascii = str[i].charCodeAt() - 97 // 'a'
        if ((checker & (1 << ascii)) > 0) {
            return false;
        }
        checker += (1 << ascii);
    }

    return true;
}

// no extra space required and O(nlogn)
module.exports.inspace = function (str) {
    str = str.split('').sort();
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            return false;
        }
    }
    return true;
}

const isUnique = require('./unique_char.js');

console.log(isUnique.shift('abcdefgghijk')); // false
console.log(isUnique.shift('abcdefghijk')); // true
console.log(isUnique.shift('abcdc')); // fasle

console.log(isUnique.inspace('abcdefgghijk')) // false
console.log(isUnique.inspace('abcdefghijk')) // true
console.log(isUnique.inspace('abcdc')) // false