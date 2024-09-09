function solution(answers) {
  // 각 수포자의 찍기 패턴
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  // 점수를 기록할 배열
  let scores = [0, 0, 0];
  
  // 각 수포자의 점수 계산
  answers.forEach((answer, i) => {
      if (answer === pattern1[i % pattern1.length]) scores[0]++;
      if (answer === pattern2[i % pattern2.length]) scores[1]++;
      if (answer === pattern3[i % pattern3.length]) scores[2]++;
  });
  
  // 가장 높은 점수를 찾는다
  const maxScore = Math.max(...scores);
  
  // 가장 높은 점수를 받은 사람을 배열에 담는다
  let result = [];
  scores.forEach((score, i) => {
      if (score === maxScore) result.push(i + 1);
  });
  
  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
