/*
Quick Sort
https://www.youtube.com/watch?v=7BDzle2n47c&t=2s

Best, Average: O(nlogn)
Worst: O(n^2)
Not stable
*/

function quicksort(arr) {
	const partition = (arr, start, end) => {
		const pivot = arr[Math.floor((start + end) / 2)];

		while (start <= end) {
			while (arr[start] < pivot) {
				start += 1;
			}
			while (arr[end] > pivot) {
				end -= 1;
			}

			if (start <= end) {
				const temp = arr[start];
				arr[start] = arr[end];
				arr[end] = temp; // swap done

				start += 1; // move on
				end -= 1;
			}
		}

		return start;
	};

	const quicksortUtil = (arr, start, end) => {
		let part = partition(arr, start, end);

		if (start < part - 1) {
			quicksortUtil(arr, start, part - 1); // smaller part
		}
		if (part < end) {
			quicksortUtil(arr, part, end); // bigger part
		}
	};

	quicksortUtil(arr, 0, arr.length - 1);
	return arr;
}


let list = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
console.log(quicksort(list)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
