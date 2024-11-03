/**
 * 롤케이크에 올려진 토핑 배열을 기준으로 공평하게 자를 수 있는 경우의 수를 계산합니다.
 * 배열의 한 지점을 기준으로 나눌 때, 양쪽 부분의 토핑 종류 수가 같으면 공평하게 나눈 것으로 간주합니다.
 *
 * @param {number[]} topping - 롤케이크에 올려진 토핑 번호가 담긴 정수 배열
 * @returns {number} 공평하게 롤케이크를 자를 수 있는 방법의 수
 *
 * @example
 * const topping = [1, 2, 1, 3, 1, 4, 1, 2];
 * const result = solution(topping); // 2
 */
function solution(topping) {
  // 배열을 1번 잘라서 각 버킷에 든 종류가 같아야 함
  // set 자료구조를 이용해서 size 계산
  // 캐싱을 통해 최적화
  const right = new Set();
  const left = new Set();

  const rightSizes = new Array(topping.length).fill(0);
  const leftSizes = new Array(topping.length).fill(0);

  const toppingLastIndex = topping.length - 1;

  let count = 0;

  for (let i = 0; i <= toppingLastIndex; i++) {
    right.add(topping[i]);
    left.add(topping[toppingLastIndex - i]);

    rightSizes[i] = right.size;
    leftSizes[i] = left.size;
  }

  for (let i = 0; i <= toppingLastIndex; i++) {
    if (rightSizes[i] === leftSizes[toppingLastIndex - 1 - i]) count++;
  }

  return count;
}
