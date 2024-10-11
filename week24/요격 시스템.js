function solution(targets) {
  // 각 구간을 끝점 기준으로 정렬
  targets.sort((a, b) => a[1] - b[1]);
  
  let count = 0; // 요격 미사일의 개수를 세기 위한 변수
  let lastIntercept = -1; // 마지막으로 요격 미사일을 발사한 위치를 저장하는 변수
  
  // 각 구간을 처리
  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i];
    
    // 현재 구간이 마지막 요격 미사일 범위 밖에 있으면, 새로운 요격 미사일 발사
    if (lastIntercept < start) {
        count++;
        lastIntercept = end - 0.5; // 구간 끝점 바로 안쪽에 요격 미사일을 발사
    }
  }
  
  return count;
}

console.log(solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]])); // 3
