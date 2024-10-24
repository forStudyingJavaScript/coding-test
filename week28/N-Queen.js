function solution(n) {
  let result = 0;
  const board = new Array(n).fill(0); // 각 행의 퀸 위치를 저장하는 배열

  // 퀸을 해당 위치에 놓을 수 있는지 확인하는 함수
  const isSafe = (row, col) => {
      // 현재 행보다 이전의 모든 행에 대해 검사
      for (let i = 0; i < row; i++) {
          // 1. 같은 열에 퀸이 있는지 확인
          // 2. 대각선 위치에 퀸이 있는지 확인
          if (board[i] === col || Math.abs(board[i] - col) === row - i) {
              return false;
          }
      }
      return true;
  };

  // 백트래킹 방식으로 퀸을 놓는 함수
  const placeQueens = (row) => {
      // 마지막 행까지 퀸을 모두 배치한 경우
      if (row === n) {
          result++;
          return;
      }
      // 현재 행(row)의 각 열(col)에 퀸을 배치해보기
      for (let col = 0; col < n; col++) {
          if (isSafe(row, col)) {
              board[row] = col; // 퀸을 해당 열에 배치
              placeQueens(row + 1); // 다음 행에 퀸 배치 시도
              board[row] = 0; // 퀸을 다른 위치에 배치하기 위해 초기화
          }
      }
  };

  placeQueens(0); // 첫 번째 행부터 퀸 배치를 시작
  return result;
}
