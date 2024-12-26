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
