# week27


## 1

### 문제 - <code>132265_롤케이크자르기</code>



### 알고리즘 설계
2개의 맵을 사용해서 토핑을 두 구간으로 나누어 토핑의 종류를 비교하는 식으로 구현했습니다




### 풀이 코드

```cpp
#include <vector>
#include <unordered_map>

using namespace std;

int solution(vector<int> topping)
{
    unordered_map<int, int> d2;
    for (auto& t : topping) d2[t]++;
    
    int cnt = 0;
    unordered_map<int, int> d1;
    for (auto& t : topping)
    {
        d1[t]++;
        d2[t]--;
        
        if (d2[t] == 0) d2.erase(t);
        
        if (d1.size() == d2.size()) cnt++;
    }
    
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

처음엔 아이디어가 바로 떠오르지 않았지만, 생각해보니 투 포인터와 비슷한 개념으로 접근하니 풀 수 있었습니다!




### 느낀 점
이런 문제를 처음 접해서 재밌었어요



## 2

### 문제 - <code>12952_N-Queens</code>



### 알고리즘 설계
백트래킹을 활용하여 n개의 퀸을 놓을 수 있는 경우의 수를 구한다




### 풀이 코드

```cpp
#include <functional>
#include <algorithm>

#define MAX 12

using namespace std;

int solution(int n)
{
    int q[MAX] = { 0, };
    int res = 0;
    
    auto canPlaceQueen = [&](int k, int c){
        for (int i = 0; i < k; ++i)
            if (q[i] == c || abs(q[i] - c) == abs(i - k))
                return false;
        
        return true;
    };

    function<void(int)> Nqueens = [&](int k){
        if (k >= n)
        {
            res++;
            return;
        }
        
        for (int c = 0; c < n; ++c)
            if (canPlaceQueen(k, c))
            {
                q[k] = c;
                Nqueens(k + 1);
            }
    };

    Nqueens(0);
    
    return res;
}
```



### 개인적인 회고와 다른 풀이

천산님 발표를 토대로 대각선, 행, 열을 비교해 가면서 퀸을 놓을 수 있는 지 검증하고 퀸을 놓는 순으로 구현했습니다!



### 느낀 점

백트래킹 알고리즘 자체가 굉장히 흥미로운 것 같아요




## 3

### 문제 - <code>42626_더맵게</code>



### 알고리즘 설계

우선순위 큐(또는 힙)를 사용하여 문제의 요구 사항대로 구현한다



### 풀이 코드

```cpp
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> sc, int K)
{
    priority_queue<int, vector<int>, greater<int>> pq(sc.begin(), sc.end());
    int cnt = 0;
    while (pq.top() < K)
    {
        if (pq.size() < 2) return -1;
        
        int t = pq.top();
        pq.pop();
        
        pq.push(t + pq.top() * 2);
        pq.pop();
        
        cnt++;
    }
    
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

예전에 풀었던 거 바로 지우고 다시 풀어봤습니다! 변수명만 제외하고 동일한 풀이가 됐습니다



### 느낀 점

우선순위 큐는 잊을 만하면 나오는 것 같아요!
