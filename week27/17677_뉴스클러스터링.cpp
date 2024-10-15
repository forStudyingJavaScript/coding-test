#include <string>
#include <unordered_map>

#define FACTOR 65536

using namespace std;

int solution(string str1, string str2)
{
    auto makeMultiSet = [](string str, unordered_map<string, int>& m){
        for (int i = 0; i < str.length() - 1; ++i)
            if (isalpha(str[i]) && isalpha(str[i + 1]))
                m[string(1, tolower(str[i])) + string(1, tolower(str[i + 1]))]++;
    };
    
    unordered_map<string, int> m1, m2;
    makeMultiSet(str1, m1);
    makeMultiSet(str2, m2);

    int in = 0;
    for (auto& e : m1)
        if (m2.count(e.first))
            in += min(e.second, m2[e.first]);

    int un = 0;
    for (auto& e : m1)
        un += max(e.second, m2[e.first]);
    
    for (auto& e : m2)
        if (m1.count(e.first) == 0)
            un += e.second;

    if (un == 0) return FACTOR;

    return (double)in / un * FACTOR;
}
