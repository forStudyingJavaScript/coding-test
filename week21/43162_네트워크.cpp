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
