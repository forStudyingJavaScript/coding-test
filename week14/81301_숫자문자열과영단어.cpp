#include <string>
#include <vector>
#include <utility>

#define BASE 10

using namespace std;

pair<char, const char*> table[BASE] = {
    make_pair<char, const char*>('0', "zero"),
    make_pair<char, const char*>('1', "one"),
    make_pair<char, const char*>('2', "two"),
    make_pair<char, const char*>('3', "three"),
    make_pair<char, const char*>('4', "four"),
    make_pair<char, const char*>('5', "five"),
    make_pair<char, const char*>('6', "six"),
    make_pair<char, const char*>('7', "seven"),
    make_pair<char, const char*>('8', "eight"),
    make_pair<char, const char*>('9', "nine")
};

int solution(string s)
{
    for (unsigned i = 0; i < s.length(); ++i)
    {
        if (s[i] >= '0' && s[i] <= '9') continue;
        
        for (const pair<char, const char*>& p : table)
        {
            size_t pos = s.find(p.second, i);
            if (pos != string::npos)
                s.replace(pos, string(p.second).length(), 1, p.first);
        }
    }
    
    return stoi(s);
}
