#include <vector>
#include <utility>

#define INF 987'654'321

using namespace std;

vector<int> solution(vector<int> sequence, int k)
{
    pair<int, int> res = { 0, INF };
    int tmp = 0;
    for (int s = 0, e = 0; s < sequence.size() && e < sequence.size();)
    {
        tmp += sequence[e];
        
        while (tmp > k) tmp -= sequence[s++];
        
        if (tmp == k)
        {
            if (res.second - res.first > e - s || res.first > s)
            {
                res.first  = s;
                res.second = e;
            }
        }
        
        e++;
    }
    
    return { res.first, res.second };
}
