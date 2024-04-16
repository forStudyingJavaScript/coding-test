/* x만큼 간격이 있는 n개의 숫자

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.

1) 
- for문으로 x값을 n만큼 순회하여 값을 더한다.
- 더한 값을 push하여 배열에 추가한다.

const solution = (x, n) => {
  let res = [];

  for (i = x; n > res.length; i += x) res.push(i);
  return res;
};

2) 함수형
- Array
- map()
- fill() : fill() 메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경. 수정된 배열을 반환한다.
*/

const solution = (x, n) =>
  Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
