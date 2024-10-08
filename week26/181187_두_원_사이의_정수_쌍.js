/**
문제 설명
x축과 y축으로 이루어진 2차원 직교 좌표계에 중심이 원점인 서로 다른 크기의 원이 두 개 주어집니다. 반지름을 나타내는 두 정수 r1, r2가 매개변수로 주어질 때, 두 원 사이의 공간에 x좌표와 y좌표가 모두 정수인 점의 개수를 return하도록 solution 함수를 완성해주세요.
※ 각 원 위의 점도 포함하여 셉니다.

제한 사항
1 ≤ r1 < r2 ≤ 1,000,000
입출력 예
r1	r2	result
2	3	20
 */
function solution(r1, r2) {
  let count = 0;

  // x 좌표를 0부터 r2까지 탐색
  for (let i = 1; i <= r2; i++) {
    // 두 원 사이에서 y의 가능한 범위를 구함
    let max = Math.floor(Math.sqrt(r2 ** 2 - i ** 2)); // r2에서의 y값
    let min = Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)); // r1에서의 y값

    if (i > r1) {
      min = 0; // r1보다 작은 x값에서는 0 이상으로 가능
    }

    // x에 대해 구한 가능한 y 좌표의 개수를 센다
    count += (max - min + 1) * 4; // r2 위의 y값에서 r1 내부의 y값을 제외 * 4(4사 분면이므로)
  }

  return count;
}
