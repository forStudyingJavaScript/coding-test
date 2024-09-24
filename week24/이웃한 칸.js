function solution(board, h, w) {
  const n = board.length;  // 보드의 크기 (보드가 정사각형이므로 한 변의 길이)
  const color = board[h][w];  // (h, w) 위치에 있는 선택된 셀의 색상
  let count = 0;  // 동일한 색상을 가진 인접한 셀의 개수를 저장할 변수
  
  // 방향 변화를 추적하는 배열 (오른쪽, 아래, 위, 왼쪽)
  const dh = [0, 1, -1, 0];
  const dw = [1, 0, 0, -1];
  
  for (let i = 0; i < 4; i++) {
    const h_check = h + dh[i];  // 새로운 행 위치 계산
    const w_check = w + dw[i];  // 새로운 열 위치 계산
      
    // 새 위치가 보드 범위 내에 있는지 확인
    if (h_check >= 0 && h_check < n && w_check >= 0 && w_check < n) {
      // 인접한 셀의 색상이 선택된 셀과 동일하면 카운트 증가
      if (board[h_check][w_check] === color) count++;
    }
  }
  
  return count;
}

console.log(solution([["blue", "red", "orange", "red"], 
                    ["red", "red", "blue", "orange"], 
                    ["blue", "orange", "red", "red"], 
                    ["orange", "orange", "red", "blue"]], 1, 1));  //2

console.log(solution([["yellow", "green", "blue"], 
                    ["blue", "green", "yellow"], 
                    ["yellow", "blue", "blue"]], 0, 1));  //1
