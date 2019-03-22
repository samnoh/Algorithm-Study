/*
https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
- numbers의 길이는 1 이상 100,000 이하입니다.
- numbers의 원소는 0 이상 1,000 이하입니다.
- 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

function solution(numbers) {
	let arrange = (arr) => {
		return arr.sort( (a, b) => ('' + b + a) - ('' + a + b)).join('');
	};

	return (numbers.every(e => e == 0)) ? '0' : arrange(numbers);
}
console.log(solution([6, 10, 2])); // 6210
console.log(solution([6, 11, 2, 10, 1])); // 6211110
console.log(solution([3, 30, 34, 5, 9])); // 9534330
console.log(solution([30, 34, 5, 9, 1, 2, 4, 88, 3])); // 988543433021;
console.log(solution([12, 121])); // 12121
console.log(solution([21, 212])); // 21221
console.log(solution([0, 0])); // 0
console.log(solution([12, 1, 10])); // 12110

/*
solution([3, 30, 34, 5, 9])

[3, 30]
[34, 30] [3, 34, 30] [34, 3, 30]
[5, 30] [34, 3, 5, 30]
[5, 3] [34, 5, 3, 30]
[5, 34] [5, 34, 3, 30]
[9, 30] [5, 34, 3, 9, 30]
[9, 3] [5, 34, 9, 3, 30]
[9, 34] [5, 9, 34, 3, 30]
[9, 5] [9, 5, 34, 3, 30] 9534330
*/
