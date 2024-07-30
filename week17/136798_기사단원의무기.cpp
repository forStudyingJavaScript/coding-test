#include <string>
#include <vector>

using namespace std;

int solution(int number, int limit, int power)
{
    int neededIronWeight = 0;
    for (unsigned i = 1; i <= number; ++i)
    {
        int divisorCount = 1;
        for (unsigned j = 1; j <= i/2; ++j)
            if (i % j == 0) divisorCount++;
        
        neededIronWeight += divisorCount > limit ? power : divisorCount;
    }
    
    return neededIronWeight;
}
