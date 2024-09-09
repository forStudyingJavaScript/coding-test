function solution(park, routes) {
  // 공원의 크기
  const H = park.length;
  const W = park[0].length;
  
  // 시작 지점 찾기
  let startX, startY;
  for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
          if (park[i][j] === 'S') {
              startX = j;
              startY = i;
              break;
          }
      }
      if (startX !== undefined) break;
  }
  
  // 방향별 이동 벡터
  const directions = {
      'N': [-1, 0],
      'S': [1, 0],
      'W': [0, -1],
      'E': [0, 1]
  };
  
  // 현재 위치
  let currentX = startX;
  let currentY = startY;
  
  // 명령 수행
  for (const route of routes) {
      const [op, n] = route.split(' ');
      const [dx, dy] = directions[op];
      const steps = parseInt(n);
      
      let newX = currentX;
      let newY = currentY;
      let validMove = true;
      
      // 이동할 위치 계산
      for (let step = 1; step <= steps; step++) {
          newX += dy;
          newY += dx;
          
          // 공원을 벗어나는지 확인
          if (newX < 0 || newX >= W || newY < 0 || newY >= H) {
              validMove = false;
              break;
          }
          
          // 장애물을 만나는지 확인
          if (park[newY][newX] === 'X') {
              validMove = false;
              break;
          }
      }
      
      // 유효한 이동일 경우 위치 업데이트
      if (validMove) {
          currentX = newX;
          currentY = newY;
      }
  }
  
  return [currentY, currentX];
}

console.log(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"])); // [2, 1]
console.log(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"])); // [0, 1]
console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])); // [0, 0]
