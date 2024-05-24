function solution(n, lost, reserve) {
  let actualLost = lost.filter(student => !reserve.includes(student));
  let actualReserve = reserve.filter(student => !lost.includes(student));
  // n: 전체 학생 수
  // lost: 체육복을 도난당한 학생들의 번호가 담긴 배열
  // reserve: 여벌 체육복을 가져온 학생들의 번호가 담긴 배열
  // 도난당한 학생과 여벌 체육복을 가져온 학생 중복 제거: 여벌 체육복을 가져왔지만 도난당한 학생들은 빌려줄 수 없기 때문에, 
  // 실제로 체육복을 잃은 학생(actualLost)과 여벌 체육복을 가진 학생(actualReserve)을 구분합니다.

  actualLost.sort((a, b) => a - b);
  actualReserve.sort((a, b) => a - b);
  // 도난당한 학생과 여벌 체육복을 가진 학생들의 번호를 오름차순으로 정렬합니다. 
  // 이로 인해 체육복을 빌려주는 과정을 순차적으로 처리할 수 있습니다.

  for (let i = 0; i < actualLost.length; i++) {
    let index = actualReserve.findIndex(reserveStudent => Math.abs(reserveStudent - actualLost[i]) === 1);
    if (index !== -1) {
      actualReserve.splice(index, 1);
    } else {
      n--;
    }
  }
  // 체육복 빌려주기: 각 도난당한 학생에 대해 여벌 체육복을 가진 학생이 있는지 확인합니다. 
  // 바로 앞번호나 뒷번호 학생에게만 체육복을 빌려줄 수 있으므로 이를 확인하여 여벌 체육복이 있는 학생이 있으면 
  // 그 학생의 번호를 actualReserve 배열에서 제거합니다. 빌려줄 수 있는 학생이 없으면 n을 하나 감소시킵니다.

  return n;
  // 최종적으로 체육수업을 들을 수 있는 학생 수를 반환합니다.
}

function solution(n, lost, reserve) {
  return n - lost.filter(a => {
      const b = reserve.find(r => Math.abs(r-a) <= 1);
      if (!b) return true;
      reserve = reserve.filter(r => r !== b);
      // lost 배열의 각 요소에 대해 filter 메서드를 사용하여 체육복을 빌릴 수 없는 학생들을 필터링합니다.
      // filter 메서드의 콜백 함수는 다음과 같습니다:
      // a: lost 배열의 각 요소(도난당한 학생 번호).
      // b: reserve 배열에서 a와 1 이하의 차이가 나는 첫 번째 요소를 찾습니다.
      // b가 없다면(즉, 빌려줄 수 있는 학생이 없다면) true를 반환하여 a를 lost 배열에 남깁니다.
      // b가 있으면(즉, 체육복을 빌려줄 수 있는 학생이 있다면) false를 반환하여 a를 lost 배열에서 제거합니다. 
      // 그리고 reserve 배열에서 b를 제거하여 중복 사용을 방지합니다.
    }).length;
    // filter 메서드로 체육복을 빌릴 수 없는 학생의 수를 계산합니다.
    // 전체 학생 수 n에서 체육복을 빌릴 수 없는 학생 수를 빼서 체육수업에 참여할 수 있는 학생 수를 반환합니다.
}




function solution(n, lost, reserve) {

  for (let i = 0; i < lost.length; i++) {
    let index = reserve.findIndex(reserveStudent => Math.abs(reserveStudent - lost[i]) <= 1);
    if (index !== -1) {
      reserve.splice(index, 1);
    } else {
      n--;
    }
  }

  return n;
}
// 이 풀이는 첫번째 풀이를 바탕으로 두번째 풀이를 보면서 조금 수정한 버전입니다.
// Math.abs(reserveStudent - actualLost[i]) === 1 에서 Math.abs(reserveStudent - actualLost[i]) <= 1로 바꾸면
// 도난당한 학생과 여벌 체육복을 가져온 학생 중복 제거하지 않고 도난당한 학생과 여벌 체육복을 가진 학생들의 번호를 오름차순으로 정렬하지 않아도 가능합니다.
// (원소들 다 정수이고 0.00같은 번호가 없기 때문에 <1의 경우에 도난당한 학생과 여벌 체육복을 가져온 학생이 같은 학생인지 알 수 있습니다)

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
