/*
https://www.zerocho.com/category/Algorithm/post/584b9033580277001862f16c
*/

let Graph = (function() {
	function Vertex(key) { // node
		this.next = null;
		this.arc = null;
		this.key = key;
		this.inTree = null;
	}
    
	function Arc(data, dest, capacity) { // edge
		this.nextArc = null;
		this.destination = dest;
		this.data = data;
		this.capacity = capacity;
		this.inTree = null;
	}
    
	function Graph() {
		this.count = 0;
		this.first = null;
	}
    
	Graph.prototype.insertVertex = function(key) {
		let vertex = new Vertex(key);
		let last = this.first;
		if (last) {
			while (last.next !== null) {
				last = last.next;
			}
			last.next = vertex;
		} else {
			this.first = vertex;
		}
		this.count++;
	};
    
	Graph.prototype.deleteVertex = function(key) {
		let vertex = this.first;
		let prev = null;
		while (vertex.key !== key) {
			prev = vertex;
			vertex = vertex.next;
		}
		if (!vertex) return false;
		if (!vertex.arc) return false;
		if (prev) {
			prev.next = vertex.next;
		} else {
			this.first = vertex.next;
		}
		this.count--;
	};
    
	Graph.prototype.insertArc = function(data, fromKey, toKey, capacity) {
		let from = this.first;
		let to = this.first;
		while (from && from.key !== fromKey) {
			from = from.next;
		}
		while (to && to.key !== toKey) {
			to = to.next;
		}
		if (!from || !to) return false;
		let arc = new Arc(data, to, capacity);
		let fromLast = from.arc;
		if (fromLast) {
			while (fromLast.nextArc != null) {
				fromLast = fromLast.nextArc;
			}
			fromLast.nextArc = arc;
		} else {
			from.arc = arc;
		}
	};
    
	Graph.prototype.deleteArc = function(fromKey, toKey) {
		let from = this.first;
		while (from !== null) {
			if (from.key === fromKey) break;
			from = from.next;
		}
		if (!from) return false;
		let fromArc = from.arc;
		let preArc;
		while (fromArc !== null) {
			if (toKey === fromArc.destination.key) break;
			preArc = fromArc;
			fromArc = fromArc.next;
		}
		if (!fromArc) return false;
		if (preArc) {
			preArc.nextArc = fromArc.nextArc;
		} else {
			from.arc = fromArc.nextArc;
		}
	};
    
	Graph.prototype.shortest = function(startKey) {
		let from = this.first;
		while (from) {
			if (from.key === startKey) {
				break;
			}
			from = from.next;
		}
		console.log('시작점은 %s입니다', from.key);
		let temp = this.first;
		let current;
		let arc;
		while (temp) { // 모든 버텍스 최단거리를 Infinity로 초기화
			temp.distance = Infinity;
			temp = temp.next;
		}
		temp = this.first;
		temp.distance = 0;
		while (temp) { // 반복문을 돌며 최단 거리를 찾음
			current = temp;
			temp = temp.next;
			arc = current.arc;
			while (arc) {
				if (arc.destination.distance > current.distance + arc.data) {
					arc.destination.distance = current.distance + arc.data;
				}
				arc = arc.nextArc;
			}
		}
		temp = this.first;
		while (temp) {
			console.log('%s까지의 최단 거리는 %d입니다', temp.key, temp.distance);
			temp = temp.next;
		}
	};

	return Graph;
})();


let graph = new Graph();
graph.insertVertex('A');
graph.insertVertex('B');
graph.insertVertex('C');
graph.insertVertex('D');
graph.insertVertex('E');
graph.insertVertex('F');
graph.insertArc(1, 'A', 'B');
graph.insertArc(1, 'B', 'C');
graph.insertArc(1, 'B', 'E');
graph.insertArc(1, 'C', 'E');
graph.insertArc(1, 'C', 'D');
graph.insertArc(1, 'E', 'D');
graph.insertArc(1, 'E', 'F');
graph.shortest('A');