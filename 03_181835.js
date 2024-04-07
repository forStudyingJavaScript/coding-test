/* 
181835 조건에 맞게 수열 변환하기 3 (lv.0)

정수 배열 arr와 자연수 k가 주어집니다.

만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.

이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ arr의 길이 ≤ 1,000,000
1 ≤ arr의 원소의 값 ≤ 100
1 ≤ k ≤ 100

1) for문
- arr를 순회
- 만약, k가 짝수일때는 더하고, 아니면 곱하라.


const solution = (arr, k) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (k % 2 === 0) {
      res[i] = arr[i] + k;
    } else {
      res[i] = arr[i] * k;
    }
  }
  return res;
};

2) 함수형
- .map()
 */
const solution = (arr, k) => arr.map((v) => (k % 2 === 0 ? v + k : v * k));

console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); // [3, 4, 5, 102, 101, 100]
