/*
Binary Tree
https://www.youtube.com/watch?v=QN1rZYX6QaA

e.g.

        (1)
    (2)     (3)
(4)   (5)

Inorder (Left, Root, Right): 4, 2, 5, 1, 3
Preorder (Root, Left, Right): 1, 2, 4, 5, 3
Postorder (Left, Right, Root): 4, 5, 2, 3, 1
*/

class Node {
	constructor(data) { 
		this.data = data;
		this.left = null;
		this.right = null;
	} 
}

class Tree {
	setRoot(node) {
		this.root = node;
	}

	getRoot() {
		return this.root;
	}

	makeNode(left, data, right) { // manually assigns left and right nodes
		let node = new Node(data);
		node.left = left;
		node.right = right;

		return node; 
	}

	inorder(node) { // (Left, Root, Right)
		if (node != null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}

	preorder(node) { // (Root, Left, Right)
		if (node != null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	postorder(node) { // (Left, Right, Root)
		if (node != null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}
}

let tree = new Tree(1);

let n4 = tree.makeNode(null, 4, null); // bottom up build
let n5 = tree.makeNode(null, 5, null);
let n2 = tree.makeNode(n4, 2, n5);
let n3 = tree.makeNode(null, 3, null);
let n1 = tree.makeNode(n2, 1, n3); // root node

tree.setRoot(n1);
tree.inorder(tree.getRoot()); // 4, 2, 5, 1, 3
// tree.preorder(tree.getRoot()); // 1, 2, 4, 5, 3
// tree.postorder(tree.getRoot()); // 4, 5, 2, 3, 1