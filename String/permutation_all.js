// 14/03/19
// https://www.youtube.com/watch?v=bqr9KhzGFIw

function permutation(str, prefix = '') {
    if (str.length === 0) {
        console.log(prefix);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            const temp = str.slice(0, i) + str.slice(i + 1);
            permutation(temp, prefix + str[i])
        }
    }
}

permutation('abc'); // O(3*3*(3*2*1)) = O(54)

/*
const a = 'abc'
for (let i = 0; i < a.length; i++) {
    console.log(a[i] + ': ' + a.slice(0, i) + ' ' + a.slice(i + 1))
}
*/