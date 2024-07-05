# week13

![스포방지](https://github.com/FrogBaek/coding-test/assets/95288868/83d3eebb-53ab-4033-8513-fc8ba65a8d45)

![스포방지](https://github.com/FrogBaek/coding-test/assets/95288868/83d3eebb-53ab-4033-8513-fc8ba65a8d45)

## 1

### 문제 - <code>258712_가장 많이 받은 선물</code>



### 알고리즘 설계

```cpp
/* 아이디어
    개념: 2차원 배열로 행렬 이해, 상삼각(하삼각) 행렬
    로직:
        A. 선물 기록 유무에 관해 분기
            1. 선물을 주고 받았다면, 과거 내역 비교 후 산정
                1-1. 선물을 더 줬다면, 준 사람이 받을 선물 증가
                1-2. 선물을 덜 줬다면, 받은 사람이 받을 선물 증가
            2. 선물을 주고 받지 않았다면, 선물 지수 비교 후 산정

        B. 선물 개수 최대값 산정 및 반환
*/

/* Algorithm getMostGiftsNextMonth(F, G)
    Input : String Array F, String Array G
    Output: The number of gifts a friend will receive the most gifts in the next month
    
    R ← Matrix of F.size() × F.size()
    for giver ← 0 to F.size() - 1 do
        for recipient ← 0 to F.size() - 1 do
            if giver = recipient then
                continue
            for all history ∈ G
                if F[giver] = history.split()[0] and F[recipient] = history.split()[1] then
                    R[giver][recipient] ← R[giver][recipient] + 1
    
    M ← Map, consists of a friend as the Key and gifts for next month as the Value
    for giver ← 0 to F.size() - 1 do
        for recipient ← giver to F.size() - 1 do
            if giver = recipient then
                continue
                
            giftsGiven ← R[giver][recipient]
            giftsReceived ← R[recipient][giver]
            
            if giftsGiven > giftsReceived then
                friendGiven ← F[giver]
                M[friendGiven] ← M[friend] + 1
            else if giftsGiven > giftsReceived then
                friendReceived ← F[recipient]
                M[friendReceived] ← M[firend] + 1
            else
                giverGiftScore ← 0
                recipientGiftScore ← 0
                
                for i ← 0 to F.size() - 1 do
                    giverGiftScore ← giverGiftScore + R[giver][i]
                    giverGiftScore ← giverGiftScore - R[i][giver]
                    recipientGiftScore ← recipientGiftScore + R[recipient][i]
                    recipientGiftScore ← recipientGiftScore - R[i][recipient]
                    
                if giverGiftScore > recipientGiftScore
                    friendGiven ← F[giver]
                    M[friendGiven] ← M[friend] + 1
                else if giverGiftScore < recipientGiftScore
                    friendReceived ← F[recipient]
                    M[friendReceived] ← M[firend] + 1
    
    MaxGifts ← 0
    for all pair ∈ M
        if pair.second > MaxGifts then
            MaxGifts ← pair.second
                    
    return MaxGifts
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <unordered_map>

#define GIVER 0 // 문자열 분리 시, 공백을 기준으로 앞
#define RECIPIENT 1 // 문자열 분리 시, 공백을 기준으로 뒤

using namespace std;

vector<string> split(const string &str)
{
    vector<string> result;
    int start = 0;
    int end = str.find(' ');
    
    while (string::npos != end)
    {
        result.push_back(str.substr(start, end - start));
        start = end + 1;
        end = str.find(' ', start);
    }
    result.push_back(str.substr(start));
    
    return result;
}

int solution(vector<string> friends, vector<string> gifts)
{
    int n = friends.size();
    vector<vector<int>> matrix(n, vector<int>(n, 0));

    // 1. 선물 기록을 토대로 점수표를 만들어준다
    for (int r = 0; r < n; ++r)
    {
        for (int c = 0; c < n; ++c)
        {
            if (r == c) continue; // 자기 자신 생략
            
            for (const auto& h : gifts)
            {
                vector<string> f = split(h);
                
                if (f[GIVER] == friends[r] && f[RECIPIENT] == friends[c])
                    matrix[r][c]++;
            }
        }
    }

    // 2. 선물 기록 혹은 선물 지수를 통해 다음달 받을 선물 수를 각 사람에 따라 산정한다
    unordered_map<string, int> nextGifts;
    for (int r = 0; r < n; ++r)
    {
        for (int c = r; c < n; ++c) // 상삼각 행렬
        {
            if (r == c) continue; // 자기 자신 생략
            
            int giftsGiven = matrix[r][c];
            int giftsReceived = matrix[c][r];

            // 2-1. 선물 기록을 통해 준 사람 혹은 받은 사람의 점수를 산정한다
            if (giftsGiven > giftsReceived)
                nextGifts[friends[r]]++;
            else if (giftsGiven < giftsReceived)
                nextGifts[friends[c]]++;
            else
            {
                int giverGiftScore = 0;
                int recipientGiftScore = 0;
                
                for (int i = 0; i < n; ++i)
                {
                    // 선물지수_g = sum(row_giver) - sum(col_giver)
                    giverGiftScore += matrix[r][i] - matrix[i][r];
                    // 선물지수_r = sum(row_recipient) - sum(col_recipient)
                    recipientGiftScore += matrix[c][i] - matrix[i][c];
                }

                // 2-2. 선물 지수를 통해 준 사람 혹은 받은 사람의 점수를 산정한다
                if (giverGiftScore > recipientGiftScore)
                    nextGifts[friends[r]]++;
                else if (giverGiftScore < recipientGiftScore)
                    nextGifts[friends[c]]++;
            }
        }
    }

    // 3. 산정물을 토대로 다음달 선물을 가장 많이 받을 친구(Key)의 받을 선물(Value)를 찾아서 반환
    int maxGifts = 0;
    for (const auto& pair : nextGifts)
        maxGifts = max(pair.second, maxGifts);

    return maxGifts;
}
```

### 개인적인 회고와 다른 풀이

구현 문제의 대표적인 사례인 것 같습니다! 단계는 크게 3개로 나누어 구현을 했습니다.
1. 선물 기록을 토대로 점수표를 만들어준다
2. 선물 기록 혹은 선물 지수를 통해 다음달 받을 선물 수를 각 사람에 따라 산정한다
3. 산정물을 토대로 다음달 선물을 가장 많이 받을 친구(Key)의 받을 선물(Value)를 찾아서 반환

그리고 개념적으로는 각 행의 합 혹은 열의 합과 상삼각(하삼각) 행렬만을 염두에 두고 구현을 시작했습니다.
C++에는 없는 split 함수를 구현해서 써보는 경험도 좋았습니다!!

다른 풀이 대신에 의사코드로 "다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수"를 작성해봤습니다.


### 느낀 점
만약 당장 실전에서 제한시간 내에 풀으라면.. 구현 시간이 부족했을 것 같습니다 ㅠ 아이디어와 알고리즘의 흐름은 이해하고 이를 구현하는데 시간이 촉박했다는 이유 등으로 부분 구현만 했을 것 같네요..! 그래서 앞으로 더더욱 구현을 빠르게 할 수 있도록 연습해야할 것 같습니다!!



## 2

### 문제 - <code>42862_체육복</code>

### 알고리즘 설계

```cpp
/* flow(처음)
    1.  정렬을 통해 여유분의 체육복을 앞 또는 뒤 학생에게 최대한 빌려줄 수 있는 환경을 만든다
    2.  여유분의 체육복을 갖고 있는 학생이 체육복이 없는 앞 또는 뒤 학생에게 체육복을 빌려준다
    2-1.만일 여유분이 있지만 도난당했다면, 해당 학생은 무시한다. -> 이 부분은 틀린 게 아니지만 제가 구현을 잘못했었습니다
    3.  체육복을 입을 수 있는 최대 학생 수를 반환한다.
*/

/* flow(나중)
    1.   lost와 reserve에 중복되는 학생을 처음부터 제외시킴으로써 문제를 단순화한다
    2.   정렬을 통해 여유분의 체육복을 앞 또는 뒤 학생에게 최대한 빌려줄 수 있는 환경을 만든다
    3.   여유분의 체육복을 갖고 있는 학생이 체육복이 없는 앞 또는 뒤 학생에게 체육복을 빌려준다
    4.   체육복을 입을 수 있는 최대 학생 수를 반환한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <algorithm>

#define FRONT -1
#define REAR 1
#define BORROWED -1

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve)
{
    // 1. lost와 reserve에 중복되는 학생을 처음부터 제외시킴으로써 문제를 단순화한다
    for (auto it = lost.begin(); it != lost.end(); )
    {
        auto pos = find(reserve.begin(), reserve.end(), *it);
        if (pos == reserve.end())
        {
            ++it;
            continue;
        }
        
        reserve.erase(pos);
        it = lost.erase(it);
    }
    
    int ans = n - lost.size(); // 기본적으로 체육복을 가지고 있는 학생의 수부터 시작
    
    // 2. 정렬을 통해 여유분의 체육복을 앞 또는 뒤 학생에게 최대한 빌려줄 수 있는 환경을 만든다
    sort(lost.begin(), lost.end());
    sort(reserve.begin(), reserve.end());
    
    // 3. 여유분의 체육복을 갖고 있는 학생이 체육복이 없는 앞 또는 뒤 학생에게 체육복을 빌려준다
    for (int i = 0; i < lost.size(); ++i)
    {
        for (int j = 0; j < reserve.size(); ++j)
        {
            // 만일 여유분의 체육복을 빌려줬다는 표시가 있다면 생략
            if (reserve[j] == BORROWED) continue;
            
            // 그렇지 않고, 여유분의 체육복을 빌려줄 수 있다면 빌려주고 빌려줬다고 표시
            if (reserve[j] + FRONT == lost[i] || reserve[j] + REAR == lost[i])
            {
                reserve[j] = BORROWED;
                ans++;
                break; // 체육복을 잃어버린 학생이 체육복을 이미 빌리고 또 다른 체육복을 빌리면 안되므로 마찬가지로 건너뛰기
            }
        }
    }
    
    // 4. 체육복을 입을 수 있는 최대 학생 수를 반환한다
    return ans;
}
```

### 개인적인 회고와 다른 풀이

처음에는 중복에 대한 처리로써 **중복을 제거하지 않고** <code>// 3. 여유분의 ...</code>의 로직에서 내부 for문의 조건문으로 아래와 같이 추가했었습니다.

```cpp
...
    for (int j = 0; j < reserve.size(); ++j)
        {
            if (reserve[j] == lost[i]) continue; // 기존 중복 처리 코드
        
        	if (reserve[j] == BORROWED) continue;
            
            if (reserve[j] + FRONT == lost[i] || reserve[j] + REAR == lost[i])
            {
                reserve[j] = BORROWED;
                ans++;
                break;
            }
        }
```

하지만 이렇게 하고 제출을 하니 틀린 케이스가 나오게 돼서 생각을 해봤는데,

만일 lost = [2, 3, 5], reserve = [2, 3, 4] 인 경우

정상적인 경우라면, 2번과 3번 학생은 **여유분의 체육복을 챙겼으나 도난당했으므로 애초에 누군가에게 빌려주면 안되는 상황**으로 인지해야합니다.

하지만 위의 코드로는 2번 학생의 경우엔 잘 넘어갔으나, 3번 학생이 **빌려주면 안되는 상황임에도 2번에게 빌려주는 상황**이 발생하게 됩니다.

물론 이를 별도로 처리하는 로직을 또 구현할 수 있으나, 저는 애초에 처음부터 문제의 단순화를 위해 중복을 제거하는 전략을 짰습니다!



그리고 아래는 다른 분의 풀이를 보고 몇 가지만 수정하고 작성한 코드입니다.

~~~cpp
#include <string>
#include <vector>

#define MAX_STUDENTS 30
#define FRONT -1
#define REAR 1
#define RESERVE 1
#define LOST -1
#define OWNED 0

using namespace std;

int student[MAX_STUDENTS] = { OWNED, };

int solution(int n, vector<int> lost, vector<int> reserve)
{
    for (int i : reserve) student[i] += RESERVE;
    for (int i : lost) student[i] += LOST;
    
    for(int i = 1; i <= n; i++)
    {
        if (student[i] == LOST)
        {
            if (student[i + FRONT] == RESERVE) 
                student[i + FRONT] = student[i] = OWNED;
            else if (student[i + REAR] == RESERVE) 
                student[i + REAR] = student[i] = OWNED;
        }
    }
    
    int ans = 0;
    for(int i = 1; i <= n; ++i)
        if (student[i] != LOST) ans++;

    return ans;
}
~~~

이 풀이를 보고 상당히 감명깊었습니다!! 

RESERVE, LOST, OWNED 등의 추가적인 마킹을 사용하고 학생을 모두 **체육복이 있다는 전제**부터 논리를 시작하니 훨씬 간결하고 가독성도 좋아 보였습니다!!

생각의 전환이 돋보였던 풀이인 것 같습니다😲😲



### 느낀 점

다음부턴 전제 자체를 창의적으로 생각해보면 좋을 것 같습니다. 이를 위해 역시 많은 문제를 풀어보고 훈련을 해야겠다고 느꼈습니다!




## 3

### 문제 - <code>12982_예산</code>

### 알고리즘 설계

```cpp
/* flow
    1. 최대한 많은 부서의 예산 요청 금액을 순차적으로 총 예산에서 차감할 수 있도록 오름차순 정렬을 한다
    2. 정렬된 부서 예산 요청 금액을 총 예산에서 차감하면서 최대값을 구한다
    3. 예산 요청을 들어줄 수 있는 부서의 최대 개수를 반환한다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> d, int budget)
{
    // 1. 최대한 많은 부서의 예산 요청 금액을 순차적으로 총 예산에서 차감할 수 있도록 오름차순 정렬을 한다
    sort(d.begin(), d.end());
   
    // 2. 정렬된 부서 예산 요청 금액을 총 예산에서 차감하면서 최대값을 구한다
    int ans = 0;
    for (int req : d)
    {
        if (budget - req < 0) break;
        
        budget -= req;
        ans++; // 예산 투입 가능 부서 수 증가
    }
        
    // 3. 예산 요청을 들어줄 수 있는 부서의 최대 개수를 반환한다
    return ans;
}
```

### 개인적인 회고와 다른 풀이

처음에 구현부터 해보고자 경우의 수에 대해 생각을 했습니다. 첫 번째 부서, 두 번째 부서... 의 요청 예산 금액을 일일이 다 고려하다보니 너무 경우의 수가 많아지는 것 같아서 구조적으로 다시 생각을 해봤습니다.

그러다 문득 문제에서 요구하는 사항이 **예산 범위 내에서 요청을 들어줄 수 있는 부서의 최대 수**임을 다시 확인하게 되었고, 이를 토대로 최대값을 구하는 방법에 대해 생각했습니다.

최대값이 되려면 부서의 요청 예산 금액을 작은 값부터 큰 순으로, 즉 오름차순으로 정리해서 총 예산에서 앞에서부터 차감해가면 되겠다는 아이디어가 떠올랐고, 이를 토대로 구현을 했습니다!

다른 풀이도 제가 푼 것과 비슷해서 생략하겠습니다!




### 느낀 점

이 문제를 풀면서 무엇보다 아이디어의 중요성을 다시금 깨닫게 되었습니다! 문제에서 요구하는 사항을 파악하고 이에 중점을 두고 문제를 풀어나가는 것이 핵심인 듯 합니다!!
