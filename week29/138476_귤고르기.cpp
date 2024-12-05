#include <vector>
#include <algorithm>

using namespace std;

int solution(int k, vector<int> t)
{
    vector<int> temp(*max_element(t.begin(), t.end()) + 1, 0);
    for (auto& e : t) temp[e]++;
    
    sort(temp.begin() + 1, temp.end(), greater<int>());
    
    int cnt = 0;
    for (int i = 1; i <= temp.size(); ++i)
    {
        if (k <= 0) break;
        
        cnt++;
        k -= temp[i];
    }
    
    return cnt;
}

