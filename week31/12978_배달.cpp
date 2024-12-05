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
