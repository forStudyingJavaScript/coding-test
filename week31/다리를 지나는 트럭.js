function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = []; // 다리를 나타내는 큐 (현재 다리를 건너는 트럭들)
  let bridgeWeight = 0; // 현재 다리 위에 있는 트럭들의 총 무게

  while (truck_weights.length > 0 || bridge.length > 0) {
      time++;

      // 다리를 다 건넌 트럭 제거
      if (bridge.length > 0 && bridge[0][1] === time) {
          bridgeWeight -= bridge[0][0]; // 트럭의 무게를 총 무게에서 제거
          bridge.shift(); // 다리 큐에서 트럭 제거
      }

      // 다음 트럭을 다리에 추가할 수 있는지 확인
      if (
          truck_weights.length > 0 && 
          bridgeWeight + truck_weights[0] <= weight && // 무게 제한 확인
          bridge.length < bridge_length // 길이 제한 확인
      ) {
          const truck = truck_weights.shift(); // 대기 트럭 중 첫 번째 트럭 가져오기
          bridge.push([truck, time + bridge_length]); // 트럭과 도착 시간을 다리 큐에 추가
          bridgeWeight += truck; // 다리 위 총 무게 갱신
      }
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); //8
console.log(solution(100, 100, [10])); //101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //110
