/**
 *
 * @param {} board - 보드의 각 칸에 칠해진 색깔 이름이 담긴 이차원 문자열 리스트, 1 ≤ board의 길이 ≤ 7
 * board의 길이와 board[n]의 길이는 동일합니다.
 * 1 ≤ board[h][w]의 길이 ≤ 10
 * board[h][w]는 영어 소문자로만 이루어져 있습니다.
 * @param {*} h - 고른 칸의 위치를 나타내는 두 정수, 0 ≤ h, w < board의 길이
 * @param {*} w - 고른 칸의 위치를 나타내는 두 정수, 0 ≤ h, w < board의 길이
 *
 *  board[h][w]와 이웃한 칸들 중 같은 색으로 칠해져 있는 칸의 개수를 return 하도록 solution 함수를 완성해 주세요.
 */

// 1. 정수를 저장할 변수 n을 만들고 board의 길이를 저장합니다.
// 2. 같은 색으로 색칠된 칸의 개수를 저장할 변수 count를 만들고 0을 저장합니다.
// 3. h와 w의 변화량을 저장할 정수 리스트 dh, dw를 만들고 각각 [0, 1, -1, 0], [1, 0, 0, -1]을 저장합니다.
// 4. 반복문을 이용해 i 값을 0부터 3까지 1 씩 증가시키며 아래 작업을 반복합니다.
//     4-1. 체크할 칸의 h, w 좌표를 나타내는 변수 h_check, w_check를 만들고 각각 h + dh[i], w + dw[i]를 저장합니다.
//     4-2. h_check가 0 이상 n 미만이고 w_check가 0 이상 n 미만이라면 다음을 수행합니다.
//         4-2-a. board[h][w]와 board[h_check][w_check]의 값이 동일하다면 count의 값을 1 증가시킵니다.
// 5. count의 값을 return합니다.

const solution = (board, h, w) => {
  let n = board.length;
  let count = 0;

  const dh = [0, 1, -1, 0];
  const dw = [1, 0, 0, -1];

  for (let i = 0; i <= 3; i++) {
    const h_check = h + dh[i];
    const w_check = w + dw[i];

    if (0 <= h_check && h_check < n && 0 <= w_check && w_check < n) {
      if (board[h][w] === board[h_check][w_check]) count++;
    }
  }

  return count;
};

// 테스트 케이스 실행
function test() {
  const testCases = [
    {
      input: [
        [
          ["blue", "red", "orange", "red"],
          ["red", "red", "blue", "orange"],
          ["blue", "orange", "red", "red"],
          ["orange", "orange", "red", "blue"],
        ],
        1,
        1,
      ],
      expected: 2,
    },
    {
      input: [
        [
          ["yellow", "green", "blue"],
          ["blue", "green", "yellow"],
          ["yellow", "blue", "blue"],
        ],
        0,
        1,
      ],
      expected: 1,
    },
    {
      input: [[["yellow"]], 0, 0],
      expected: 0,
    },
    {
      input: [
        [
          ["red", "blue", "orange"],
          ["green", "red", "blue"],
          ["blue", "yellow", "red"],
        ],
        0,
        1,
      ],
      expected: 0,
    },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = solution(...input);
    console.log(
      `테스트 ${index + 1}: ${
        result === expected
          ? "통과"
          : `실패 (기대값: ${expected}, 실행값: ${result})`
      }`
    );
  });
}

test();
