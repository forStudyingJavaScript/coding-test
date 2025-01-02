# week33


## 1

### 문제 - <code>84512_모음사전</code>



### 알고리즘 설계
문제의 요구사항대로 모음을 토대로 단어의 사전 순을 세어서 이를 반환한다




### 풀이 코드

```cpp
#include <string>
#include <functional>

using namespace std;

int solution(string word)
{
    const string vowels = "AEIOU";
    int cnt = 0;
    bool found = false;
    function<void(string)> dfs = [&](string cur){
        if (cur == word)
        {
            found = true;
            return;
        }
        
        if (cur.length() == vowels.length())
            return;
        
        for (char c : vowels)
        {
            cnt++;
            dfs(cur + c);
            if (found) return;
        }
    };
    
    dfs(string());
    
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

어떤 분은 가중치를 부여해서 맵을 통해 구현하셨더라구요!




### 느낀 점
재밌었어요!



## 2

### 문제 - <code>12981_영어끝말잇기</code>



### 알고리즘 설계
문제에서 요구한대로 게임을 진행하며, 이 때 잘못 말하거나 이미 말한 단어를 말했다면 그 사람의 번호와 턴을 반환하고 그게 아니라 정상적으로 게임이 끝났다면 `{0, 0}` 을 반환한다




### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <unordered_set>

using namespace std;

vector<int> solution(int n, vector<string> words)
{
    unordered_set<string> dic;
    int i = 0;
    char sc = words[i][0];
    while (i < words.size())
    {
        string w = words[i];
        
        if (dic.find(w) != dic.end() || w.front() != sc)
            return vector<int>({i % n + 1, i / n + 1});
        
        dic.insert(w);
        sc = w.back();
        i++;
    }
    
    return vector<int>({0, 0});
}
```



### 개인적인 회고와 다른 풀이

해당 사람의 번호와 턴을 나머지 연산과 나누기 연산으로 구할 수 있다는 게 흥미롭네요!



### 느낀 점

정말 set 이 유용하게 쓰이네요




## 3

### 문제 - <code>159994_카드뭉치</code>



### 알고리즘 설계

요구사항대로 구현한다



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

string solution(vector<string> cards1, vector<string> cards2, vector<string> goal)
{
    int i = 0, j = 0;
    for (const string& g : goal)
    {
        if      (i < cards1.size() && cards1[i] == g) i++;
        else if (j < cards2.size() && cards2[j] == g) j++;
        else    return "No";
    }
    
    return "Yes";
}
```



### 개인적인 회고와 다른 풀이

i와 j를 증가시킬 때, 인덱스를 초과할 수 있으니 범위를 유의해야할 것 같아요



### 느낀 점

재밌었어요!
