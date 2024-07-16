/*
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

숫자	영단어
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
제한사항
1 ≤ s의 길이 ≤ 50
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
입출력 예
s	result
"one4seveneight"	1478
"23four5six7"	234567
"2three45sixseven"	234567
"123"	123
입출력 예 설명
입출력 예 #1

문제 예시와 같습니다.
입출력 예 #2

문제 예시와 같습니다.
입출력 예 #3

"three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.
입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.
입출력 예 #4

s에는 영단어로 바뀐 부분이 없습니다.
제한시간 안내
정확성 테스트 : 10초
*/

function solution(s) {
  // 1. 문자열: 숫자 형태의 배열 만들어준다.
  const String_number = [
    { zero: 0 },
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
    { seven: 7 },
    { eight: 8 },
    { nine: 9 },
  ];

  // 2. 주어진 값을 split한다.
  const split_s = s.split("");

  // 3. 리턴하는 값을 배열로 만든다
  const result = [];
  let string_result = [];
  // 4. forEach문을 통하여 리턴할 배열에 값을 넣는다.
  split_s.forEach((split_s_content) => {
    if (isNaN(split_s_content)) {
      string_result.push(split_s_content);
      if (string_result.length > 2) {
        for (let i = 0; i < String_number.length; i++) {
          if (string_result.join("") === Object.keys(String_number[i])[0]) {
            string_result.splice(0);
            return result.push(Object.values(String_number[i])[0]);
          }
        }
      }
    }

    if (!isNaN(split_s_content)) return result.push(split_s_content);
  });

  // 5. result를 join을 한 뒤, Number로 숫자형으로 변환시켜준다.
  return Number(result.join(""));
}
