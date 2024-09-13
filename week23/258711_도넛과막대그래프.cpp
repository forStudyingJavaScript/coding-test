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
