function solution(dartResult) {
  let scores = [];
  let n = dartResult.length;
  let i = 0;
  
  while (i < n) {
      let score = 0;
      
      // 숫자 부분 파싱 (10일 경우를 처리)
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
          score = 10;
          i += 2;
      } else {
          score = parseInt(dartResult[i]);
          i += 1;
      }
      
      // 보너스 처리
      let bonus = dartResult[i];
      if (bonus === 'S') {
          score = Math.pow(score, 1);
      } else if (bonus === 'D') {
          score = Math.pow(score, 2);
      } else if (bonus === 'T') {
          score = Math.pow(score, 3);
      }
      i += 1;
      
      // 옵션 처리
      if (dartResult[i] === '*' || dartResult[i] === '#') {
        if (dartResult[i] === '*') {
          //현재 점수 2배로 만들기
          score *= 2;
          //이전 점수가 있는지 확인: 점수 배열(scores)에 이전에 저장된 점수가 있는지 확인합니다. 
          //배열의 길이가 0보다 큰 경우, 즉 이전에 저장된 점수가 하나 이상 있는 경우에만 내부 코드가 실행됩니다.
          if (scores.length > 0) {
            //이전 점수 2배로 만들기: 점수 배열(scores)의 마지막 요소, 즉 바로 이전 기회의 점수를 2배로 만듭니다. 
            //scores.length - 1은 배열의 마지막 인덱스를 가리키며, 해당 인덱스의 값을 2배로 만듭니다.
            scores[scores.length - 1] *= 2;
          }
        } else if (dartResult[i] === '#') {
            score *= -1;
        }
        i += 1;
      }
      
      scores.push(score);
  }
  
  let answer = scores.reduce((a, b) => a + b, 0);
  return answer;
}

console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9
console.log(solution("1D2S0T")); //3
console.log(solution("1S*2T*3S")); //23
console.log(solution("1D#2S*3S")); //5
console.log(solution("1T2D3D#")); //-4
console.log(solution("1D2S3T*")); //59