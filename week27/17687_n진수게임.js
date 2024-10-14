/**
 * N진수 게임에서 튜브가 말해야 하는 숫자들을 미리 계산하여 출력하는 함수입니다.
 *
 * 이 함수는 2진법에서 16진법까지의 숫자 게임을 진행하며,
 * 각 플레이어가 차례로 숫자를 한 자리씩 끊어 말하는 규칙에 따라 튜브가 말할 숫자를 미리 구합니다.
 * 숫자는 0부터 시작하며, 10 이상의 숫자는 A~F로 대문자 표시됩니다.
 *
 * @param {number} n - 진법 (2 이상 16 이하의 정수)
 * @param {number} t - 튜브가 말해야 하는 숫자의 갯수 (1 이상 1000 이하의 정수)
 * @param {number} m - 게임에 참가하는 전체 인원 수 (2 이상 100 이하의 정수)
 * @param {number} p - 튜브의 순서 (1 이상 m 이하의 정수, 1부터 시작)
 * @returns {string} - 튜브가 말해야 하는 숫자 t개를 공백 없이 나열한 문자열
 */
function solution(n, t, m, p) {
  const data = Array.from({ length: t * m + 1 }, (_, i) =>
    i.toString(n).toUpperCase()
  ).join("");

  let answer = "";

  for (let i = p - 1; i < data.length - 1; i += m) {
    answer += data[i];
    if (answer.length >= t) break;
  }

  return answer;
}
