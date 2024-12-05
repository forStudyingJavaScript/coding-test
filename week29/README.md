# week29


## 1

### 문제 - <code>138476_귤고르기</code>



### 알고리즘 설계
각 귤의 빈도수를 센 후, 이를 기준으로 내림차순으로 정렬한 다음 귤을 고르는 식으로 구현했습니다




### 풀이 코드

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int solution(int k, vector<int> t)
{
    vector<int> temp(*max_element(t.begin(), t.end()) + 1, 0);
    for (auto& e : t) temp[e]++;
    
    sort(temp.begin() + 1, temp.end(), greater<int>());
    
    int cnt = 0;
    for (int i = 1; i <= temp.size(); ++i)
    {
        if (k <= 0) break;
        
        cnt++;
        k -= temp[i];
    }
    
    return cnt;
}

```



### 개인적인 회고와 다른 풀이

고를 귤의 종류를 최소화하기 위해 빈도수를 활용한다는 점이 핵심인 것 같습니다




### 느낀 점
약간 색다른 방식이라 재밌었어요



## 2

### 문제 - <code>76502_괄호회전하기</code>



### 알고리즘 설계
괄호의 짝이 맞는지에 대한 로직을 사용하여 주어진 문자열을 문제에서 정해준 패턴대로 모두 대입하여 푸는 식으로 구현했습니다




### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string s)
{
    auto isMatch = [](string str){
        vector<char> s;
        for (auto& c : str)
        {
            if (c == '(' || c == '{' || c == '[')
                s.push_back(c);
            else
            {
                if (s.empty() ||
                   c == ')' && s.back() != '(' ||
                   c == '}' && s.back() != '{' ||
                   c == ']' && s.back() != '[')
                    return false;
                
                s.pop_back();
            }
        }
        
        return s.empty();
    };
    
    
    int cnt = 0;
    for (int i = 0; i < s.length(); ++i)
    {
        if (isMatch(s)) cnt++;
        
        s += s.front();
        s = s.substr(1);
    }
    
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

뭔가 서비스 로직과 비슷한 느낌이 들었습니다



### 느낀 점

재밌었어요!




## 3

### 문제 - <code>12985_예상대진표</code>



### 알고리즘 설계

A와 B의 대진표를 비교해가며 라운드를 증가시키는 방식으로 구현했습니다



### 풀이 코드

```cpp
#include <cmath>

using namespace std;

int solution(int n, int a, int b)
{
    int round = 0;
    while (a != b)
    {
        round++;
        
        a = (a + 1) / 2;
        b = (b + 1) / 2;
    }

    return round;
}
```



### 개인적인 회고와 다른 풀이

a와 b가 같아지면 둘이 매칭이 잡혔다고 볼 수 있으므로 이를 종료 조건으로 잡고 구현했습니다



### 느낀 점

오랜만에 보는 수학 문제라서 재밌게 풀었어요
