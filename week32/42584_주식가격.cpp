#include <vector>

#define MAX 100'000

using namespace std;

vector<int> solution(vector<int> prices)
{
    int ans[MAX];
    int n = prices.size();
    for (int i = 0; i < n; ++i)
    {
        int cnt = 0;
        for (int j = i + 1; j < n; ++j)
        {
            cnt++;
            if (prices[i] > prices[j]) break;
        }
        ans[i] = cnt;
    }
    
    return vector<int>(ans, ans + n);
}
