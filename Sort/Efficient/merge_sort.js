/*
Merge Sort
https://www.youtube.com/watch?v=QAyl79dCO_k
https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0

Best, Average, Worst: (nlogn)
Stable
*/


function merge_sort (arr) {
	let merge = (left, right) => { // compare the arrays item
		let result = [], indexLeft = 0, indexRight = 0;
      
		while (indexLeft < left.length && indexRight < right.length) {
			if (left[indexLeft] < right[indexRight]) {
				result.push(left[indexLeft]);
				indexLeft ++;
			} 
			else {
				result.push(right[indexRight]);
				indexRight ++;
			}
		}
        
		return result
			.concat(left.slice(indexLeft)) // 정렬 후 남은 것만 result 뒤에 추가 
			.concat(right.slice(indexRight)); // e.g. 2,4 3,6 -> result = [2,3,4] and left.slice(2) (nothing) + right.slice(1)
	};
    
	if (arr.length === 1) return arr;
	let middle = Math.floor(arr.length / 2), left = arr.slice(0, middle), right = arr.slice(middle);
  
	return merge(merge_sort(left), merge_sort(right));
}

let list = [4, 2, 6, 3, 7, 8, 5, 1];
console.log(merge_sort(list)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]