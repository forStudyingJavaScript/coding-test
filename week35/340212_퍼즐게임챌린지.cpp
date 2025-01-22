#include <vector>

#define MAX 100'000

using namespace std;

int solution(vector<int> diffs, vector<int> times, long long limit)
{
    auto canSolve = [&](int level){
        int n = diffs.size();
        long long sum = 0;
        for (int i = 0; i < n; ++i)
        {
            if (sum > limit) return false;
            
            if (diffs[i] > level)
            {
                sum += (times[i] + times[i - 1]) * (diffs[i] - level) + times[i];
                continue;
            }

            sum += times[i];
        }
    
        return sum <= limit;
    };
    
    int left = 1, right = MAX;
    int level;
    while (left <= right)
    {
        int mid = (left + right) / 2;
        if (canSolve(mid))
        {
            level = mid;
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }
    
    return level;
}
