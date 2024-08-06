#include <string>
#include <vector>
#include <algorithm>
#include <unordered_map>

#define MONTHS 12
#define DAYS 28

#define YEAR 0
#define MONTH 1
#define DAY 2

#define TYPE_OF_TERM_IN_TERMS 0
#define EXPIRATION_PERIOD_IN_TERMS 1

#define DATE_IN_PRIVACY 0
#define TYPE_OF_TERM_IN_PRIVACY 1

using namespace std;

vector<string> split(string input, const string sep)
{
    vector<string> res;
    string token;
    int pos = 0;
    while ((pos = input.find(sep)) != string::npos)
    {
        token = input.substr(0, pos);
        res.push_back(token);
        input.erase(0, pos + sep.length());
    }
    res.push_back(input);
    
    return res;
}

vector<int> solution(string today, vector<string> terms, vector<string> privacies)
{
    unordered_map<char, unsigned short> termTable;
    vector<string> todayDate = split(today, ".");
    
    vector<string> temp;
    for (const string& term : terms)
    {
        temp = split(term, " ");
        termTable[temp[TYPE_OF_TERM_IN_TERMS][0]] = stoi(temp[EXPIRATION_PERIOD_IN_TERMS]);
    }
    
    vector<int> ans; ans.reserve(privacies.size());
    vector<string> expDate(todayDate);
    vector<string> tempDate;
    int privacyNum = 0;
    for (const string& privacy : privacies)
    {
        temp = split(privacy, " ");
        tempDate = split(temp[DATE_IN_PRIVACY], ".");
        
        int expYear = stoi(tempDate[YEAR]);
        int expMonth = stoi(tempDate[MONTH]) + termTable[temp[TYPE_OF_TERM_IN_PRIVACY][0]];
        int expDay = stoi(tempDate[DAY]) - 1;

        while (expMonth > 12)
        {
            expMonth -= 12;
            expYear += 1;
        }
        
        expDate[YEAR] = to_string(expYear);
        expDate[MONTH] = (expMonth < 10 ? "0" : "") + to_string(expMonth);
        expDate[DAY] = (expDay < 10 ? "0" : "") + to_string(expDay);

        if (expDate[DAY] == "0")
        {
            int newMonth = stoi(expDate[MONTH]) - 1;
            if (newMonth == 0)
            {
                newMonth = MONTHS;
                expDate[YEAR] = to_string(stoi(expDate[YEAR]) - 1);
            }
            expDate[MONTH] = (newMonth < 10 ? "0" : "") + to_string(newMonth);
            expDate[DAY] = DAYS;
        }
        
        ++privacyNum;
        
        if (stoi(expDate[YEAR] + expDate[MONTH] + expDate[DAY]) >= stoi(todayDate[YEAR] + todayDate[MONTH] + todayDate[DAY]))
            continue;
        
        ans.push_back(privacyNum);
    }
    
    return ans;
}
