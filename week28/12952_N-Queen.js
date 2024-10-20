/**
 * N-Queens 문제를 해결하여 가능한 배치의 수를 반환하는 함수
 * @param {number} n - 체스판의 크기
 * @param {Array<Array<string>>} board - 체스판 상태
 * @param {number} row - 현재 퀸을 놓을 행 번호
 * @returns {number} 가능한 퀸 배치의 수
 */
function solution(
  n,
  board = Array.from({ length: n }, () => new Array(n).fill("0")),
  row = 0
) {
  // 퀸을 다 배치했으면 카운트 증가
  if (row === n) return 1;

  let count = 0;

  // 모든 열마다 수행
  for (let col = 0; col < n; col++) {
    if (isValid(board, row, col, n)) {
      board[row][col] = "Q"; // 퀸 배치
      count += solution(n, board, row + 1); // 다음 행으로 재귀 호출
      board[row][col] = "0"; // 퀸을 제거하고 다음 시도를 위해 초기화
    }
  }

  return count;
}

/**
 * 현재 위치에 퀸을 놓을 수 있는지 확인하는 함수
 * @param {Array<Array<string>>} board - 체스판 상태
 * @param {number} row - 현재 퀸을 놓을 행 번호
 * @param {number} col - 현재 퀸을 놓을 열 번호
 * @param {number} n - 체스판의 크기
 * @returns {boolean} 퀸을 놓을 수 있으면 true, 없으면 false
 */
function isValid(board, row, col, n) {
  // 같은 열에 퀸이 있는지 확인
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }

  // 왼쪽 위 대각선에 퀸이 있는지 확인
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  // 오른쪽 위 대각선에 퀸이 있는지 확인
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") return false;
  }

  // 모든 검사를 통과하면 퀸을 놓을 수 있음
  return true;
}
