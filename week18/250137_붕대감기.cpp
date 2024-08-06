#include <string>
#include <vector>

using namespace std;

int solution(vector<int> bandage, int health, vector<vector<int>> attacks)
{
    const int t = bandage[0];
    const int x = bandage[1];
    const int y = bandage[2];
    
    int ans = health;
    int acc = 0;
    for (int i = 1, j = 0; i <= attacks.back().front(); ++i)
    {
        if (ans <= 0) break;
        
        if (i == attacks[j][0]) 
        {
            acc = 0;
            ans -= attacks[j++][1];
            continue;
        }
        
        acc++;
        ans = (ans + x > health) ? health : ans + x;
        
        if (acc != t) continue;
        
        ans = (ans + y > health) ? health : ans + y;
        acc = 0;
    }
    
    return ans <= 0 ? -1 : ans;
}
