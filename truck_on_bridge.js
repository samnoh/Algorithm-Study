/*
https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

다리를 지나는 트럭

트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.
예를 들어, 길이가 2대까지, 무게 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

제한 조건
- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.
*/

function solution(bridge_length, weight, truck_weights) {
	let total_time_second = 0, on_bridge = [];

	while(truck_weights.length > 0 || on_bridge.length > 0) { // both has to be zero to escape the loop
		on_bridge = on_bridge.map( e => {
			let new_obj = Object.assign({}, e);
			new_obj.time_left --; // every 1 second trucks take one step ahead
			return new_obj;
		}).filter( e => e.time_left > 0); // when time_left == 0, it is not on the bridge anymore
        
		if (on_bridge.reduce((acc, cur) => acc + cur.weight, 0) + truck_weights[0] <= weight) // there is a room for one more truck on the bridge
			on_bridge.push({
				weight: truck_weights.shift(),
				time_left: bridge_length
			});
            
		total_time_second ++; // 1 second added
	}
    
	return total_time_second;
}

console.log(solution(2, 10, [7,4,5,6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); // 110
