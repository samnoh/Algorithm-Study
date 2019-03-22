/* 
https://www.welcomekakao.com/learn/courses/30/lessons/12899?language=javascript
124나라의 숫자

1 -> 1
2 -> 2
3 -> 4
4 -> 11
5 -> 12
6 -> 14
7 -> 21
8 -> 22
*/

function solution(n) {
	let arr = [], digit = '412';

	while (n > 0) {
		arr.unshift(digit[n % 3]); // only 0, 1, 2
		if (n % 3 == 0) n = Math.floor(n / 3) - 1; // core algorithm
		else n = Math.floor(n / 3);
	}

	return arr.join(''); // arr to string
}

console.log('9 base (1,2,4) is ' + solution(9)); // 24