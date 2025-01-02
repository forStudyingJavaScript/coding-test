#include <string>
#include <vector>
#include <unordered_set>

using namespace std;

vector<int> solution(int n, vector<string> words)
{
    unordered_set<string> dic;
    int i = 0;
    char sc = words[i][0];
    while (i < words.size())
    {
        string w = words[i];
        
        if (dic.find(w) != dic.end() || w.front() != sc)
            return vector<int>({i % n + 1, i / n + 1});
        
        dic.insert(w);
        sc = w.back();
        i++;
    }
    
    return vector<int>({0, 0});
}
