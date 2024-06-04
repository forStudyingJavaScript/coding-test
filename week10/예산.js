function solution(d, budget) {
  d.sort((a, b) => a - b);
  // 부서별로 신청한 금액을 오름차순으로 정렬합니다.

  let res = 0;
  // 물품을 구매하는데 사용한 총 금액을 저장하는 변수입니다.
  let count = 0;
  // 지원해줄 수 있는 부서의 수를 세는 변수입니다.

  for (const v of d) {
    res += v;
    if (res <= budget) count ++;
  }
  // 각 부서의 신청 금액을 하나씩 확인합니다.
  // 예산을 초과하지 않으면 부서 수를 증가시킵니다.

  return count;
}


function solution(d, budget) {
  return d.sort((a, b) => a - b).reduce((count, price) => {
      return count + ((budget -= price) >= 0);
  }, 0);
}

console.log(solution([1,3,2,5,4], 9)); //3