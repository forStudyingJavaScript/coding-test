#include <string>
#include <vector>
#include <cmath>
#include <numeric>

using namespace std;

int solution(string dr)
{
    vector<int> sum;
    for (int i = 0; i < dr.length(); ++i)
    {
        int score, bonus, opt = 1;
        
        string temp = "";
        while (isdigit(dr[i]))
            temp += dr[i++];
        score = stoi(temp);
        
        switch (dr[i])
        {
            case 'S': bonus = 1; break;
            case 'D': bonus = 2; break;
            case 'T': bonus = 3; break;
        }
        
        if (i + 1 < dr.length() && !isdigit(dr[i + 1]))
        {
            switch (dr[++i])
            {
                case '#':
                    opt = -1;
                    break;
                case '*':
                    opt = 2;
                    if (!sum.empty()) sum.back() *= opt;
                    break;
            }
        }
        
        sum.push_back(pow(score, bonus) * opt);
    }
    
    return accumulate(sum.begin(), sum.end(), 0);
}
