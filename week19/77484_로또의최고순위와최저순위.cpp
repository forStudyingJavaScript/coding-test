#include <string>
#include <vector>
#include <algorithm>

using namespace std;

const int SCORES[] = { 6, 6, 5, 4, 3, 2, 1 };

vector<int> solution(vector<int> lottos, vector<int> win_nums)
{
    sort(lottos.begin(), lottos.end());
    sort(win_nums.begin(), win_nums.end());
    
    int win_count = 0, zero_count = 0;
    for (int i = 0, j = 0; i < lottos.size() && j < win_nums.size();)
    {
        if (lottos[i] == 0) zero_count++;
        
        if (lottos[i] < win_nums[j]) i++;
        else if (lottos[i] > win_nums[j]) j++;
        else
        {
            win_count++;
            i++; j++;
        }
    }
    
    return { SCORES[win_count + zero_count], SCORES[win_count] };
}
