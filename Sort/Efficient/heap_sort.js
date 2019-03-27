/*
Heap sort
https://zeddios.tistory.com/56

Best, Average, Worst: O(nlogn)
Not stable
*/

function heapsort(arr) {
	const swap = (arr, index1, index2) => {
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	};

	const heap_root = (arr, parent) => {
		let left_child = 2 * parent + 1, right_child = 2 * parent + 2, max = parent;

		if (left_child < arr_length && arr[max] < arr[left_child]) {
			max = left_child;
		}
		if (right_child < arr_length && arr[max] < arr[right_child]) {
			max = right_child;
		}

		if (max != parent) { // if one of child numbers is greater than parent
			swap(arr, parent, max);
			heap_root(arr, max); // until in order
		}
	};

	let arr_length = arr.length;

	for (let i = Math.floor(arr_length / 2); i >= 0; i--) {
		heap_root(arr, i);
	}
	// [ 5, 3, 4, 0, -1, 2, 1 ]
	/* 
			5
		3		4
	0	-1		2	1
	*/

	for (let i = arr_length - 1; i > 0; i--) { // let largest numbers go to the last index (down heap)
		swap(arr, 0, i); // max number goes to the index (i) and index -= 1 every time
		arr_length -= 1; // no count for last largest numbers
		heap_root(arr, 0);
	}

	return arr;
}

const arr = [3, 0, 2, 5, -1, 4, 1];
console.log(heapsort(arr)); // [ -1, 0, 1, 2, 3, 4, 5 ]
