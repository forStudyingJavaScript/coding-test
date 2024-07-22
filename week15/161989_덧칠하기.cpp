#include <string>
#include <vector>

using namespace std;

int solution(int n, int m, vector<int> section)
{
    int count = 0;
    int lastPaintedEnd = 0;
    for (int i : section)
    {
        if (i <= lastPaintedEnd) continue;
        
        count++;
        lastPaintedEnd = i + m - 1;
    }
    
    return count;
}
