#include <string>
#include <vector>
#include <algorithm>

#define FRONT -1
#define REAR 1
#define BORROWED -1

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve)
{
    for (auto it = lost.begin(); it != lost.end(); )
    {
        auto pos = find(reserve.begin(), reserve.end(), *it);
        if (pos == reserve.end())
        {
            ++it;
            continue;
        }
        
        reserve.erase(pos);
        it = lost.erase(it);
    }
    
    int ans = n - lost.size();
    
    sort(lost.begin(), lost.end());
    sort(reserve.begin(), reserve.end());
    
    for (int i = 0; i < lost.size(); ++i)
    {
        for (int j = 0; j < reserve.size(); ++j)
        {
            if (reserve[j] == BORROWED) continue;
            
            if (reserve[j] + FRONT == lost[i] || reserve[j] + REAR == lost[i])
            {
                reserve[j] = BORROWED;
                ans++;
                break;
            }
        }
    }
    
    return ans;
}
