/* 배열 회전시키기 (120844)

정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.

1) 배열의 값을 잘라서 좌/우로 붙이는 방법을 생각해 보았습니다.
- slice()를 이용하여 값 자르기
- numbers는 유지하면서 새로운 배열 생성해야 하므로 스프레드 연산자를 이용


const solution = (numbers, direction) => {
  let res = [];

  if (direction === "rigth") {
    res = [
      numbers[numbers.length - 1],
      ...numbers.slice(0, numbers.length - 1),
    ];
  } else {
    res = [...numbers.slice(1), numbers[0]];
  }
  return res;
};

2) 삼항연산자로 정리
*/

const solution = (numbers, direction) =>
  direction === "left"
    ? [...numbers.slice(1), numbers[0]]
    : [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];

console.log(solution([1, 2, 3], "right")); //[3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left")); //[455, 6, 4, -1, 45, 6, 4]
