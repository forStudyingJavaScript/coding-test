#include <cmath>

using namespace std;

long long solution(int r1, int r2)
{
    long long cnt = 0;

    for (int x = 1; x <= r2; ++x)
    {
        long long minY = ceil(sqrt((long long)r1 * r1 - (long long)x * x));
        long long maxY = floor(sqrt((long long)r2 * r2 - (long long)x * x));
        
        cnt += (maxY - (minY < 0 ? 0 : minY) + 1);
    }

    return cnt * 4;
}
