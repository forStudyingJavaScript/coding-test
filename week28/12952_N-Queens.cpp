#include <functional>
#include <algorithm>

#define MAX 12

using namespace std;

int solution(int n)
{
    int q[MAX] = { 0, };
    int res = 0;
    
    auto canPlaceQueen = [&](int k, int c){
        for (int i = 0; i < k; ++i)
            if (q[i] == c || abs(q[i] - c) == abs(i - k))
                return false;
        
        return true;
    };

    function<void(int)> Nqueens = [&](int k){
        if (k >= n)
        {
            res++;
            return;
        }
        
        for (int c = 0; c < n; ++c)
            if (canPlaceQueen(k, c))
            {
                q[k] = c;
                Nqueens(k + 1);
            }
    };

    Nqueens(0);
    
    return res;
}
