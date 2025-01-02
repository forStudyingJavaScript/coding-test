#include <string>
#include <functional>

using namespace std;

int solution(string word)
{
    const string vowels = "AEIOU";
    int cnt = 0;
    bool found = false;
    function<void(string)> dfs = [&](string cur){
        if (cur == word)
        {
            found = true;
            return;
        }
        
        if (cur.length() == vowels.length())
            return;
        
        for (char c : vowels)
        {
            cnt++;
            dfs(cur + c);
            if (found) return;
        }
    };
    
    dfs(string());
    
    return cnt;
}
