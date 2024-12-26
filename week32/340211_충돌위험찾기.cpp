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
