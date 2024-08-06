# week17

## 1

### 문제 - <code>42840_모의고사</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	수포자 1, 2, 3의 패턴을 가지고 주어진 answers과 모두 비교하여 가장 많이 정답을 맞힌 수포자를 선별한다.(같으면 오름차순)
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <algorithm>

#define SIZE(s) (sizeof(s) / sizeof(s[0]))

#define S1 0
#define S2 1
#define S3 2

using namespace std;

int calcScore(const vector<int>& answers, const int* s, int size, int i = 0)
{
    if (i == answers.size()) return 0;
    
    return (answers[i] == s[i % size]) + calcScore(answers, s, size, i + 1);
}

vector<int> solution(const vector<int> answers)
{
    const int s1[] = { 1, 2, 3, 4, 5 };
    const int s2[] = { 2, 1, 2, 3, 2, 4, 2, 5 };
    const int s3[] = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };

    int scores[] = {
        calcScore(answers, s1, SIZE(s1)),
        calcScore(answers, s2, SIZE(s2)),
        calcScore(answers, s3, SIZE(s3))
    };

    int highScore = max({scores[S1], scores[S2], scores[S3]});
    
    vector<int> ans;
    for (int i = 0; i < SIZE(scores); ++i)
        if (scores[i] == highScore)
            ans.push_back(i + 1);

    return ans;
}
```

### 개인적인 회고와 다른 풀이

answers를 순회하면서 각각의 수포자 패턴에 해당하는지 확인해야 하기에, 이를 푸는 방법 중 하나인 스택을 활용해서 재귀 함수로 풀이했습니다!


### 느낀 점
같은 max 함수라도 어떤 라이브러리를 사용하는지에 따라 파라미터가 달라진다는 것을 체감했습니다🫨





## 2

### 문제 - <code>172928_공원산책</code>

### 알고리즘 설계

```cpp
/* flow:
	1. 시작점 'S'를 찾고, 이를 기점으로 삼는다.
	2. routes를 순회한다.
	2-1. 만일 route가 공원 밖을 벗어난다면, 다음 route로 넘어간다.
	2-2. 만일 route가 장애물을 만난다면, 다음 route로 넘어간다.
	2-3. 그게 아니라면 해당 route를 이동한 다음, 이를 기점으로 삼는다.
	3. 도착 지점(순회 완료한 기점)을 반환한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<string> park, vector<string> routes)
{
    int r, c;
    [&](){
        for (r = 0; r < park.size(); ++r)
            for (c = 0; c < park[r].length(); ++c)
                if (park[r][c] == 'S') return;
    }();
    
    for (const string& route : routes)
    {
        char direction = route[0];
        int offset = route[2] - '0';
        int nr = r, nc = c;
        
        switch (direction)
        {
            case 'N': nr = r - offset; break;
            case 'S': nr = r + offset; break;
            case 'W': nc = c - offset; break;
            case 'E': nc = c + offset; break;
        }

        if (nr < 0 || nr > park.size() - 1 || nc < 0 || nc > park[0].length() - 1) continue;
        
        bool isBlocked = false;
        for (int i = 1; i <= offset && !isBlocked; ++i)
        {
            switch (direction)
            {
                case 'N': isBlocked = park[r - i][c] == 'X'; break;
                case 'S': isBlocked = park[r + i][c] == 'X'; break;
                case 'W': isBlocked = park[r][c - i] == 'X'; break;
                case 'E': isBlocked = park[r][c + i] == 'X'; break;
            }
        }
        
        if (isBlocked) continue;
        
        r = nr;
        c = nc;
    }
    
    return {r, c};
}
```

### 개인적인 회고와 다른 풀이

처음에 시작점을 찾는 로직에서 람다 함수를 사용하지 않고 구현을 했었습니다. 하지만 이중 for문에서 break로 탈출하려면 이를 두 번 써줘야 하거나, 조건식에 추가로 표현식을 만들어줘야 한다는 번거로움이 존재해서 람다 함수를 통해 깔끔하게 구현했습니다😁

### 느낀 점

 switch-case 문을 통해 방향을 구분하는 로직으로 구현했는데, 더 깔끔한 방법이 있는지 궁금하네요😭




## 3

### 문제 - <code>250137_붕대감기</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	주어진 논리대로 코드를 구현한다. 단, 체력 회복이 최대 체력을 넘어갈 수 없으므로 이를 유의하여 처리한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> bandage, int health, vector<vector<int>> attacks)
{
    const int t = bandage[0];
    const int x = bandage[1];
    const int y = bandage[2];
    
    int ans = health;
    int acc = 0;
    for (int i = 1, j = 0; i <= attacks.back().front(); ++i)
    {
        if (ans <= 0) break;
        
        if (i == attacks[j][0]) 
        {
            acc = 0;
            ans -= attacks[j++][1];
            continue;
        }
        
        acc++;
        ans = (ans + x > health) ? health : ans + x;
        
        if (acc != t) continue;
        
        ans = (ans + y > health) ? health : ans + y;
        acc = 0;
    }
    
    return ans <= 0 ? -1 : ans;
}
```



### 개인적인 회고와 다른 풀이

구현 순서 혹은 방법은 문제에 제시된 대로 구현하면 되는 문제였습니다. 하지만 체력 회복이 최대 체력을 넘길 수 없다는 점에 유의해서 코드를 구현해야 했습니다🙃



아래는 다른 분의 풀이를 약간 변형해서 가져온 코드입니다.

attacks를 순회하면서 현재 시간(time)과 attack 시점의 시간(dTime)을 활용하여 회복량과 추가 회복량을 산정해주고, 그 다음 데미지를 산정하는 것이 주요 핵심입니다. 무엇보다 **attack 시점의 시간과 현재 시간의 차에서 1을 뺀 것을 기준으로 한다** 라는 점과 **회복을 한 다음 데미지를 입는다** 는 것을 유의하면 좋을 것 같습니다😀

```cpp
#include <string>
#include <vector>

#define T 0
#define X 1
#define Y 2

using namespace std;

int solution(vector<int> bandage, int health, vector<vector<int>> attacks)
{
    int ans = health;
    int time = 0;
    for (const auto& attack : attacks)
    {
        int dTime = attack[0];
        int damage = attack[1];
        int diff = dTime - time - 1;
        
        ans += diff * bandage[X] + diff / bandage[T] * bandage[Y];
        ans = (ans > health) ? health : ans;
        
        ans -= damage;
        time = dTime;
        
        if (ans <= 0) break;
    }
    
    return ans <= 0 ? -1 : ans;
}
```




### 느낀 점

사실 설명 그대로 구현하기 전에 다른 분의 풀이처럼 회복과 데미지를 입는 것을 일반화하고 싶었는데, 처음부터 잘 떠오르지 않아 그대로 구현하게 됐습니다😭 이번 문제를 풀면서 사고가 확장되는 것 같아 좋은 것 같습니다!!

