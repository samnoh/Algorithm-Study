/*
Longest Increasing Subsequence (LIS)
https://namu.wiki/w/최장%20증가%20부분%20수열

e.g. 3 5 7 9 2 1 4 8 => 3 5 7 8 => lis.length is 4.

there are two algorithms; O(n^2), O(nlogn)
*/

let seq1 = [3, 5, 7, 9, 2, 1, 4, 8];
let seq2 = [5, 1, 6, 2, 7, 3, 8];

function first_lis (seq) { // O(n^2)
	seq = [0].concat(seq);
	let temp = new Array(seq.length + 1).fill(0);
    
	for (let i = 1; i < seq.length; i ++) {
		let max = Number.MIN_SAFE_INTEGER;
        
		for (let j = 0; j < i; j ++) 
			if (seq[j] < seq[i] && temp[j] > max) 
				max = temp[j];
                
		temp[i] = max + 1;
	}
    
	return Math.max(...temp);
}

console.log(first_lis(seq1)); // 4
console.log(first_lis(seq2)); // 4


function second_lis (seq) { // O(nlogn)
	seq = [0].concat(seq);
	let temp = [0];
	
	for (let i = 1; i < seq.length; i ++) {
		let max = Number.MIN_SAFE_INTEGER;
        
		for(var j = 0; j < temp.length; j ++)
			if(seq[i] > temp[j] && temp[j] > max) 
				max = temp[j];
        
		(max == temp[temp.length - 1]) ? temp.push(seq[i]) : temp[temp.indexOf(max) + 1] = seq[i];
	}
    
	return temp.length - 1;
}

console.log(second_lis(seq1)); // 4
console.log(second_lis(seq2)); // 4