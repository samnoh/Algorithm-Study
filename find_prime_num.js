/*
소수 찾기

한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- 013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다. -> 0, 1, 3, 01, 03, 10, 13, 31, 30, 013, 103, 130, 310, 301

*/

function solution(numbers) {
	var answer = 0;
    
	console.log(subset(numbers.split(''), 1));

	return answer;
}

console.log(solution('17')); // 3
console.log(solution('011')); // 2;

function subset(arr, arr_size)
{
	let result_set = [];
    
	for(let x = 0; x < Math.pow(2, arr.length); x ++)
	{
		let result = [];
		let i = arr.length - 1; 
        
		do{
			if( (x & (1 << i)) !== 0) result.push(arr[i]);
		} while(i--);

		if (result.length >= arr_size)result_set.push(result);
	}

	return result_set; 
}

