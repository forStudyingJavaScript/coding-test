# week23

## 1

### 문제 - <code>340213_동영상재생기</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	주어진 시간 문자열을 적절히 파싱하여 문제에서 요구하는 로직을 구현한다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <functional>

using namespace std;

string solution(string videoLen, string pos, string opStart, string opEnd, vector<string> commands)
{
    function<int(string&)> timeToSec = [&](string& str){
        int m = stoi(str.substr(0, 2));
        int s = stoi(str.substr(3, 2));
        
        return m * 60 + s;
    };
    
    int opStartSec = timeToSec(opStart);
    int opEndSec = timeToSec(opEnd);
    int videoLenSec = timeToSec(videoLen);
    int npos = timeToSec(pos);
    for (string& c : commands)
    {
        if (npos >= opStartSec && npos <= opEndSec)
            npos = opEndSec;
        
        if (c == "next")
            npos = npos + 10 <= videoLenSec ? npos + 10 : videoLenSec;
        else // (c == "prev")
            npos = npos - 10 >= 0 ? npos - 10 : 0;
    }
    
    if (npos >= opStartSec && npos <= opEndSec)
        npos = opEndSec;
    
    string m = to_string(npos / 60);
    string s = to_string(npos % 60);
    if (m.length() == 1) m = "0" + m;
    if (s.length() == 1) s = "0" + s;
    
    return m + ":" + s;
}
```



### 개인적인 회고와 다른 풀이

어떤 식으로 변환해줄 지 생각해보다가, 모든 시간을 초로 산정해주는 방법을 채택했습니다.

그리고 함수의 가독성을 고려했을 때, 자바스크립트처럼 함수 안에서 함수를 선언하고 사용하는게 위에서 아래로 읽기 편한 것 같습니다!




### 느낀 점
실제로 OTT에서 사용하는 기능을 코딩테스트로 구현해보니 재밌었습니다😁



## 2

### 문제 - <code>258711_도넛과막대그래프</code>

### 알고리즘 설계

```cpp
/* flow:
	1. 정점의 개수가 최대 각각 1,000,000 개이므로 인접리스트로 edges를 표현한다.
	2. '생성한 정점의 번호'를 구하기 위해, indegree(들어오는 간선)로 edges를 표현한다.
	3. 1번과 2번을 토대로 '생성한 정점의 번호'를 구한다.
	4. '생성한 정점의 번호'를 토대로 dfs 탐색 기법을 통해 인접한 그래프들을 판별한다.
	4-1. 만일 탐색 도중 자기 자신을 만난다면, 도넛 그래프의 개수를 증가시킨다.
	4-2. 만일 탐색 도중 인접한 정점이 없다면, 막대 그래프의 개수를 증가시킨다.
	4-3. 만일 탐색 도중 인접한 정점이 2개라면, 8자 그래프의 개수를 증가시킨다.
	5. 위의 단계들을 기록한 배열을 반환한다.
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <functional>

#define MAX 1'000'001

#define CENTER 0
#define DONUT 1
#define STICK 2
#define EIGHT 3
 
using namespace std;
 
vector<int> solution(vector<vector<int>> edges)
{
    vector<int> adList[MAX];
    int inDegree[MAX];
    for (auto& e : edges)
    {
        adList[e.front()].push_back(e.back());
        inDegree[e.back()]++;
    }
    
    int res[] = { 0, 0, 0, 0 };
    for (int v = 1; v < MAX; ++v)
    {
        if (inDegree[v] == 0 && adList[v].size() >= 2)
        {
            res[CENTER] = v;
            break;
        }
    }
    
    int visited[MAX] = { 0, };
    function<void(int, int*)> dfs = [&](int v, int* res){
        if (visited[v]) { res[DONUT]++; return; }
        if (adList[v].size() == 0) { res[STICK]++; return; }
        if (adList[v].size() == 2) { res[EIGHT]++; return; }
        
        visited[v] = true;
        
        for (int u : adList[v])
            dfs(u, res);
    };
    
    for (int v : adList[res[CENTER]])
        dfs(v, res);
    
    return vector(res, res + 4);
}
```



### 개인적인 회고와 다른 풀이

위는 ```알고리즘 설계```에 적은 대로 구현한 코드입니다!
별도로 인접리스트를 만들고, dfs를 통해서 그래프를 판별하다 보니 아무래도 시간이 좀 걸리고 메모리 공간도 차지하게 됐습니다.(물론 통과는 됩니다)
그래서 다른 효율적인 방법이 없을까 싶어서 다른 분들의 풀이를 보던 중, 인접리스트 자체를 만들지 않아도 된다는 아이디어를 발견했습니다😲

어차피 **특정 정점을 찾거나 정점들에서 특정 '방문'을 해야할 필요가 없기에** 인접리스트를 만들 필요없이, indegree처럼 outdegree를 통해 나가는 간선의 수만 세어주면 되는 것입니다.

그렇게 된다면 단순히 1번 정점부터 최대 정점까지 순회하면서 indegree와 outdegree를 통해 무엇이 '생성한 정점의 번호'이고, 무엇이 도넛 그래프이고, 막대 그래프이고, 8자 그래프인지 판별할 수 있게 됩니다!

물론 도넛 그래프는 진입 간선과 진출 간선만으로는 정의할 수 없으므로 전체 그래프들에서 도넛을 제외한 나머지 그래프들을 차감하는 식으로 구현하면 됩니다!

아래는 이를 구현한 코드입니다😀

```cpp
#include <vector>

#define MAX 1'000'001

#define CENTER 0
#define DONUT 1
#define STICK 2
#define EIGHT 3
 
using namespace std;
 
vector<int> solution(vector<vector<int>> edges)
{
    int outD[MAX];
    int  inD[MAX];
    for (auto& e : edges)
    {
        outD[e.front()]++;
        inD[e.back()]++;
    }
    
    int maxV = 0;
    for (auto& e : edges)
        maxV = max(maxV, max(e.front(), e.back()));
    
    vector<int> res = { 0, 0, 0, 0 };
    for (int v = 1; v <= maxV; ++v)
    {
        if (inD[v] == 0 && outD[v] >= 2)
        {
            res[CENTER] = v;
            continue;
        }
        
        if (inD[v] >= 1 && outD[v] == 0)
            res[STICK]++;
        else if (inD[v] >= 2 && outD[v] == 2)
            res[EIGHT]++;
    }
    res[DONUT] = outD[res[CENTER]] - res[STICK] - res[EIGHT];
    
    return res;
}
```



### 느낀 점

확실히 좋은 문제였다고 생각합니다. 그래프라고 해서 무조건 탐색을 해야할 필요가 없다는 점 또한 깨닫게 되었습니다.

이번 문제를 통해 그래프 공부를 더 열심히 해야겠다고 느꼈습니다🫡




## 3

### 문제 - <code>154540_무인도여행</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	'X'가 아닌 모든 섬들을 방문하면서, 해당 섬을 통해 다른 이어진 섬들을 탐험하며 무인도를 파악한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <functional>
#include <algorithm>

using namespace std;

vector<int> solution(vector<string> maps)
{
    int dx[] = { -1, 1, 0, 0 };
    int dy[] = { 0, 0, -1, 1 };
    int n = maps.size();
    int m = maps[0].length();
    
    int visited[100][100] = { 0, };
    function<void(int, int, int&)> dfs = [&](int x, int y, int& acc){
        if (visited[x][y]) return;
        
        visited[x][y] = true;
        acc += maps[x][y] - '0';
        
        for (int i = 0; i < 4; ++i)
        {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] != 'X')
                dfs(nx, ny, acc);
        }
    };
    
    vector<int> res;
    for (int i = 0; i < n; ++i)
    {
        for (int j = 0; j < m; ++j)
        {
            if (maps[i][j] != 'X' && !visited[i][j])
            {
                int acc = 0;
                dfs(i, j, acc);
                
                res.push_back(acc);
            }
        }
    }
    
    sort(res.begin(), res.end());
    
    return res.empty() ? vector({-1}) : res;
}
```



### 개인적인 회고와 다른 풀이

저번에 풀었던 네트워크 문제와 비슷했습니다!

방문하지 않은 모든 섬들을 순회하며 무인도를 파악하는 문제입니다😄




### 느낀 점

무인도 여행 문제 또한 길찾기 문제와 동일한 방식이어서 재밌게 풀었습니다😀
