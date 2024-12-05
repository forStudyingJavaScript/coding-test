function solution(k, tangerine) {
  // 각 귤 크기의 빈도를 계산합니다
  const sizeCounts = new Map();
  tangerine.forEach(size => {
    sizeCounts.set(size, (sizeCounts.get(size) || 0) + 1);
  });

  // 빈도에 따라 내림차순으로 정렬합니다
  const sortedCounts = Array.from(sizeCounts.values()).sort((a, b) => b - a);

  // k개에 도달할 때까지 빈도를 누적합니다
  let selectedCount = 0;
  let uniqueSizes = 0;

  for (const count of sortedCounts) {
    selectedCount += count;
    uniqueSizes += 1;
    if (selectedCount >= k) break;
  }

  // Step 4: 사용된 서로 다른 귤 크기의 수를 반환합니다
  return uniqueSizes;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1