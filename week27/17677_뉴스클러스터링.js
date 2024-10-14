/**
 * 자카드 유사도를 계산하는 함수입니다.
 *
 * 자카드 유사도(Jaccard Similarity)는 두 집합 간의 유사도를 측정하는 지표로,
 * 두 집합의 교집합 크기를 합집합 크기로 나눈 값으로 정의됩니다.
 * 두 집합이 모두 공집합일 경우 유사도는 1로 정의합니다.
 *
 * 문자열에서 두 글자씩 끊어서 다중집합을 구성합니다.
 * 이때 영어로 된 글자 쌍만 유효하며, 공백, 숫자, 특수 문자가 포함된 쌍은 무시합니다.
 * 대소문자는 구분하지 않으며, 예를 들어 "AB", "Ab", "ab"는 동일한 원소로 처리합니다.
 *
 * @param {string} str1 - 첫 번째 문자열 (길이: 2 이상, 1000 이하)
 * @param {string} str2 - 두 번째 문자열 (길이: 2 이상, 1000 이하)
 * @returns {number} - 두 문자열의 자카드 유사도에 65536을 곱한 후 소수점 이하를 버린 정수 값
 */
function solution(str1, str2) {
  let intersectionSize = 0; // 교집합 크기
  let unionSize = 0; // 합집합 크기

  const elementMap = new Map(); // 각 pair를 [str1 count, str2 count] 형태로 저장

  function isAlphabetPair(pair) {
    // 두 글자가 모두 영문자인지 검사
    return /^[A-Za-z]+$/.test(pair);
  }

  function generateMultiset(inputStr, index) {
    const normalizedStr = inputStr.toLowerCase(); // 소문자로 변환해 대소문자 구분 제거

    for (let i = 0; i < normalizedStr.length - 1; i++) {
      const pair = normalizedStr[i] + normalizedStr[i + 1]; // 두 글자씩 묶기
      if (!isAlphabetPair(pair)) continue; // 영문자가 아닌 쌍은 무시

      if (!elementMap.has(pair)) elementMap.set(pair, [0, 0]); // 새로운 pair 초기화
      elementMap.get(pair)[index]++; // 해당 문자열의 출현 빈도 증가
    }
  }

  // 두 문자열의 다중집합 생성
  generateMultiset(str1, 0);
  generateMultiset(str2, 1);

  // 교집합과 합집합 크기 계산
  elementMap.forEach(([count1, count2]) => {
    intersectionSize += Math.min(count1, count2); // 각 쌍의 최소값을 교집합에 더함
    unionSize += Math.max(count1, count2); // 각 쌍의 최대값을 합집합에 더함
  });

  // 65536을 곱한 후 소수점 아래 버리고 정수 반환
  return Math.floor(
    (unionSize === 0 ? 1 : intersectionSize / unionSize) * 65536
  );
}
