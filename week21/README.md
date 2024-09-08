# week21

## 1

### 문제 - <code>43165_타겟넘버</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	모든 수가 +, -인 경우와 그로 인해 생길 수 있는 조합을 모두 따져보기 어려우므로 완전탐색 기법으로 문제에서 요구하는 경우를 센다.
*/
```



### 풀이 코드

```cpp
#include <vector>

using namespace std;

int cnt = 0;

void calc(const vector<int>& numbers, int target, int acc = 0, int i = 0)
{
    if (i == numbers.size())
    {
        if (acc == target) cnt++;
        return;
    }
    
    calc(numbers, target, acc + numbers[i], i + 1);
    calc(numbers, target, acc - numbers[i], i + 1);
}

int solution(vector<int> numbers, int target)
{
    calc(numbers, target);
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

완전탐색은 흔히 DFS와 스택, 그리고 재귀로 풀이합니다! 전 그 중에서 재귀를 활용하여 문제를 풀어봤습니다😁




### 느낀 점
스택 자료구조를 직접 사용하지 않고 재귀로 푸는 것에 대한 편리함을 다시 한 번 느꼈습니다😄



## 2

### 문제 - <code>1844_게임맵최단거리</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	BFS를 활용하여, 벽이 아닌 곳으로 위치를 이동해가며 최단거리를 구한다.
	방향을 정의해줌으로써 코드의 복잡성을 낮춘다.
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <queue>

using namespace std;

int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

int solution(vector<vector<int>> maps)
{
    int n = maps.size();
    int m = maps[0].size();
    
    queue<pair<int, int>> q;
    q.push({0, 0});
    
    while (!q.empty())
    {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        for (int i = 0; i < 4; ++i)
        {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] == 1)
            {
                maps[nx][ny] = maps[x][y] + 1;
                q.push({ nx, ny });
            }
        }
    }
    
    return maps[n - 1][m - 1] > 1 ? maps[n - 1][m - 1] : -1;
}
```



### 개인적인 회고와 다른 풀이

예전에 저희가 방향과 관련하여 풀었던 문제에서 다른 분들께서 사용하신 **방향을 정의**하는 방법이 떠올라서 이번 풀이에서만큼은 적용시켜봤습니다!!

그리고 이 풀이에서는 방문 여부를 별도의 체크 없이, 지나온 경로의 값을 직접 변경하는 식으로 구현했습니다🙃



### 느낀 점

길찾기 문제는 언제봐도 재밌는 것 같습니다!




## 3

### 문제 - <code>42626_더맵게</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	우선순위큐를 사용하여 문제에서 요구한 동작을 그대로 구현한다.
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> sc, int K)
{
    priority_queue<int, vector<int>, greater<int>> pq(sc.begin(), sc.end());
    
    int count = 0;
    while (pq.top() < K)
    {
        if (pq.size() < 2) return -1;
        
        int leastHot = pq.top();
        pq.pop();
        
        pq.push(leastHot + pq.top() * 2);
        pq.pop();
        
        count++;
    }
    
    return count;
}
```



### 개인적인 회고와 다른 풀이

문제에서 원하는 그대로 구현만 하면 되는 문제였습니다!

아래는 저번 주에 승훈님께서 발표해주신 힙정렬을 토대로 우선순위큐의 내부 동작을 활용하여 푼 풀이입니다🫡

최소힙을 만들어준 후, 문제에서 요구한 동작을 그대로 구현해주며 계속 최소힙을 유지시켜주는 코드입니다.

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int mix(vector<int>& sc, int K, int acc = 0)
{
    if (sc.front() >= K) return acc;
    if (sc.size() < 2) return -1;
    
    int f1 = sc.front();
    pop_heap(sc.begin(), sc.end(), greater<>());
    sc.pop_back();
    
    int f2 = sc.front();
    pop_heap(sc.begin(), sc.end(), greater<>());
    sc.pop_back();
    
    sc.push_back(f1 + f2 * 2);
    push_heap(sc.begin(), sc.end(), greater<>());
    
    return mix(sc, K, acc + 1);
}

int solution(vector<int> scoville, int K)
{
    make_heap(scoville.begin(), scoville.end(), greater<>());
    
    return mix(scoville, K);
}
```




### 느낀 점

덕분에 c++에서 제공해주는 heap 관련 함수들을 알 수 있어서 좋았습니다😄



## 4

### 문제 - <code>42842_카펫</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	총 타일 개수   = brown + yellow
	brown의 개수  = 2 * 가로 + 2 * 세로 - 4(모서리)
	yellow의 개수 = (가로 - 2) * (세로 - 2)
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

int W, H;

void calc(int area, int brown, int yellow, int height, int width)
{
    if (height > width) return;
    
    if (brown == 2 * width + 2 * height - 4 && yellow == (width - 2) * (height - 2))
    {
        W = width;
        H = height;
        return;
    }
        
    calc(area, brown, yellow, height + 1, area / (height + 1));
}

vector<int> solution(int brown, int yellow)
{
    int area = brown + yellow;
    calc(area, brown, yellow, 1, area / 1);
    
    return { W, H };
}
```



### 개인적인 회고와 다른 풀이

사실 다른 것보다도 brown과 yellow의 개수의 수식을 세울 수 있었다면 탐색과 무관하게 풀 수 있는 문제였던 것 같습니다!

이번 문제 역시 전역 변수를 사용하여 풀이했습니다.




### 느낀 점

수식에만 집중해서 그런지 코드의 가독성이 마냥 좋아보이지는 않아보이네요😢



## 5

### 문제 - <code>42583_다리를지나는트럭</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	큐에 해당 트럭의 무게와 다리를 지나는 시점을 함께 기록한다.
	이를 활용하여 모든 트럭들을 순회하며 시간을 계산한다.
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <queue>

using namespace std;

int solution(int b_length, int weight, vector<int> t_weights)
{
    queue<pair<int, int>> q;
    int time = 0;
    int cur_weight = 0;
    
    for (int t : t_weights)
    {
        while (true)
        {
            time++;
            
            if (!q.empty() && q.front().second == time)
            {
                cur_weight -= q.front().first;
                q.pop();
            }
            
            if (cur_weight + t <= weight)
            {
                cur_weight += t;
                q.push({ t, time + b_length });
                break;
            }
        }
    }
    
    return time + b_length;
}
```



### 개인적인 회고와 다른 풀이

어떻게 해야 순회하면서 time을 별도로 증가시킬 수 있는지에 대해 많이 헤맸던 문제였습니다.

고민하던 중, 무한 루프를 돌면서 특정 조건일 경우 빠져나오는 식으로 구현하면 되겠다는 아이디어가 떠올라서 이를 토대로 구현했습니다!



### 느낀 점

아이디어가 떠오르질 않아, 개인적으로 7문제 중에서 가장 어렵다고 느껴졌습니다😭




## 6

### 문제 - <code>43162_네트워크</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	서로 탐색가능한 컴퓨터들은 하나의 네트워크로 본다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

void dfs(vector<vector<int>>& c, int x, vector<bool>& v)
{
    if (v[x]) return;
    
    v[x] = true;
    
    for (int i = 0; i < c[x].size(); ++i)
        if (c[x][i] == 1 && !v[i])
            dfs(c, i, v);
}

int solution(int n, vector<vector<int>> computers)
{
    vector<bool> visited(n, false);
    int networks = 0;
    
    for (int i = 0; i < n; ++i)
        if (!visited[i])
        {
            dfs(computers, i, visited);
            networks++;
        }
    
    return networks;
}
```



### 개인적인 회고와 다른 풀이

처음에 네트워크를 어떻게 정의해야할지 고민했습니다.

하지만 방문 여부를 토대로 컴퓨터의 개수만큼 순회하면서 탐색을 한다면, 그 결과 자체가 네트워크의 개수가 될 것이라 생각하고 구현했습니다🫨




### 느낀 점

그래프 탐색으로 네트워크를 파악할 수 있다고 들었는데, 직접 문제로 마주치니까 신기하네요!!



## 7

### 문제 - <code>43163_단어변환</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	문제에서 요구한대로 구현한다.
	단, 다른 단어로 이동할 수 있는 조건을 정의해준다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <queue>

using namespace std;

bool canChange(string w1, string w2)
{
    int diffCnt = 0;
    for (int i = 0; i < w1.size(); ++i)
    {
        if (w1[i] != w2[i]) diffCnt++;
        if (diffCnt > 1) return false;
    }
    
    return true;
}

int solution(string begin, string target, vector<string> words)
{
    queue<pair<string, int>> q;
    vector<bool> v(words.size(), false);
    
    q.push({ begin, 0 });
    while (!q.empty())
    {
        string curWord = q.front().first;
        int steps = q.front().second;
        
        q.pop();
        
        if (curWord == target) return steps;
        
        for (int i = 0; i < words.size(); ++i)
        {
            if (!v[i] && canChange(curWord, words[i]))
            {
                v[i] = true;
                q.push({ words[i], steps + 1 });
            }
        }
    }
        
    return 0;
}
```



### 개인적인 회고와 다른 풀이

계속 기본 자료형의 2차원 배열(행렬)만 보다가 string 형의 배열(행렬)을 보니까 처음엔 당황스러웠습니다.

하지만 오히려 다른 탐색 문제들보다 더 간단히 풀이할 수 있습니다!

왜냐하면 다른 문제들은 행렬의 **열** 부분을 가지고 풀이하는 반면, 이 문제는 **행** 을 탐색하면 되기 때문입니다😀

그리고 다른 단어로 이동할 수 있는 조건을 정의해주는 식으로 풀이를 했습니다.




### 느낀 점

DFS, BFS 문제들은 서로 비슷한 느낌이 없잖아 있는 것 같아요!!



