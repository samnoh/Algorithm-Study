/*
Bloom Filter
https://namu.wiki/w/블룸%20필터
https://github.com/jasondavies/bloomfilter.js/blob/master/bloomfilter.js

You can add and search elements but no delete or edit them.

May cause false positive (there is actually no such element, but it says it is in the hash table)
*/

class bloom_filter {
	constructor(size) {
		this.size = size;
		this.hash = new Array(size).fill(0); // 0: no assigned, 1: something is in there
	}

	HashFunc1(obj) {
		let hash_key = 0;
		for(let key in obj) hash_key += obj[key];
		return hash_key % this.size;
	}
    
	HashFunc2(obj) {
		let hash_key = 0;
		for (let key in obj) hash_key *= obj[key];
		return hash_key % this.size;
	}
    
	HashFunc3(obj) {
		let hash_key = 0;
		let i = 0;
		for(let key in obj) {
			(i % 2) ? hash_key += obj[key] : hash_key *= obj[key];
			i ++;
		}
		return hash_key % this.size;
	}
    
	Add(key) {		
		this.hash[this.HashFunc1(key)] = 1;
		this.hash[this.HashFunc2(key)] = 1;
		this.hash[this.HashFunc3(key)] = 1;
	}
    
	isExist(key) {
		if (this.hash[this.HashFunc1(key)] != 1) return false;
		if (this.hash[this.HashFunc2(key)] != 1) return false;
		if (this.hash[this.HashFunc3(key)] != 1) return false;
		return true;
	}
}


let ip1 = { // private ip
	first: 192,
	second: 168,
	third: 0,
	fourth: 10
};

let ip2 = { // cloudflare dns
	first: 1,
	second: 1,
	third: 1,
	fourth: 1
};

let ip3 = { // google dns
	first: 8,
	second: 8,
	third: 8,
	fourth: 8
};

let ip4 = {
	first: 9,
	second: 9,
	third: 9,
	fourth: 9
};

let bf = new bloom_filter(18);
bf.Add(ip1);
console.log(bf.isExist(ip1)); // true
console.log(bf.isExist(ip2)); // false
console.log(bf.isExist(ip3)); // false
console.log(bf.isExist(ip4)); // true -> false positive
