#include <string>
#include <vector>
#include <algorithm>
#include <utility>

using namespace std;

vector<int> solution(int N, vector<int> stages)
{
    vector<int> ans(N);
    vector<pair<unsigned, float>> failureRates(N);
    for (int i = 0; i < N; ++i)
    {
        int cnt = count(stages.begin(), stages.end(), i + 1);
        
        failureRates[i].first = i + 1;
        failureRates[i].second = cnt == 0 ? 0 : float(cnt) / count_if(stages.begin(), stages.end(),
                                        [&i] (const int stage) { return stage >= i + 1; });
    }
    
    sort(failureRates.begin(), failureRates.end(),
        [] (const pair<unsigned, float>& r1, const pair<unsigned, float>& r2)
         {
        	if (r1.second == r2.second)
        		return r1.first < r2.first;
        		
            return r1.second > r2.second;
         });
    
    for (int i = 0; i < N; ++i)
        ans[i] = failureRates[i].first;
    
    return ans;
}
