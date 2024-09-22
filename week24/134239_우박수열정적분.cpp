#include <vector>
#include <numeric>

using namespace std;

vector<double> solution(int k, vector<vector<int>> ranges)
{
    vector<double> area;
    for (int i = k; i > 1; i = k)
    {
        if (k % 2 == 0) k /= 2;
        else k = k * 3 + 1;
        
        area.push_back((i + k) * 1 / 2.0);
    }
    
    vector<double> ans;
    for (const auto& range : ranges)
    {
        int a = range[0];
        int b = area.size() + range[1];
        
        double res;
        if (a == b)     res = 0.0;
        else if (a > b) res = -1;
        else            res = accumulate(area.begin() + a, area.begin() + b, 0.0);
        
        ans.push_back(res);
    }
    
    return ans;
}
