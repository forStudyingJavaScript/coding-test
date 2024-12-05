# week31


## 1

### 문제 - <code>178871_달리기경주</code>



### 알고리즘 설계
{플레이어 : 인덱스} 를 저장하는 맵을 선언하고, 이를 토대로 해설진이 부르는 선수 및 앞선 선수의 순위를 적절히 처리한다




### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

vector<string> solution(vector<string> players, vector<string> callings)
{
    unordered_map<string, int> m;
    for (int i = 0; i < players.size(); ++i)
        m[players[i]] = i;

    for (auto& c : callings)
    {
        int& curr = m[c];
        int& prev = m[players[curr - 1]];
        swap(players[curr--], players[prev++]);
    }
    
    return players;
}
```



### 개인적인 회고와 다른 풀이

주어진 플레이어 배열에서 해당 플레이어의 인덱스를 해시맵으로 저장한다는 아이디어가 중요했던 것 같아요!




### 느낀 점
아이디어를 떠올렸지만 처음에 약간 헤맸던 것 같습니다ㅠ



## 2

### 문제 - <code>42583_다리를지나는트럭</code>



### 알고리즘 설계
큐를 활용한 시뮬레이션 문제로써 주어진 조건대로  다리를 건너는 트럭 알고리즘을 구현한다




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
    
    return time + b_length;
}
```



### 개인적인 회고와 다른 풀이

뭔가 서비스 로직과 비슷한 느낌이 들었습니다



### 느낀 점

재밌었어요!




## 3

### 문제 - <code>12978_배달</code>



### 알고리즘 설계

다익스트라 알고리즘을 활용하여 각 지역별 배달 최단 거리 중 K 이하인 구역의 개수를 센다



### 풀이 코드

```cpp
#include <vector>
#include <queue>

#define INF 987'654'321

using namespace std;

int solution(int N, vector<vector<int>> road, int K)
{
    vector<pair<int, int>> graph[N + 1];
    for (auto& r : road)
    {
        int from = r[0];
        int to = r[1];
        int cost = r[2];
        graph[from].push_back({ to, cost });
        graph[to].push_back({ from, cost });
    }

    vector<int> dist(N + 1, INF);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    dist[1] = 0;
    pq.push({ 0, 1 });
    
    while (!pq.empty())
    {
        int currDist = pq.top().first;
        int currNode = pq.top().second;
        pq.pop();

        if (currDist > dist[currNode]) continue;

        for (auto& edge : graph[currNode])
        {
            int nextNode = edge.first;
            int nextDist = currDist + edge.second;

            if (nextDist < dist[nextNode])
            {
                dist[nextNode] = nextDist;
                pq.push({ nextDist, nextNode });
            }
        }
    }

    int cnt = 0;
    for (int i = 1; i <= N; i++)
        if (dist[i] <= K) cnt++;

    return cnt;
}
```



### 개인적인 회고와 다른 풀이

어떤 분은 dfs로 푸셨던데 제대로 풀이를 못봤네요 ㅠ 혹시 아시는 분 계시면 공유 부탁드려요 ㅎㅎ



### 느낀 점

확실히 저희가 자료구조 알고리즘 스터디를 한 보람이 있더군요!
