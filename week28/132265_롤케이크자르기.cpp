#include <vector>
#include <unordered_map>

using namespace std;

int solution(vector<int> topping)
{
    unordered_map<int, int> d2;
    for (auto& t : topping) d2[t]++;
    
    int cnt = 0;
    unordered_map<int, int> d1;
    for (auto& t : topping)
    {
        d1[t]++;
        d2[t]--;
        
        if (d2[t] == 0) d2.erase(t);
        
        if (d1.size() == d2.size()) cnt++;
    }
    
    return cnt;
}
