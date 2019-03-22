/*
https://programmers.co.kr/learn/courses/30/lessons/42587

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.

예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.
내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.
현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

제한사항
1. 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
2. 인쇄 작업의 중요도는 1-9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
3. location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

*/

function solution(priorities, location) { // Stack last-in first-out
	let answer = 0;
    
	let print_arr = priorities.map( (e, i) => ({
		prior: e,
		location: i === location, // true or false
	}));
     
	for (;;) {
		let first_index = print_arr.splice(0, 1)[0]; // [].splice(0, 1) returns [...] (arr), [].splice(0, 1)[0] returns ... (not arr)
		
		if (print_arr.some( (e) => e.prior > first_index.prior)) print_arr.push(first_index); // goes to last index       
		else {            
			answer ++;
			if (first_index.location) break;
		}
	}
    
	return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
console.log(solution([1, 1, 9, 1, 2, 1], 4)); // 2
console.log(solution([2, 1, 9, 1, 2, 3], 3)); // 6
