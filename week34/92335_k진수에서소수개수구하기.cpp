#include <string>

using namespace std;

int solution(int n, int k)
{
    string tmp = "";
    while (n)
    {
        tmp = to_string(n % k) + tmp;
        n /= k;
    }
    
    auto isPrime = [](long long num){
        if (num <= 1) return false;
        
        for (long long i = 2; i * i <= num; ++i)
            if (num % i == 0) return false;
        
        return true;
    };
    
    int cnt = 0;
    for (int hold = 0, pos = 0; hold < tmp.length() && pos < tmp.length();)
    {
        while (pos < tmp.length() && tmp[pos] != '0') pos++;
        
        if (isPrime(stoll(tmp.substr(hold, pos - hold)))) cnt++;
        
        while (pos < tmp.length() && tmp[pos] == '0') pos++;
        
        hold = pos;
    }
    
    return cnt;
}
