/*
Naiive String Search
https://namu.wiki/w/문자열%20알고리즘

어떤 문자열 S에서, 어떤 패턴 P를 찾아내는 알고리즘
*/


function naiive_find_pattern (str, pattern) {
	let result = '', last_idx = 0;
    
	for (let i = 0; i < str.length - pattern.length + 1; i ++) {
		if (str.slice(i, i + pattern.length) === pattern) { 
			result += str.slice(last_idx, i) + '*' + pattern + '*';
			last_idx = i + pattern.length;
		}
	}
    
	return result += str.slice(last_idx); // leftover
}

let str = 'hello hello hello hellabcde', pattern = 'hell';
console.log(naiive_find_pattern(str, pattern)); // *hell*o *hell*o *hell*o *hell*abcde