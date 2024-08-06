# week17

## 1

### 문제 - <code>12915_문자열내마음대로정렬하기</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	n번째 문자가 동일하면 문자열 자체를 사전식 비교하고, 동일하지 않다면 n번째 문자를 사전식 비교한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> solution(vector<string> strings, int n)
{
    sort(strings.begin(), strings.end(), [&](const string& s1, const string& s2) {
        return s1[n] == s2[n] ? s1 < s2 : s1[n] < s2[n];
    });
    
    return strings;
}
```

### 개인적인 회고와 다른 풀이

아이디어만으로 깔끔하게 구현 가능해서 좋았습니다!


### 느낀 점
다시 한 번 람다 함수를 사용하면서 편리함을 느끼게 되었습니다😁😁





## 2

### 문제 - <code>136798_기사단원의무기</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	약수의 개수를 구해서 만일 limit보다 크다면 정해진 power를, 아니라면 구한 약수의 개수를 필요한 철 무게에 더해주고 이를 반환한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int number, int limit, int power)
{
    int neededIronWeight = 0;
    for (unsigned i = 1; i <= number; ++i)
    {
        int divisorCount = 1;
        for (unsigned j = 1; j <= i/2; ++j)
            if (i % j == 0) divisorCount++;
        
        neededIronWeight += divisorCount > limit ? power : divisorCount;
    }
    
    return neededIronWeight;
}
```

### 개인적인 회고와 다른 풀이

처음에 단순히 약수의 개수를 구할 때, j의 범위를 i보다 작을 때까지 설정하니 시간 초과가 떴습니다.

그래서 **자기 자신을 제외한 약수는 항상 자기 자신의 절반 이하의 수** 라는 약수의 성질을 이용해서, 절반까지만 설정하고 풀이를 해서 통과됐습니다.

만약에 이 또한 통과가 되지 않았다면, 약수의 성질을 이용하여 제곱근 형태로 약수의 개수를 구하는 식으로 풀이했을 것 같습니다🫨🫨

### 느낀 점

아이디어 만으로 구현했다가 처음으로 시간 초과가 떴던 문제였습니다. 그래서 더 효율적인 방법을 생각하게 되었고 그 과정이 너무 재밌었습니다!!






## 3

### 문제 - <code>150370_개인정보수집유효기간</code>

### 알고리즘 설계

```cpp
/* flow:
	1. terms를 map에 담는다
	2. map을 참고하여 privacies를 순회하면서 today와 expDate를 비교한다
	2-1. 만일 expDate가 today 이후라면 넘어간다.
	2-2. 그게 아니라면, 파기해야할 ans에 추가한다.
*/
```



### 풀이 코드

```cpp
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
```



### 개인적인 회고와 다른 풀이

다른 분의 풀이를 가져와 봤습니다! 저의 풀이와의 차이점은 아래와 같습니다.

1. 매직 넘버를 그대로 사용
2. split 함수를 구현하는 대신, stringstream이라는 스트림을 활용
3. 제 코드와 아래의 코드 모두 날짜를 연도, 월, 일을 따로 비교하는 것이 아닌, 한 번에 비교하지만
   아래의 코드는 처음부터 일 수로 비교(제 코드는 마지막에 연도 + 월 + 일로 비교)

사실 개인적으로 아래와 같은 방식이 더 깔끔하다는 생각이 들었습니다.

아래의 코드와 제 코드는 모두 점근적 분석을 해보면 복잡도가 동일하지만, string보다 int로 작업을 주로 하기에 오버헤드가 덜 발생하게 될 뿐더러 가독성 또한 아래의 코드가 코테 풀이용으로는 확실히 좋은 것 같습니다🫡🫡

```cpp
#include <algorithm>
#include <iostream>
#include <map>
#include <sstream>
#include <string>
#include <vector>

using namespace std;
vector<int> solution(string today, vector<string> terms, vector<string> privacies) {
    vector<int> answer;
    int year = stoi(today.substr(0, 4));
    int month = stoi(today.substr(5, 2));
    int days = stoi(today.substr(8));
    int todayD = (year)*12 * 28 + (month - 1) * 28 + days;

    vector<int> ar(privacies.size());
    map<char, int> mp;
    for (int i = 0; i < terms.size(); i++) {
        stringstream ss(terms[i]);
        char c;
        int month;
        ss >> c >> month;
        mp[c] = month;
    }
    for (int i = 0; i < privacies.size(); i++) {
        int y = stoi(privacies[i].substr(0, 4));
        int m = stoi(privacies[i].substr(5, 2));
        int d = stoi(privacies[i].substr(8, 2));
        char c = privacies[i].back();
        ar[i] = (y)*12 * 28 + (m - 1) * 28 + d + mp[c] * 28 - 1;
    }
    for (int i = 0; i < ar.size(); i++) {
        if (ar[i] < todayD) {
            answer.push_back(i + 1);
        }
    }
    return answer;
}
```




### 느낀 점

읽기 좋게 코드를 작성하다 보니 코드의 길이가 많이 길어졌습니다. 개인 회고에 있는 다른 사람의 코드처럼, 코테에서는 가독성보다 성능을 항상 우선 시 해서 흐름대로 작성하는 게 좋다는 것을 깨달았습니다🙃

