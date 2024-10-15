#include <string>

using namespace std;

string solution(int n, int t, int m, int p)
{
    constexpr char table[] = "0123456789ABCDEF";
    
    auto n_number = [&table](int n, int i){
        string temp = "";
        while (i / n != 0)
        {
            temp = table[i % n] + temp;
            i /= n;
        }

        return table[i % n] + temp;
    };
    
    string temp = "";
    string res = "";
    for (int i = 0, cnt = 0; i < t * m && cnt < t;)
    {
        temp += n_number(n, i);
        if (i % m + 1 == p)
        {
            res += temp[i];
            cnt++;
        }
        
        i++;
    }
    
    return res;
}
