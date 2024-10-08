/*
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
입출력 예
numbers	return
"17"	3
"011"	2
입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.
*/
function solution(numbers) {
  // 소수 판별을 위한 함수
  function isPrime(n) {
    if (n < 2) return false; // 0, 1은 소수가 아님
    // 제곱근을 이용하여 시간 복잡도 감소
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const set = new Set(); // 중복 조합 숫자를 제거하기 위해

  // 숫자를 재귀적으로 조합, 소수 확인 후 set에 추가
  function recursion(current, number_mix) {
    if (current.length > 0) {
      set.add(parseInt(current));
    }

    for (let i = 0; i < number_mix.length; i++) {
      recursion(
        current + number_mix[i],
        number_mix.slice(0, i) + number_mix.slice(i + 1)
      );
    }
  }

  recursion("", numbers);

  // 소수 판별 후 counting
  let count = 0;
  set.forEach((each) => {
    if (isPrime(each)) count++;
  });

  return count;
}
