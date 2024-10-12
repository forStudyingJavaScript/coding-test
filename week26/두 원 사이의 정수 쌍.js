function solution(r1, r2) {
  let answer = 0;
  
  for (let i = 1; i <= r2; i++) {
      // (x, y)가 작은 원 바깥에 위치하는 최소 y값 계산
      let min = r1 >= i ? Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) : 0;
      // (x, y)가 큰 원 안에 위치하는 최대 y값 계산
      let max = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
      
      // 네 개의 사분면에 있는 점을 모두 포함하여 4배로 카운트
      answer += (max - min + 1) * 4;
  }

  return answer;
}

console.log(solution(2, 3)); //20
