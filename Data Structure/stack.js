/*
Stack (last in first out)

https://www.youtube.com/watch?v=whVUYv0Leg0

*/
class Node {
	constructor(data){
		this.data = data;
		this.bottom = null;
	}
}
class Stack {
	constructor() {
		this.top = null;
	}
    
	push(data) {
		let new_node = new Node(data);
        
		let temp_node = this.top;
		this.top = new_node;
		this.top.bottom = temp_node;
	}
    
	pop() {
		if (this.isEmpty()) throw 'Empty Stack Exception';
		
		let temp_node = this.top.data;
		this.top = this.top.bottom; // change top node
        
		return temp_node;
	}
    
	peek() { // like pop but don't remove
		if (this.isEmpty()) throw 'Empty Stack Exception';
		return this.top.data;
	}
    
	size() {
		if (this.isEmpty()) return 0;
        
		let current = this.top, count = 1;
		while (current.bottom != null) {
			current = current.bottom;
			count ++;
		}
        
		return count;
	}
    
	isEmpty() {
		return (this.top == null) ? true : false;
	}
    
	toString() {
		if (this.isEmpty()) throw 'Empty Stack Exception';
        
		let current = this.top, result = '';
		while (current.bottom != null) {
			result += current.data + ' -> ';
			current = current.bottom;
		}
        
		return result + current.data;
	}

}

try {
	let stack = new Stack();
	console.log(stack.isEmpty()); // true
	stack.push(1);
	stack.push(2);
	stack.push(3);
	stack.push(4);
	console.log(stack.toString()); // 4 -> 3 -> 2 -> 1
	console.log(stack.pop()); // 4
	console.log(stack.peek()); // 3
	console.log(stack.toString()); // 3 -> 2 -> 1
	console.log(stack.size()); // 3
	stack.pop();
	console.log(stack.toString()); // 2 -> 1
	console.log(stack.isEmpty()); // false
}
catch(ex) {
	console.error(ex);
}
