/*
Trie
https://www.youtube.com/watch?v=7XmS8McW_1U
https://namu.wiki/w/트라이

O(M) where M is string length ~~ O(1)
but if you use Map, O(mlogn)
*/

class Node {
	constructor() {
		this.keys = new Map();
		this.end = false;
		this.setEnd = () => this.end = true;
		this.isEnd = () => this.end;
	}
}

class Trie {
	constructor() {
		this.root = new Node();
	}
	
	add(word, node = this.root) {
		if (word.length == 0) node.setEnd(); // last char of word is marked as the end
		else if (!node.keys.has(word[0])) { // not in the tree
			node.keys.set(word[0], new Node()); // set the char with assigned child node in the Map()
			return this.add(word.substr(1), node.keys.get(word[0])); // e.g. str = 'abc' and str.substr(1) returns 'bc'
		}
		else return this.add(word.substr(1), node.keys.get(word[0])); // the char is in the tree
	}

	has(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) return false;
			else {
				node = node.keys.get(word[0]);
				word = word.substr(1); 
			}
		}
        
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false; // last char has to be marked as the end to return true
	}

	print() {
		let arr = [];
		let search = (node, string = '') => {
			if (node.keys.size != 0) {
				for (let word of node.keys.keys()) 
					search(node.keys.get(word), string.concat(word));
				if (node.isEnd()) arr.push(string);
			}
			else arr.push(string); // push last node since its Map() is empty
		};
        
		search(this.root);
		return arr.length > 0 ? arr : null;
	}
}

let myTrie = new Trie();
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');

console.log(myTrie.print()); // [ 'ball', 'bat', 'doll', 'dork', 'dorm', 'do', 'send', 'sense' ]
console.log(myTrie.has('doll')); // true
console.log(myTrie.has('d')); // false
console.log(myTrie.has('dor')); // false
console.log(myTrie.has('dorf')); // false


let trie = new Trie();
trie.add('911');
trie.add('97625999');
trie.add('91125426');
console.log(trie.has('911')); // true