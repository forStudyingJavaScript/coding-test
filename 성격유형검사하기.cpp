#include <string>
#include <vector>
#include <cmath>

#define DISAGREE 0
#define AGREE 1

using namespace std;

using character = pair<char, int>;
using indicator = pair<character, character>;

void initIndicators(vector<indicator>& indicators)
{
    indicators.push_back(make_pair(make_pair('R', 0), make_pair('T', 0)));
    indicators.push_back(make_pair(make_pair('C', 0), make_pair('F', 0)));
    indicators.push_back(make_pair(make_pair('J', 0), make_pair('M', 0)));
    indicators.push_back(make_pair(make_pair('A', 0), make_pair('N', 0)));
}

inline bool isNegative(int choice) { return choice > 0 && choice < 5; }

int convertToScore(int choice) { return abs(choice - 4); }

void assignScore(vector<indicator>& indicators, character& result)
{
    for (indicator& ind : indicators)
    {
        character* characters[] = { &ind.first, &ind.second };
        for (character* ch : characters)
        {
            if (ch->first == result.first)
                ch->second += result.second;
        }
    }
}

string makeFullCharacter(vector<indicator>& indicators)
{
    string fullCharacter = "";
    fullCharacter.reserve(indicators.size());
    
    for (const indicator& ind : indicators)
        fullCharacter += (ind.first.second >= ind.second.second) ? ind.first.first : ind.second.first;
    
    return fullCharacter;
}

string solution(vector<string> survey, vector<int> choices)
{
    vector<indicator> indicators;
    initIndicators(indicators);
    
    int question = 0;
    for (int choice : choices)
    {
        character temp;
        int selection;
        
        isNegative(choice) ? selection = DISAGREE : selection = AGREE;
        temp = make_pair(survey[question++][selection], convertToScore(choice));
        
        assignScore(indicators, temp);
    }
    
    return makeFullCharacter(indicators);
}
