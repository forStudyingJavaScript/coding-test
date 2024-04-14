/* 
120905 n의 배수 고르기 (lv.0)

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10,000
1 ≤ numlist의 크기 ≤ 100
1 ≤ numlist의 원소 ≤ 100,000

1) for문
- 정수 n의 배수를 담는 새 배열 newList
- for문으로 배열 numList 순회
- push() 메서드로 true값 빈 배열에 담기

`arr.push(element1[, ...[, elementN]])`
- push 메서드는 배열 끝에 여러 값을 추가
- 반환 값은 호출한 배열의 새로운 길이(length)속성이다.
- elementN : 배열의 끝에 추가할 요소.

const solution = (n, numList) => {
  const newList = [];
  for (let i = 0; i < numList.length; i++) {
    if (numList[i] % n === 0) {
      newList.push(numList[i]);
    }
  }
  return newList;
};

2) 순회메서드 = filter()

`filter(callbackFn)`
- callbackFn
  - element : 배열에서 처리 중인 현재 요소.
  - index : 배열에서 처리 중인 현재 요소의 인덱스
  - array : filter()가 호출된 배열.

- filter() 순회메서드는 배열의 각 요소에 대해 제공된 callbackFn 함수를 한 번씩 호출한다.
- callbackFn이 *참 값*을 반환하는 모든 값은 새 배열로 구성한다. 
- callbackFn 테스트를 통과하지 못한 배열 요소는 새 배열에 포함되지 않는다.
 */

const solution = (n, numList) => numList.filter((el) => el % n === 0);

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
console.log(solution(5, [1, 9, 3, 10, 13, 5])); // [10, 5]
