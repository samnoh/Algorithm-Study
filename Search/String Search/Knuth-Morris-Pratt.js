/*
KMP Algorithm
https://m.blog.naver.com/PostView.nhn?blogId=kks227&logNo=220917078260
https://bowbowbow.tistory.com/6

O(N+M) where N is string length and M is pattern length
*/

function KMP (str, pattern) {
	let failure_calc = (pattern) => { // failure function
		let pi = [0];
		for (let i = 2; i <= pattern.length; i ++) {
			let str = pattern.slice(0, i);
			pi.push(0);
            
			for (let j = 1; j <= Math.ceil(str.length / 2); j ++)
				if (str.slice(0, j) == str.slice(str.length - j, str.length)) 
					pi[i - 1] = str.slice(0, j).length;
		}
		return pi;
	};
    
	let pi = failure_calc(pattern), result = '', last_idx = 0, i = 0;
	while (i < str.length - pattern.length + 1) {
		let temp_str = str.slice(i, i + pattern.length), j = 0;
        
		if (temp_str == pattern) { // match, prints results
			result += str.slice(last_idx, i) + '*' + pattern + '*';
			last_idx = i + pattern.length;
			i += pattern.length - 1; // increase i after match
		}
		else {
			while (j < pattern.length && temp_str[j] == pattern[j]) j ++; // how long is the part that they match
			(j == 0) ? i ++ : i += j - pi[j - 1]; // increase i using failure function
		}
	}
	return result += str.slice(last_idx);
}

let str = 'abc abcdab abcdabcdabdeabcdabd', pattern = 'abcdabd';
console.log(KMP(str, pattern)); // abc abcdab abcd*abcdabd*e*abcdabd*