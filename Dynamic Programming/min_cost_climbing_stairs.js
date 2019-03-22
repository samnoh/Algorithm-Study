/*
최소 비용으로 계단 오르기 (Min cost climbing stairs)
https://www.youtube.com/watch?v=EKHFu9vB-Oc

On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps.
You need to find minimum cost to reach the top of the floor, 
and you can either start from the step with index 0 or index 1.
*/

function solution (arr) {
	let case1 = 0, case2 = 0, current;

	for (let i = arr.length - 1; i >= 0; i --) { // top-down approach
		current = Math.min(case1, case2) + arr[i];
		case2 = case1;
		case1 = current;
	}
    
	return Math.min(case1, case2);
}
 
let stairs1 = [10, 15, 20]; // 15
let stairs2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]; // 6
console.log(solution(stairs1));
console.log(solution(stairs2));