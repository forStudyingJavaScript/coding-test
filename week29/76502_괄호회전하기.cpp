#include <string>
#include <vector>

using namespace std;

int solution(string s)
{
    auto isMatch = [](string str){
        vector<char> s;
        for (auto& c : str)
        {
            if (c == '(' || c == '{' || c == '[')
                s.push_back(c);
            else
            {
                if (s.empty() ||
                   c == ')' && s.back() != '(' ||
                   c == '}' && s.back() != '{' ||
                   c == ']' && s.back() != '[')
                    return false;
                
                s.pop_back();
            }
        }
        
        return s.empty();
    };
    
    
    int cnt = 0;
    for (int i = 0; i < s.length(); ++i)
    {
        if (isMatch(s)) cnt++;
        
        s += s.front();
        s = s.substr(1);
    }
    
    return cnt;
}
