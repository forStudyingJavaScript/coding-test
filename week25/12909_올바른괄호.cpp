#include <string>
#include <functional>

using namespace std;

bool solution(string s)
{
    function<bool(int, int)> isMatch = [&](int i, int n){
        if (n < 0) return false;
        
        if (i == s.length()) return n == 0;
        
        if (s[i] == '(') n++;
        else             n--;
        
        return isMatch(i + 1, n);
    };
    
    return isMatch(0, 0);
}
