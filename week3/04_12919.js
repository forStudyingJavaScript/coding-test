/* 서울에서 김서방 찾기

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.

1) for문
- seoul을 순회하여 "Kim" 값을 찾아 인덱스 반환.

const solution = (seoul) => {
  let res = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") res = `김서방은 ${i}에 있다`;
  }
  return res;
};

2) indexOf() : 문자열 객체에서 주어진 값과 일치하는 인덱스를 반환. 찾고자하는 값이 명확하게 주어질 때 사용할 수 있다.

const solution = (seoul) => "김서방은 " + seoul.indexOf("Kim") + "에 있다";

3) findIndex() : ES6에 도입된 메서드. 콜백 함수를 사용하여 배열의 각 요소에 대해 특정 조건을 테스트하고, 조건을 만족하는 첫 번째 요소의 인덱스를 반환한다.
*/

const solution = (seoul) =>
  `김서방은 ${seoul.findIndex((s) => s === "Kim")}에 있다`;

console.log(solution(["Jane", "Kim"])); //"김서방은 1에 있다"
