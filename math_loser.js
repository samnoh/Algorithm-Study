/*
모의고사

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
- 가장 높은 점수를 받은 사람을 리턴하시오.
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/

function solution(answers) {
	let e = [
		{
			str: [1,2,3,4,5],
			var: 0,
			index: 1
		}, 
		{
			str: [2,1,2,3,2,4,2,5], 
			var: 0,
			index: 2
		}, 
		{
			str: [3,3,1,1,2,2,4,4,5,5],
			var: 0,
			index: 3
		}];


	for(let i = 0; i < answers.length; i ++) {
		e.forEach( v => {
			
		});
		if (answers[i] === e[0].str[i % e[0].str.length]) e[0].var ++;
		if (answers[i] === e[1].str[i % e[1].str.length]) e[1].var ++;
		if (answers[i] === e[2].str[i % e[2].str.length]) e[2].var ++;
	}

	e.sort( (a, b) => a.var - b.var);
	return (e[2].var !== 0) ? e.filter( i => i.var === e[2].var).map( i => i.index) : [1, 2, 3];
}

console.log(solution([1,2,3,4,5])); // [1]
console.log(solution([1,3,2,4,2])); // [1, 2, 3]
console.log(solution([1,2,3,4,5,1,2,3,4,5])); // [2, 3, 1]
console.log(solution([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])); // [2, 1, 3]
console.log(solution([])); // [1, 2, 3]
console.log(solution([1,2,3,4,5,1,2,3,4])); 
console.log(solution([1])); 
