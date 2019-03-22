/*
https://namu.wiki/w/유전%20알고리즘

이진수 0000(2)~1111(2)까지의 수 중에서 가장 큰 수를 찾고 싶다
*/

// initialize
let init = [[0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 1, 0], [1, 1, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [1, 0, 1, 1], [0, 0, 1, 1], [0, 0, 0, 1]];
const init_size = init.length;
let arr = [];

// selection
function selection (arr, num = 4) { // select top four elements that is close to the goal
	return arr
		.sort( (a, b) =>  
			b.reduce( (acc, cur) => { return acc + cur; }, 0) -
			a.reduce( (acc, cur) => { return acc + cur; }, 0))
		.filter( (e, index) => index < num); // top 4 or num
}


// crossover
function crossover(arr) { // randomly select two
	let a = Math.floor(Math.random() * arr.length);
	let b = a, result = [];
    
	while (a == b) 
		b = Math.floor(Math.random() * arr.length);
    
	arr = [arr[a], arr[b]];
    
	for (let i = 0; i < init_size; i ++) {
		let temp = [];
		for (let j = 0; j < arr[0].length; j ++) {
			let rand_idx = Math.floor(Math.random() * 2); // 0 or 1
			temp.push(arr[rand_idx][j]);
		}
		result.push(temp);
	}
    
	return result;
}


// mutation
function mutation (arr, chance = init_size) {
	for (let i = 0; i < arr.length; i ++) 
		for (let j = 0; j < arr[0].length; j ++) {
			let mutation_chance = Math.floor(Math.random() * chance);
			if (mutation_chance == 0) (arr[i][j] == 0) ? arr[i][j] = 1 : arr[i][j] = 0;
		}
        
	return arr;
}


// replace
function replace(arr) {
	init = arr;
	arr = [];
}


// loop
function loop(num_loop = init_size) {
	for(let j = 0; j < num_loop; j ++)
		replace(mutation(crossover(selection(init))));
	
	return init;
}


let temp = loop();
console.log(temp);

let result = selection(temp, 1)[0]; // find max number in the array
console.log(result); // maybe [1, 1, 1, 1]