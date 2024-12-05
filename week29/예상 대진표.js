function solution(N, A, B) {
  let round = 0; // 라운드 수를 세기 위해 초기화합니다.

  while (A !== B) {
    // 다음 라운드에서의 새로운 번호로 A와 B를 갱신합니다.
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    round++; // 라운드를 하나 증가시킵니다.
  }

  return round; // A와 B가 만나게 되는 라운드를 반환합니다.
}

// 예제 테스트
console.log(solution(8, 4, 7)); //3
