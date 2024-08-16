#include <string>
#include <vector>

using namespace std;

int solution(vector<int> ingredient)
{
    vector<int> s;
    int count = 0;
    for (int i : ingredient)
    {
        s.push_back(i);
        
        if (s.size() >= 4 &&
           s[s.size() - 4] == 1 &&
           s[s.size() - 3] == 2 &&
           s[s.size() - 2] == 3 &&
           s[s.size() - 1] == 1)
        {
            s.pop_back();
            s.pop_back();
            s.pop_back();
            s.pop_back();
            
            count++;
        }
    }
   
    return count;
}
