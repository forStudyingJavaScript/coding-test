function solution(food) {
  // food 배열의 각 요소를 반복하여 문자열로 변환한 후, 절반의 개수만큼 반복된 문자열을 만든다.
  const foodInUse = food.map((el, i) => String(i).repeat(Math.trunc(el / 2))).join('');
  // foodInUse 문자열과 '0'을 중간에 넣고, foodInUse 문자열의 역순을 붙여서 최종 문자열을 반환한다.
  return foodInUse + '0' + [...foodInUse].reverse().join('');
}

function solution(food) {
  // 빈 문자열을 초기화하여 foodInUse 변수에 저장
  let foodInUse = '';

  // food 배열의 각 요소에 대해 반복
  food.forEach((el, i) => {
    // 인덱스를 문자열로 변환한 것을 el의 절반(내림)만큼 반복하여 foodInUse에 추가
    foodInUse += String(i).repeat(Math.floor(el / 2));
  });

  // foodInUse 문자열에 '0'을 추가하고, foodInUse를 뒤집어 다시 추가하여 반환
  return foodInUse + '0' + [...foodInUse].reverse().join('');
}

console.log(solution([1, 3, 4, 6])); //'1223330333221'
console.log(solution([1, 7, 1, 2])); //'111303111'