/*
Binary Serach (not tree)

Best: O(1)
Average: O(log n)
Worst: O(log n)
*/

function binary_search(value, list) {
	let start = 0, stop = list.length - 1, middle = Math.floor((start + stop) / 2);

	while (list[middle] !== value && start < stop) {
		(value < list[middle]) ? stop = middle - 1 : start = middle + 1; // left (start to m) or right (m to end)
		middle = Math.floor((start + stop) / 2); // recalculate middle on every iteration
	}

	return (list[middle] === value) ? middle : -1;
}

const list = [9, 13, 5, 99, 8, 45, 67, 2];
list.sort((a, b) => a - b); // should be sorted before binary search

console.log(binary_search(99, list)); // index 7