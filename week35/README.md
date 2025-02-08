# week35


## 1

### 문제 - <code>340212_퍼즐게임챌린지</code>



### 알고리즘 설계
문제의 요구사항대로 퍼즐을 제시간에 풀 수 있는지를 판별하는 canSolve 에 가능한 모든 숙련도를 이분 탐색으로 대입하여 문제를 해결한다




### 풀이 코드

```cpp
#include <vector>

#define MAX 100'000

using namespace std;

int solution(vector<int> diffs, vector<int> times, long long limit)
{
    auto canSolve = [&](int level){
        int n = diffs.size();
        long long sum = 0;
        for (int i = 0; i < n; ++i)
        {
            if (sum > limit) return false;
            
            if (diffs[i] > level)
            {
                sum += (times[i] + times[i - 1]) * (diffs[i] - level) + times[i];
                continue;
            }

            sum += times[i];
        }
    
        return sum <= limit;
    };
    
    int left = 1, right = MAX;
    int level;
    while (left <= right)
    {
        int mid = (left + right) / 2;
        if (canSolve(mid))
        {
            level = mid;
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }
    
    return level;
}
```



### 개인적인 회고와 다른 풀이

이분 탐색을 오랜만에 구현해봤네요




### 느낀 점
재밌었어요!



## 2

### 문제 - <code>250135_아날로그시계</code>



### 알고리즘 설계
주어진 두 시간 구간 사이에서 초, 분, 시 의 변화 패턴을 각각 따로 계산하여, 두 시간 구간 사이에서 변화가 동일하게 발생하는 지점을 탐색한다

- 전체 구간: `h1, m1, s1` 과 `h2, m2, s2` 를 초 단위로 환산하여 전체 반복해야 할 시간 설정
  - 초침은 1초당 1초로 환산 가능
  - 분침은 1분당 60초로 환산 가능
  - 시침은 1시간당 720초로 환산 가능
- 상태 비교: 실수 연산을 하지 않기 위해 시간 단위로 설정
  - 초침은 1초당 720 만큼 갈 수 있음 (vs. 1초당 1 만큼)
  - 분침은 720/60 = 12 만큼 갈 수 있음 (vs. 1초당 1/60 만큼)
  - 시침은 720/720 = 1 만큼 갈 수 있음(vs. 1초당 1/720 만큼)




### 풀이 코드

```cpp
#define HOUR   12 // 24시간이 아님을 주의!
#define MINUTE 60
#define SECOND 60

using namespace std;

int solution(int h1, int m1, int s1, int h2, int m2, int s2) {
    int start = h1 * MINUTE * SECOND + m1 * SECOND + s1; // '입력시간1'을 초 단위로 환산
    int end   = h2 * MINUTE * SECOND + m2 * SECOND + s2; // '입력시간2'를 초 단위로 환산
    
    int currS = s1 * HOUR * MINUTE; // '초'를 '입력 초1'을 토대로 12시간 단위로 환산한다
    int currM = (m1 * SECOND + s1) * HOUR; // '분'을 '입력 분1'을 토대로 초 단위로 환산한 후 '입력 초1'과 합한 뒤, 12시간 단위로 환산한다
    int currH = (h1 % HOUR) * MINUTE * SECOND + (m1 * SECOND + s1); // '시'를... 반복

    int cnt = 0;
    if (currS == currM || currS == currH) cnt++; // 초기 상태에서 '입력 초1'이 '입력 분1' 혹은 '입력 시1'과 겹친다면 미리 카운트

    while (start < end) // '입력시간1'이 '입력시간2'를 만나기 전까지 반복
    {
        int prevS = currS;
        int prevM = currM;
        int prevH = currH;

        currS += HOUR * MINUTE; // '초'를 12시간 단위로 하나 증가시킨다 
        currM += HOUR; // '분'을 12시간 단위로 하나 증가시킨다
        currH += 1; // '시간'을 하나 증가시킨다

        // '증가된 초'가 '증가된 분'과 겹치거나 ('이전 초'가 '이전 분'보다 작으면서 '증가된 초'가 '증가된 분' 보다 클 때) 카운트
        if (currS == currM || (prevS < prevM && currS > currM)) cnt++;
        
        // '증가된 초'가 '증가된 시'와 겹치거나 ('이전 초'가 '이전 시'보다 작으면서 '증가된 초'가 '증가된 시' 보다 클 때) 카운트
        if (currS == currH || (prevS < prevH && currS > currH)) cnt++;

        currS %= HOUR * MINUTE * SECOND; // 자료형 범위를 벗어나지 않게 나머지 연산
        currM %= HOUR * MINUTE * SECOND; // 자료형 범위를 벗어나지 않게 나머지 연산
        currH %= HOUR * MINUTE * SECOND; // 자료형 범위를 벗어나지 않게 나머지 연산

        start++;
    }

    if (h1 < HOUR && h2 >= HOUR) cnt--; // 만일 '입력 시1'이 12보다 작고 '입력 시2'가 12보다 크거나 같다면, 중복 카운트 하나를 빼준다

    return cnt;
}
```



### 개인적인 회고와 다른 풀이

처음에 단순히 시와 분을 모두 초단위로 환산하고 이를 통해 비교하는 식으로 구현했었는데, 실수 연산 때문에 원하는 대로 동작하지 않았습니다.

결국 답을 참고하여 풀이했습니다.. 정수로만 연산을 한다는 아이디어가 대단한 것 같아요!



### 느낀 점

개인적으로 풀 당시엔 어렵다고 느꼈습니다 ㅜㅜ




## 3

### 문제 - <code>178870_연속된부분수열의합</code>



### 알고리즘 설계

투포인터 기법으로 k와 일치하는 합을 지닌 연속된 부분 수열을 구한다 



### 풀이 코드

```cpp
#include <vector>
#include <utility>

#define INF 987'654'321

using namespace std;

vector<int> solution(vector<int> sequence, int k)
{
    pair<int, int> res = { 0, INF };
    int tmp = 0;
    for (int s = 0, e = 0; s < sequence.size() && e < sequence.size();)
    {
        tmp += sequence[e];
        
        while (tmp > k) tmp -= sequence[s++];
        
        if (tmp == k)
        {
            if (res.second - res.first > e - s || res.first > s)
            {
                res.first  = s;
                res.second = e;
            }
        }
        
        e++;
    }
    
    return { res.first, res.second };
}
```



### 개인적인 회고와 다른 풀이

투포인터도 문제에서 자주 나오는 것 같아요!



### 느낀 점

재밌었어요!
