/*
Bubble Sort

https://www.youtube.com/watch?v=YbsQiiubO74

Best: O(n)
Average, Worst: O(n^2)
Stable

*/


function bubble_sort (arr) {
	let index = 1;

	while (index < arr.length) {
		for (let i = 0; i < arr.length - index; i ++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i]; // swap
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
		index ++;
	}

	return arr;
}


let list = [4, 2, 6, 3, 7, 8, 5, 1];
console.log(bubble_sort(list)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]