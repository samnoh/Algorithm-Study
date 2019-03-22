/*
Insertion sort
https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html
https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5

Best: O(n)
Average, Worst: O(n^2)
Stable
*/

function insertion_sort (arr) {
	for (let i = 1; i < arr.length; i ++) { // keys
		let key = arr[i], j;
        
		for (j = i - 1; j >= 0 && key < arr[j]; j --) // all elements on left side of keys
			arr[j + 1] = arr[j]; // move them to right side by 1
            
		arr[j + 1] = key; // j + 1 since j -- is executed at ends of every loops 
	}
    
	return list;
}

let list = [8, 5, 6, 2, 4];
console.log(insertion_sort(list));