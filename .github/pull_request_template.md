# week12



## 1

### 문제 - <code>성격유형검사하기</code>

### 알고리즘 설계

```cpp
/* choices
1(3점) <= 비동의 survey[i][0] <= 3(1점)
5(1점) <=  동의  survey[i][1] <= 7(3점)
*/

/* flow
0.   각 지표와 유형에 맞게 초기값을 0으로 한 배열을 생성한다.
1.   choices의 길이와 survey의 길이는 동일하므로, choices의 범위를 토대로 분기
2-1. 만일 choices가 1 이상 4 이하라면 survey[i][0] 를 확인하고 
2-2. choices가 5 이상 7 이하라면 survey[i][1] 을 확인한다.
3.   점수를 각 지표와 유형에 맞게 합산한다.(앞서 설정한 컨테이너에)
4-1. 만일 지표 내의 각 유형의 점수가 동일하다면 사전 순으로 해당 지표의 유형을 결정하고(순차적으로 보면 됨)
4-2. 그 외엔 각 유형의 점수가 큰 쪽으로 해당 지표의 유형을 결정한다.
5.   완성된 성격 유형을 반환한다
*/
```



### 풀이 코드

```cpp
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
```

### 개인적인 회고와 다른 풀이

실제 코딩 테스트였다면 확실히 좋지 않은 코드인 것 같습니다. 다만 상용 중인 서비스라 생각하고 코드를 많이 분리하는 등 가독성이 좋고 유지 보수가 용이하게 구현을 해봤습니다. vector 가 아닌, map 과 전역 범위의 정적 배열을 활용하여 아래와 같은 풀이 또한 가능할 것 같습니다! (다른 사람 풀이)

```cpp
#include <string>
#include <vector>
#include <map>

using namespace std;

char MBTI[4][2] = {
    {'R','T'},
    {'C','F'},
    {'J','M'},
    {'A','N'}
};

string solution(vector<string> survey, vector<int> choices)
{
    string ans = "";
    map<char,int> score;

    for(int i = 0; i < survey.size(); ++i)
    {
        if (choices[i] < 4)
            score[survey[i][0]] += (4 - choices[i]);
        else
            score[survey[i][1]] += (choices[i] - 4);
    }

    for(int i = 0; i < 4; ++i)
    {
        if (score[MBTI[i][0]] >= score[MBTI[i][1]])
            ans += MBTI[i][0];
        else
            ans += MBTI[i][1];
    }

    return ans;
}
```



### 느낀 점

사실 무엇보다 네이밍이 너무 고민됐습니다. 어떤 이름을 지어야 중복이 안되고, 명확하고 좋은 이름이 될 지가 고민됐습니다. 이 점에 대해서 논의해보면 좋을 것 같습니다!



## 2

### 문제 - <code>추억점수</code>

### 알고리즘 설계

```cpp
/* flow
1. photo 의 행 개수만큼 총 반복해야 할 문제의 개수가 되므로, 이를 토대로 ans 배열의 크기를 산정한다.
2. name 배열과 yearning 배열을 매칭하여 score 에 담고, 이 또한 name의 길이만큼 크기를 산정한다.
3. photo 를 순회하면서 score 를 토대로 점수를 ans 에 합산하고, 다 순회하면 ans 를 반환한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> solution(vector<string> name, vector<int> yearning, vector<vector<string>> photo)
{
    vector<int> ans; ans.reserve(photo.size());
    unordered_map<string, int> score; score.reserve(name.size());
    
    int i = 0;
    for (const auto& n : name)
        score[n] = yearning[i++];
    
    int j = 0;
    for (const auto& p : photo)
    {
        ans.push_back(0);
        for (const auto& n : p)
            if (score.find(n) != score.end())
                ans[j] += score[n];
        j++;
    }
    
    return ans;
}
```

### 개인적인 회고와 다른 풀이

<code>성격유형검사하기</code> 문제를 풀고 반성하면서 코드를 문제 풀이에 중점을 두고 구현했습니다! 각 배열마다 크기를 미리 산정해주고, 순회하면서 문제를 반복해서 푸는 코드를 구현했습니다.



### 느낀 점

마찬가지로 네이밍이 너무 고민돼서 함께 논의해보면 좋을 것 같습니다!
