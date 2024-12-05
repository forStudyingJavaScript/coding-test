function solution(N, road, K) {
  // 그래프를 인접 리스트로 생성
  const graph = Array.from({ length: N + 1 }, () => []);
  road.forEach(([a, b, c]) => {
    graph[a].push([b, c]); // a -> b로 가는 비용 c를 추가
    graph[b].push([a, c]); // b -> a로 가는 비용 c를 추가 (양방향 도로)
  });

  // 다익스트라 알고리즘
  const distances = Array(N + 1).fill(Infinity); // 각 마을까지의 최단 시간을 저장
  distances[1] = 0; // 시작 마을은 1번 마을
  const pq = [[1, 0]]; // 우선순위 큐: [현재 마을, 현재 거리]

  while (pq.length > 0) {
    pq.sort((a, b) => a[1] - b[1]); // 거리 기준으로 정렬 (최소 힙처럼 동작)
    const [currentNode, currentDistance] = pq.shift();

    // 이미 더 짧은 경로를 찾았다면 건너뛰기
    if (currentDistance > distances[currentNode]) continue;

    // 이웃 마을 탐색
    for (const [nextNode, travelTime] of graph[currentNode]) {
      const newDistance = currentDistance + travelTime;

      if (newDistance < distances[nextNode]) {
        distances[nextNode] = newDistance; // 최단 거리 갱신
        pq.push([nextNode, newDistance]); // 큐에 추가
      }
    }
  }

  // K 이하의 시간으로 도달 가능한 마을 수 계산
  return distances.filter(time => time <= K).length;
}

console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3)); //4
console.log(solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4)); //4
