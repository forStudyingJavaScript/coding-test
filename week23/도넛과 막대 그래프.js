function solution(edges) {
  const graph = {};
  const inDegree = {};
  const outDegree = {};

  // 그래프 초기화 및 진입 차수, 진출 차수 계산
  for (const [start, end] of edges) {
      if (!graph[start]) graph[start] = [];
      graph[start].push(end);

      outDegree[start] = (outDegree[start] || 0) + 1;
      inDegree[end] = (inDegree[end] || 0) + 1;

      if (!(end in outDegree)) outDegree[end] = 0;
      if (!(start in inDegree)) inDegree[start] = 0;
  }

  let addedNode = -1;
  let donutCount = 0;
  let lineCount = 0;
  let eightCount = 0;

  // 추가된 노드 확인: 진출 차수가 1 이상이고, 진입 차수가 0인 노드
  for (const node in outDegree) {
      if (outDegree[node] > 1 && inDegree[node] === 0) {
          addedNode = Number(node);
      }
  }

  // 각 노드를 차수에 따라 분류
  for (const node in outDegree) {
      const out = outDegree[node];
      const inDeg = inDegree[node];

      if (out === 0) {
          lineCount++; // 막대 모양 구조 (진출 차수가 0인 경우)
      } else if (out > 1 && inDeg > 1) {
          eightCount++; // 8자 모양 구조 (진출 차수와 진입 차수가 모두 1 이상)
      }
  }

  // 도넛 모양 그래프 수 계산
  donutCount = outDegree[addedNode] - lineCount - eightCount;

  return [addedNode, donutCount, lineCount, eightCount];
}

console.log(solution([[2, 3], [4, 3], [1, 1], [2, 1]]));  // [2, 1, 1, 0]
console.log(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]));  // [4, 0, 1, 2]
