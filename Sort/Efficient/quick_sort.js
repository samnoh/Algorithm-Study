/*
Quick Sort
https://www.youtube.com/watch?v=7BDzle2n47c&t=2s

Best, Average: O(nlogn)
Worst: O(n^2)
Not stable
*/

function quick_sort (arr) {
	let quick_sort_util = (arr, start, end) => {
		let part = partition(arr, start, end);
        
		if (start < part - 1) quick_sort_util(arr, start, part - 1); // smaller part
		if (part < end) quick_sort_util(arr, part, end); // bigger part
	};
    
	let partition = (arr, start, end) => {
		let pivot = arr[(start + end) / 2];
        
		while (start <= end) {
			while (arr[start] < pivot) start ++;
			while (arr[end] > pivot) end --;
            
			if (start <= end) {
				let temp = arr[start];
				arr[start] = arr[end];
				arr[end] = temp; // swap done
                
				start ++; // move on
				end --;
			}
		}
		
		return start;
	};

	quick_sort_util(arr, 0, arr.length - 1);
	return arr;
}


let list = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
console.log(quick_sort(list)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]