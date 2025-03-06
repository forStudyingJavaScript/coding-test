/*
문제 설명
가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.

예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

Imgur
Imgur

체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.

제한사항
퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
n은 12이하의 자연수 입니다.
입출력 예
n	result
4	2
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.
*/
function solution(n) {
  const cols = new Array(n).fill(0); // 각 행에 배치된 퀸의 열 위치를 기록하는 배열

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      // 같은 열에 있거나, 대각선에 있으면 유효하지 않음
      if (cols[i] === col || Math.abs(cols[i] - col) === row - i) {
        return false;
      }
    }
    return true;
  }

  let result = 0;

  function placeQueens(row) {
    if (row === n) {
      result++; // n개의 퀸을 모두 배치했다면 유효한 배치 방법이므로 카운트 증가
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        cols[row] = col; // 현재 행에 퀸을 배치
        placeQueens(row + 1); // 다음 행으로 넘어감
      }
    }
  }

  placeQueens(0); // 첫 번째 행부터 시작
  return result;
}
