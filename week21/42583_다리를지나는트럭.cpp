#include <vector>
#include <queue>

using namespace std;

int solution(int b_length, int weight, vector<int> t_weights)
{
    queue<pair<int, int>> q;
    int time = 0;
    int cur_weight = 0;
    
    for (int t : t_weights)
    {
        while (true)
        {
            time++;
            
            if (!q.empty() && q.front().second == time)
            {
                cur_weight -= q.front().first;
                q.pop();
            }
            
            if (cur_weight + t <= weight)
            {
                cur_weight += t;
                q.push({ t, time + b_length });
                break;
            }
        }
    }
    
    return time + b_length;
}
