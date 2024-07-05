#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> d, int budget)
{
    sort(d.begin(), d.end());
    
    int ans = 0;
    for (int req : d)
    {
        if (budget - req < 0) break;
        
        budget -= req;
        ans++;
    }
        
    return ans;
}
