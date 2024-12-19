# week32


## 1

### 문제 - <code>42584_주식가격</code>



### 알고리즘 설계
문제의 요구사항대로 각 주식 가격이 떨어지지 않은 기간을 산정하여 반환하는 식으로 설계했습니다




### 풀이 코드

```cpp
#include <vector>

#define MAX 100'000

using namespace std;

vector<int> solution(vector<int> prices)
{
    int ans[MAX];
    int n = prices.size();
    for (int i = 0; i < n; ++i)
    {
        int cnt = 0;
        for (int j = i + 1; j < n; ++j)
        {
            cnt++;
            if (prices[i] > prices[j]) break;
        }
        ans[i] = cnt;
    }
    
    return vector<int>(ans, ans + n);
}
```



### 개인적인 회고와 다른 풀이

버블정렬을 변형한 풀이라고 생각하면 편할 것 같아요!




### 느낀 점
주식 문제들은 항상 자리를 고정시켜놓은 채로 풀어야하는 경우가 많네요



## 2

### 문제 - <code>340211_충돌위험찾기</code>



### 알고리즘 설계
dfs를 활용하여 문제에서 정의한 대로 로봇을 정해진 경로로 이동을 시키고, 이 때 로봇들이 서로 충돌하는 횟수를 세어 반환한다




### 풀이 코드

```cpp
#include <vector>
#include <queue>
#include <map>
#include <tuple>

using namespace std;

int solution(vector<vector<int>> points, vector<vector<int>> routes)
{
    int collisions = 0;
    map<tuple<int, int, int>, int> visited;
    auto bfs = [&](int sr, int sc, int er, int ec, int st){
        queue<tuple<int, int, int>> q;
        auto moveRobot = [&](int r, int c, int t){
            if (r != er)
                q.push({r + (r < er ? 1 : -1), c, t + 1});
            else if (c != ec)
                q.push({r, c + (c < ec ? 1 : -1), t + 1});
        };
        
        if (st == 0)
            q.push({sr, sc, st});
        else
            moveRobot(sr, sc, st);
        
        while (!q.empty())
        {
            auto [r, c, t] = q.front();
            q.pop();
            
            if (++visited[{r, c, t}] == 2)
                collisions++;
            
            if (r == er && c == ec)
                return t;

            moveRobot(r, c, t);
        }
        
        return st;
    };
    
    for (const auto& r : routes)
    {
        int currTime = 0;
        for (int i = 0; i < r.size() - 1; ++i)
        {
            int sr = points[r[i] - 1][0];
            int sc = points[r[i] - 1][1];
            int er = points[r[i + 1] - 1][0];
            int ec = points[r[i + 1] - 1][1];
            
            currTime = bfs(sr, sc, er, ec, currTime);
        }
    }
    
    return collisions;
}
```



### 개인적인 회고와 다른 풀이

bfs로 풀어야겠다는 생각은 바로 들었지만, 생각보다 입출력 예시들을 모두 만족시키는 로직을 한 번에 구현하기는 쉽지 않았습니다!



### 느낀 점

이번 문제를 풀면서 확실히 저희가 스터디에서 배웠던 완전탐색을 익힐 수 있게 되어 좋았습니다 ㅎㅎ




## 3

### 문제 - <code>250136_선별시추</code>



### 알고리즘 설계

dfs를 활용하여 각 석유 덩어리를 산정하고, 이를 토대로 시추공이 각 열을 이동하며 검사할 때 가장 많은 석유를 얻을 수 있도록 한다

이 때, 최적화를 위해 따로 석유 덩어리(chunk)를 id와 대응하여 기록하는 테이블과 해당 열을 검사할 때 같은 chunk를 두 번 이상 산정하면 안되므로 이를 검사하는 테이블을 따로 두어 각 열에서 각 석유 덩어리를 **한 번씩**만 확인하게 합니다.



### 풀이 코드

```cpp
#include <vector>
#include <functional>
#include <unordered_map>
#include <unordered_set>

#define OIL 1
#define START_CHUNK_ID 2

using namespace std;

int solution(vector<vector<int>> land)
{
    const int N = land.size(), M = land[0].size();
    constexpr int dir[4][2] = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };
    function<int(int, int, int)> dfs = [&](int r, int c, int chunkID){
        if (land[r][c] != OIL) return 0;
        
        int area = 1;
        land[r][c] = chunkID;
        
        for (int d = 0; d < 4; ++d)
        {
            int nr = r + dir[d][0];
            int nc = c + dir[d][1];
            
            if (nr >= 0 && nr < N && nc >= 0 && nc < M && land[nr][nc] == OIL)
                area += dfs(nr, nc, chunkID);
        }
        
        return area;
    };
    
    int res = 0;
    int chunkID = START_CHUNK_ID;
    unordered_map<int, int> chunk;
    unordered_set<int> visited; 
    for (int c = 0; c < M; ++c)
    {
        int allArea = 0;
        for (int r = 0; r < N; ++r)
        {
            if (land[r][c] == OIL)
                chunk[chunkID++] = dfs(r, c, chunkID);
            
            int tmpID = land[r][c];
            if (tmpID >= START_CHUNK_ID && visited.find(tmpID) == visited.end())
            {
                allArea += chunk[tmpID];
                visited.insert(tmpID);
            }
        }
        visited.clear();
        
        res = max(res, allArea);
    }
    
    return res;
}
```



### 개인적인 회고와 다른 풀이

처음에는 최적화 고려없이 각 열을 시추공이 검사할 때마다 dfs를 호출하는 식으로 구현했는데, 아니나 다를까 효율성 검사에서 실패가 뜨더군요 ㅎㅎ.. 그래서 최적화를 위해 테이블을 작성하는 방식으로 구현했습니다



### 느낀 점

나중에 저희 모두 PCCP 같이 따봐요!!
