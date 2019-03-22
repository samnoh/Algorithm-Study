/*
Shell sort
https://gmlwjd9405.github.io/2018/05/08/algorithm-shell-sort.html

Best: O(nlogn)
Average: depends on gap sequence. e.g. O(n^1.5), O(nlogn), O(n^2), ... (faster than insertion sort anyways)
Worst: O(n^2)
Not stable

upgraded version of insertion sort
*/
function shell_sort(arr) {
	var gap = Math.floor(arr.length / 2);
    
	while (gap > 0) {
		for (let i = gap; i < arr.length; i++) {
			let j = i, key = arr[i];
    
			while (j >= gap && arr[j - gap] > key) {
				arr[j] = arr[j - gap];
				j = j - gap;
			}
    
			arr[j] = key;
		}
    
		gap = Math.floor(gap / 2);
	}
	return arr;
}

let list = [10, 8, 6, 20, 4, 3, 22, 1, 0, 15, 16];
console.log(shell_sort(list)); // [ 0, 1, 3, 4, 6, 8, 10, 15, 16, 20, 22 ]