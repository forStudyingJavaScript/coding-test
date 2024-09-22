#include <vector>
#include <algorithm>

#define S 0
#define E 1

using namespace std;

int solution(vector<vector<int>> t)
{
    sort(t.begin(), t.end(), [](auto& o1, auto& o2){
        return o1[E] < o2[E];
    });
    
    int cnt = 0;
    int n = t.size();
    for (int i = 0, j = 1; i < n && j < n;)
    {
        if (t[i][E] <= t[j][S])
        {
            i = j;
            cnt++;
        }
        
        j++;
    }
    cnt++;
    
    return cnt;
}
