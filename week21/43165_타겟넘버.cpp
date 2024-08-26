#include <vector>

using namespace std;

int cnt = 0;

void calc(const vector<int>& numbers, int target, int acc = 0, int i = 0)
{
    if (i == numbers.size())
    {
        if (acc == target) cnt++;
        return;
    }
    
    calc(numbers, target, acc + numbers[i], i + 1);
    calc(numbers, target, acc - numbers[i], i + 1);
}

int solution(vector<int> numbers, int target)
{
    calc(numbers, target);
    return cnt;
}
