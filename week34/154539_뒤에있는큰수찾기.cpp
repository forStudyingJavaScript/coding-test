#include <vector>

using namespace std;

vector<int> solution(vector<int> nums)
{
    int n = nums.size();
    vector<int> s(n);
    vector<int> ans(n, -1);
    for (int i = 0; i < n; ++i)
    {   
        while (!s.empty() && nums[s.back()] < nums[i])
        {
            ans[s.back()] = nums[i];
            s.pop_back();
        }
        
        s.push_back(i);
    }
    
    return ans;
}
