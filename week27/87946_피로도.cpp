#include <vector>
#include <algorithm>

using namespace std;

int solution(int k, vector<vector<int>> dungeons)
{
    sort(dungeons.begin(), dungeons.end());
    
    int maxCnt = 0;
    do
    {
        int t = k;
        int cnt = 0;
        for (int i = 0; i < dungeons.size(); ++i)
            if (dungeons[i][0] <= t) cnt++, t -= dungeons[i][1];
        
        maxCnt = max(maxCnt, cnt);
    } while (next_permutation(dungeons.begin(), dungeons.end()));
    
    return maxCnt;
}
