#include <string>
#include <vector>
#include <queue>

using namespace std;

bool canChange(string w1, string w2)
{
    int diffCnt = 0;
    for (int i = 0; i < w1.size(); ++i)
    {
        if (w1[i] != w2[i]) diffCnt++;
        if (diffCnt > 1) return false;
    }
    
    return true;
}

int solution(string begin, string target, vector<string> words)
{
    queue<pair<string, int>> q;
    vector<bool> v(words.size(), false);
    
    q.push({ begin, 0 });
    while (!q.empty())
    {
        string curWord = q.front().first;
        int steps = q.front().second;
        
        q.pop();
        
        if (curWord == target) return steps;
        
        for (int i = 0; i < words.size(); ++i)
        {
            if (!v[i] && canChange(curWord, words[i]))
            {
                v[i] = true;
                q.push({ words[i], steps + 1 });
            }
        }
    }
        
    return 0;
}
