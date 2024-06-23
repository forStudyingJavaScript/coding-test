## 1

### 문제 - <code>성격 유형 검사하기</code>

### 알고리즘 설계

이문제는 어려워서 지피티의 도움을 받았다 

### 풀이 코드

```
function solution(survey, choices) {
    let result = '';
    
    // 성격 유형 점수를 저장할 객체
    let scores = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };
    
    // 각 선택지에 대한 점수
    let scoreMap = [3, 2, 1, 0, 1, 2, 3];
    
    // 설문 조사 결과를 바탕으로 점수 계산
    for (let i = 0; i < survey.length; i++) {
        let type = survey[i];
        let choice = choices[i];
        
        if (choice < 4) {
            scores[type[0]] += scoreMap[choice - 1];
        } else if (choice > 4) {
            scores[type[1]] += scoreMap[choice - 1];
        }
    }
    
    // 최종 성격 유형 계산
    result += scores['R'] >= scores['T'] ? 'R' : 'T';
    result += scores['C'] >= scores['F'] ? 'C' : 'F';
    result += scores['J'] >= scores['M'] ? 'J' : 'M';
    result += scores['A'] >= scores['N'] ? 'A' : 'N';
    
    return result;
}


```

### 개인적인 회고와 다른 풀이
이 문제는 어려워서 풀이를 암기해야할 생각입니다.


### 느낀 점

2번 문제의 심화버전인 느낌이 들었다 이런 유형에 약하단 것을 발견했고 대비할 것이다.

## 2

### 문제 - <code>추억 점수</code>

### 알고리즘 설계



### 풀이 코드

```
function solution(name, yearning, photo) {
  let result = []; // 결과를 저장할 배열
  
  // name과 yearning을 매핑한 객체 생성
  let yearningMap = {}; // 이름을 키로, 갈망 점수를 값으로 하는 객체
  for (let i = 0; i < name.length; i++) {
      yearningMap[name[i]] = yearning[i]; // 각 이름에 해당하는 갈망 점수를 매핑
  }
  console.log(yearningMap)
  // photo 배열을 순회하며 결과 계산
  for (let i = 0; i < photo.length; i++) {
      let tmp = 0; // 각 사진에 대한 총 갈망 점수를 저장할 임시 변수
      for (let j = 0; j < photo[i].length; j++) {
          if (yearningMap[photo[i][j]] !== undefined) { // 현재 이름이 yearningMap에 존재하는지 확인
              tmp += yearningMap[photo[i][j]]; // 존재하면 해당 갈망 점수를 더함
          }
      }
      result.push(tmp); // 각 사진에 대한 총 갈망 점수를 결과 배열에 추가
  }
  
  return result; // 최종 결과 반환
}
```

### 개인적인 회고와 다른 풀이

map을 이용한 풀이도 좋은 거 같다

### 느낀 점

맵을 사용해서 할까 아니면 그냥 for문을 써서 할까 고민했는데 맵 사용이 아직 익숙하지 않아서 for문을 활용한 풀이로 접근했다. map 사용도 해봐야겠다
