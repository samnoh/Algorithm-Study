/*
Radix Sort
http://taoalpha.github.io/blog/2016/01/19/tech-archived-javascript-sorting-algorithm-radix-sort/

Stable
*/

function  radix_sort (arr) {
	let getDigit = (num, nth) => { // to get the last nth digit of a number e.g. getDigit(123, 1) = 3
		let a;
		while (nth --) {
			a = num % 10;
			num = Math.floor((num - a) / 10);
		}
        
		return a;
	};
    
	for (let i = 1; i <= Math.max(... arr).toString().length; i ++) { // from 1 to maximum digits
		let temp = [];
        
		for (let j = 0; j < arr.length; j ++) {
			let digit = getDigit(arr[j], i);
			temp[digit] = temp[digit] || []; // ignores that some indice don't exist and then temp[digit].push([])
			temp[digit].push(arr[j]);
		}
        
		let index = 0;
		for (let t = 0; t < temp.length; t ++) // push results
			if (temp[t]) // if not null
				for (let j = 0; j < temp[t].length; j ++) 
					arr[index ++] = temp[t][j];
	}
    
	return arr;
}

let list1 = [170, 45, 75, 90, 802, 1000, 24, 2, 66];
console.log(radix_sort(list1)); // [ 2, 24, 45, 66, 75, 90, 170, 802, 1000 ]

/*
let list3 = [1, 2, 3, 4];
list3[5] = list3[5] || [];
list3[5].push(1);
console.log(list3); // [ 1, 2, 3, 4, <1 empty item>, [ 1 ] ]
*/