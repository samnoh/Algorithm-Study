/*
Selection sort
https://www.youtube.com/watch?v=uCUu3fF5Dws

Best, Average, Worst: O(n^2) but it is better than Bubble sort
Not stable
*/

function selection_sort (arr) {
	let index = 0, min_index;
    
	while (index < arr.length) {
		min_index = index; // initiate minimum
        
		for (let i = index; i < arr.length; i ++) 
			if (arr[i] < arr[min_index]) min_index = i;
		
		let temp = arr[index]; // swap
		arr[index] = arr[min_index];
		arr[min_index] = temp;
		
		index ++;
	}
    
	return arr;
}

let list = [4, 2, 6, 3, 7, 8, 5, 1]; // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(selection_sort(list));