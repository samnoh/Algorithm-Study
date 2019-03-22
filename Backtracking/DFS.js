/*
https://www.geeksforgeeks.org/implementation-graph-javascript/
https://www.youtube.com/watch?v=_hxFgg7TLZQ
Depth First Search 깊이 우선 탐색 
*/

class Graph { 
	constructor() { 
		this.AdjList = new Map(); // key, value
	} 

	addVertex(v) { // initialize the adjacent list
		this.AdjList.set(v, []); 
	} 
    
	addEdge(v, w) { 
		this.AdjList.get(v).push(w);
		this.AdjList.get(w).push(v);
	}

	deleteVertex(v) {
		this.AdjList.delete(v);
		for (let key of this.AdjList.keys()) {
			let value = this.AdjList.get(key);
			for(let i = 0; i < value.length; i ++) 
				if (value[i] == v) value.splice(i, 1);
		}
	}
    
	deleteEdge(v, w) {
		let value = this.AdjList.get(v);
		for(let i = 0; i < value.length; i ++) 
			if (value[i] == w) value.splice(i, 1);
            
		value = this.AdjList.get(w);
		for(let i = 0; i < value.length; i ++) 
			if (value[i] == v) value.splice(i, 1);
	}
    
	printGraph() {
		for (var [key,val] of this.AdjList)
			console.log(`${key} -> ${val.toString()}`);
	}
    
	dfs(start_node) { 
		let stack = [start_node], visited = [];

		while(stack.length != 0) {
			let current = stack.pop(); // last-in frst-out
			visited.push(current); 
            
			for (let j of this.AdjList.get(current)) // j = child nodes
				if (!stack.includes(j) && !visited.includes(j)) stack.push(j);
		}
        
		console.log(visited.join(', '));
	}
}

let g = new Graph();
[ 'A', 'B', 'C', 'D', 'E', 'F' ].forEach( e => g.addVertex(e));

g.addEdge('A', 'B'); 
g.addEdge('B', 'C'); 
g.addEdge('B', 'E'); 
g.addEdge('C', 'E'); 
g.addEdge('C', 'D'); 
g.addEdge('E', 'D');
g.addEdge('E', 'F'); 
g.printGraph();
g.dfs('A'); // A, B, E, F, D, C