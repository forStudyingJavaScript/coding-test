#include <vector>
#include <unordered_set>
#include <algorithm>

using namespace std;

int solution(vector<int> nums)
{
    unordered_set<int> type(nums.begin(), nums.end());
    
    return min(type.size(), nums.size() / 2);
}
