/*
https://namu.wiki/w/동적%20계획법

Fibonacci Sequence
f(1) = 1
f(2) = 1
f(n) = f(n-1) + f(n-2) when n > 2

seq: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
*/


function classicFibonacci (n) { // O(1.6^N)
	return (n <= 2) ? 1 : classicFibonacci(n - 1) + classicFibonacci(n-2);
}

console.log(classicFibonacci(10)); // 55


// Top-down Dynamic Programming
let arr = Array(100).fill(0); // arr.length = 100, [0, 0, 0, ... , 0 , 0]

function TopDownDynamicFibonacci (n) {
	if (n <= 1) return n; // 1th numbers
	if (arr[n] != 0) return arr[n];
	else arr[n] = TopDownDynamicFibonacci(n - 1) + TopDownDynamicFibonacci(n - 2);
    
	return arr[n];
}

// 4 -> 3 + 2 = 2 + 1 = 3
// 3 -> 2 + 1 = 1 + 1 = 2
console.log(TopDownDynamicFibonacci(4)); // 3


// Bottom-up Dynamic Programming
let f_data = [1, 1];

function BottomUpDynamicFibonacci (n) { // O(N)
	if (f_data[n - 1] == undefined)
		for (let i = 2; i < n; i ++) 
			f_data.push(f_data[i - 1] + f_data[i - 2]);
	
	return f_data[n - 1];
}

console.log(BottomUpDynamicFibonacci(6)); // 8


// Sliding Window Bottom-up Dynamic Programming
let data_arr = [1, 1, 0];

function BetterBottomUpDynamicFibonacci (n) {
	for (let i = 2; i < n; i ++) 
		data_arr[i % 3] = data_arr[(i - 1) % 3] + data_arr[(i - 2) % 3]; 
        
	return data_arr[(n - 1) % 3];
}

console.log(BetterBottomUpDynamicFibonacci(7)); // 13


// Tabulation (prepares results in advance)
// https://namu.wiki/w/메모이제이션

let tabu_arr = [0, 1];
for (let i = 2; i < 94; i ++) tabu_arr [i] = tabu_arr [i - 1] + tabu_arr [i - 2]; // 0-93rd fibonacci sequences

function TabulationFibonacci (n) {
	return tabu_arr[n];
}

console.log(TabulationFibonacci(6)); // 8