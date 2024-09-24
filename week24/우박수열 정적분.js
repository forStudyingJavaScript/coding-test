function solution(k, ranges) {
  // k에서 시작하는 콜라츠 수열 생성
  let collatz = [];
  collatz.push(k);
  
  while (k > 1) {
    if (k % 2 === 0) k = k / 2;
    else k = k * 3 + 1;
    collatz.push(k);
  }
  
  // 각 점 사이의 면적 계산
  let areas = [];
  
  for (let i = 0; i < collatz.length - 1; i++) {
    // 사다리꼴 면적 공식: (h1 + h2) * base / 2
    const h1 = collatz[i];
    const h2 = collatz[i + 1];
    const base = 1;  // x축에서의 차이는 항상 1
    const area = (h1 + h2) * base / 2;
    areas.push(area);
  }
  
  // 각 범위를 처리하고 정적분 계산
  let result = [];
  
  for (const [a, b] of ranges) {
    const end = areas.length + b;  // b는 음수이므로 마지막에서부터 계산
    
    if (a > end) result.push(-1.0); // 잘못된 범위인 경우, -1 반환
    else {
      let sum = 0;
      for (let i = a; i < end; i++) {
          sum += areas[i];
      }
      result.push(sum);
    }
  }
  
  return result;
}

console.log(solution(5, [[0,0],[0,-1],[2,-3],[3,-3]])); //[33.0, 31.5, 0.0, -1.0]
console.log(solution(3, [[0,0], [1,-2], [3,-3]])); //[47.0, 36.0, 12.0]