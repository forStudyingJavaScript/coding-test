#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> land)
{
    for (int i = 1; i < land.size(); ++i)
    {
        land[i][0] += max(land[i - 1][1], max(land[i - 1][2], land[i - 1][3]));
        land[i][1] += max(land[i - 1][0], max(land[i - 1][2], land[i - 1][3]));
        land[i][2] += max(land[i - 1][0], max(land[i - 1][1], land[i - 1][3]));
        land[i][3] += max(land[i - 1][0], max(land[i - 1][1], land[i - 1][2]));
    }
    
    return *max_element(land[land.size() - 1].begin(), land[land.size() - 1].end());
}
