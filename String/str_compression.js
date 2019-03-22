// 14/03/19
// https://www.youtube.com/watch?v=BPEeI4uCMwg

module.exports.zip = function (str) {
    let result = compress(str);
    return str.length < result.length ? str : result;
}

function compress(str) {
    let count = 0, result = '';
    for (let i = 0; i < str.length; i++) {
        count += 1;
        if (str.length <= i + 1 || str[i] !== str[i + 1]) {
            result += str[i] + count;
            count = 0;
        }
    }

    return result;
}

module.exports.unzip = function (str) {
    return uncompress(str);
}

function uncompress(str) {
    const numbers = str.replace(/[^0-9]/g, '');
    if (numbers === '') return str; // no numbers in str

    const chars = str.replace(/[0-9]/g, '');
    let result = '';

    for (let i = 0; i < chars.length; i++) {
        result += chars[i].repeat(numbers[i])
    }

    return result;
}



const compression = require('./str_compression')

console.log(compression.zip('aabcccdd')); // a2b1c3d2
console.log(compression.zip('abcd')); // abcd

console.log(compression.unzip('a2b1c3d2')); // aabcccdd
console.log(compression.unzip('abcd')); // abcd
console.log(compression.unzip('a1b1c1d1')); // abcd