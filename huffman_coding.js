// 15/03/19
// Huffman Coding
// https://m.blog.naver.com/PostView.nhn?blogId=ndb796&logNo=220829142548

module.exports.tree = function (str) {
    let ascii = []

    for (let i = 0; i < 26; i++) {
        ascii.push({
            code: null,
            freq: 0,
            char: String.fromCharCode(i + 97), // a - z
            left: null,
            right: null,

        })
    }

    // check frequency
    for (let i = 0; i < str.length; i++) {
        ascii[str[i].charCodeAt() - 97].freq += 1;
    }

    ascii.sort((a, b) => b.freq - a.freq);
    ascii = ascii.filter(e => e.freq !== 0) // remove letters that has not been used

    // make tree
    while (ascii.length > 1) {
        let a = ascii.pop(), b = ascii.pop();
        a.code = 1, b.code = 0;
        let temp = {
            char: null,
            code: null,
            freq: a.freq + b.freq,
            left: b,
            right: a,
        };

        ascii.push(temp);
        ascii.sort((a, b) => b.freq - a.freq);
    }

    return ascii[0]
}

module.exports.decoding = function (code, tree) {
    let current = tree, count = 0, result = '';

    while (current.left != null & current.right != null) {
        if (code[count] == 0) {
            current = current.left;
            count += 1;
        }
        else if (code[count] == 1) {
            current = current.right
            count += 1;
        }

        if (current.char) {
            result += current.char;
            if (count + 1 <= code.length) {
                current = tree;
            }
        }
    }

    return result;
}

module.exports.encoding = function (str, tree) {
    let result = '';

    function travesal(current, char, code = '') {
        if (current.code != null) {
            code += current.code
        }

        if (current.left) travesal(current.left, char, code);
        if (current.right) travesal(current.right, char, code);

        if (current.char == char) {
            result += code
            return;
        }
    }

    for (let i = 0; i < str.length; i++) {
        travesal(tree, str[i])
    }

    return result;
}



const huffman = require('./huffman_coding')
const tree = huffman.tree('aaaaaaabbcccdeeeeffffffg'); // a: 00, f: 10, e: 11, c: 011, b: 0100, d: 01010, g: 01011
console.log(huffman.decoding('0000000000000001000100011011011010101111111110101010101001011', tree)) // aaaaaaabbcccdeeeeffffffg
console.log(huffman.encoding('aaaaaaabbcccdeeeeffffffg', tree))