#include <string>
#include <algorithm>
#include <cmath>

#define MAX 10'000'000

using namespace std;

int solution(string numbers)
{
    sort(numbers.begin(), numbers.end(), greater<>());
    
    int maxNumber = stoi(numbers);
    
    int memo[MAX];
    memo[0] = memo[1] = 0;
    
    for (int i = 2; i <= maxNumber; ++i)
        memo[i] = i;
    
    for (int i = 2; i <= sqrt(maxNumber); ++i)
    {
        if (memo[i] == 0) continue;
        
        for (int j = i * i; j <= maxNumber; j += i)
            memo[j] = 0;
    }
    
    sort(numbers.begin(), numbers.end());
    
    int cnt = 0;
    do
    {
        for (int len = 1; len <= numbers.length(); ++len)
        {
            int num = stoi(numbers.substr(0, len));
            if (memo[num])
            {
                cnt++;
                memo[num] = 0;
            }
        }
    } while (next_permutation(numbers.begin(), numbers.end()));
    
    return cnt;
}
