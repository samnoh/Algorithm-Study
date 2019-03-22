/*
Linked List
https://www.youtube.com/watch?v=C1SDkdPvQPA

indexing O(n)
*/


class Node {
	constructor(data) {
		this.data = data;
		this.next = null; 
		this.prev = null;
	}
}

class SinglyLinkedList { // node.next only, Singly Linked List (one way)
	constructor() {
		this.head = new Node();
	}
    
	Append(data) {
		let current = this.head;
		
		if (current.data == undefined) { // if head is empty
			this.head.data = data;
			return;
		}

		while (current.next != null)
			current = current.next;

		current.next = new Node(data);
	}
    
	AppendAt(data, idx) {
		let current = this.head, new_node = new Node(data);
        
		if (idx == 0) {
			new_node.next = current;
			this.head = new_node;
			return;
		}

		let i = 0;
		while(i < idx - 1) {
			current = current.next;
			i ++;
		}
        
		let next_node = current.next;
		current.next = new_node;
		new_node.next = next_node;
	}

	GetAt(idx) {
		let current = this.head, i = 0;

		while(i < idx) {
			current = current.next;
			i ++;
		}

		return current != null ? current.data : 'Not Found';
	}
    
	Remove(data) {
		let current = this.head;
        
		if (current.data == data) {
			this.head = current.next;
			return;
		}
        
		while (current.next != null) {
			if(current.next.data == data) {
				current.next = current.next.next; 
				return;
			}
			current = current.next;
		}    
	}
    
	RemoveDups() { // O(N^2) https://www.youtube.com/watch?v=Ce4baygLMz0
		let current = this.head;
		while (current.next != null) {
			let runner = current;
			while (runner.next != null) 
				(current.data == runner.next.data) ? runner.next = runner.next.next : runner = runner.next;
			current = current.next;
		}
	}
    
	Length() {
		let current = this.head, count = 1;
        
		while (current.next != null) {
			current = current.next;
			count ++;
		}
        
		return count;
	}
    
	Print() {
		let current = this.head, result = 'Singly Linked List:\n* ';
        
		while (current.next != null) {
			result += current.data + ' -> ';
			current = current.next;
		}
        
		return result += current.data; // last node
	}

	NthToLast(n, node = this.head) { // https://www.youtube.com/watch?v=Vb24scNDAVg
		if (node == null) return 0;
		let count = this.NthToLast(n, node.next) + 1; // from the last, 0 + 1 + 1 + ...
		
		if (count == n) {
			console.log(n + 'th to the last node: ' + node.data);
		}

		return count;
	}
	
	/*
	ToArray() {
		let current = this.head, arr = [];
        
		while (current.next != null) {
			arr.push(current.data);
			current = current.next;
		}
        
		return arr.concat(current.data); // last node
	}
	*/
}


let linked_list = new SinglyLinkedList();

linked_list.Append(1);
linked_list.Append(2);
linked_list.Append(3);
linked_list.AppendAt(4, 0);
linked_list.Remove(1);
linked_list.Append(4);
console.log(linked_list.Print()); // 4 -> 2 -> 3 -> 4

linked_list.RemoveDups();
console.log(linked_list.Print()); // 4 -> 2 -> 3

linked_list.NthToLast(3); // nth to the last node: 2
console.log(linked_list.GetAt(0)); // 4