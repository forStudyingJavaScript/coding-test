function solution(word) {
  // 각 자리수별 영향도 계산
  // 1번째 자리: 1
  // 2번째 자리: 1 + 5
  // 3번째 자리: 1 + 5 + 25
  // 4번째 자리: 1 + 5 + 25 + 125
  // 5번째 자리: 1 + 5 + 25 + 125 + 625
  const weight = [781, 156, 31, 6, 1];
  const vowels = ["A", "E", "I", "O", "U"];

  let answer = 0;

  // 각 자리수별로 계산
  for (let i = 0; i < word.length; i++) {
    // 현재 문자가 몇번째 모음인지 찾기
    const vowelIndex = vowels.indexOf(word[i]);
    // 해당 자리수의 가중치를 곱하여 더함
    answer += vowelIndex * weight[i] + 1;
  }

  return answer;
}
