#include <string>
#include <vector>
#include <climits>

#define NOT_FOUND -1

using namespace std;

vector<int> solution(vector<string> keymap, vector<string> targets)
{
    vector<int> minTyping;
    for (string t : targets)
    {
        int count = 0;
        bool found = true;
        for (char c : t)
        {
            int minIndex = INT_MAX;
            for (string k : keymap)
            {
                int currentIndex = k.find(c);
                
                if (currentIndex == string::npos) continue;
                
                minIndex = min(minIndex, currentIndex);
            }
            
            if (minIndex == INT_MAX)
            {
                minTyping.push_back(NOT_FOUND);
                found = false;
                break;
            }
                
            count += (minIndex + 1);
        }
        
        if (found) minTyping.push_back(count);
    }
    
    return minTyping;
}
