function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5; //캐시 크기가 0이면 모든 요청이 캐시 미스

  let cache = [];
  let totalTime = 0;

  cities.forEach(city => {
      city = city.toLowerCase();

      //캐시 히트
      if (cache.includes(city)) {
          //해당 도시를 삭제하고 가장 최근 위치로 이동
          cache = cache.filter(c => c !== city);
          cache.push(city);
          totalTime += 1;  // 캐시 히트 시간
      } 
      //캐시 미스
      else {
          if (cache.length >= cacheSize) {
              cache.shift();  //가장 오래된 도시 제거
          }
          cache.push(city);   //새 도시 추가
          totalTime += 5;     //캐시 미스 시간
      }
  });

  return totalTime;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); 
//50

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])); 
//21

console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); 
//60

console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); 
//52

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); 
//16

console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); 
//25
