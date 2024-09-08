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
