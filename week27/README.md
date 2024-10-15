# week27

## 1

### 문제 - <code>87946_피로도</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	가능한 던전 순열을 모두 순회하면서 최대로 돌 수 있는 던전의 수를 계산한다
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int solution(int k, vector<vector<int>> dungeons)
{
    sort(dungeons.begin(), dungeons.end());
    
    int maxCnt = 0;
    do
    {
        int t = k;
        int cnt = 0;
        for (int i = 0; i < dungeons.size(); ++i)
            if (dungeons[i][0] <= t) cnt++, t -= dungeons[i][1];
        
        maxCnt = max(maxCnt, cnt);
    } while (next_permutation(dungeons.begin(), dungeons.end()));
    
    return maxCnt;
}
```



### 개인적인 회고와 다른 풀이

이번 문제 또한 저번처럼 순열로 풀이했지만 이번에 백트래킹도 배웠으니 해당 알고리즘으로 구현해봤습니다!

```cpp
#include <vector>
#include <functional>

#define MAX 8

using namespace std;

int solution(int k, vector<vector<int>> dungeons)
{
    int maxCnt = 0;
    int visited[MAX] = { 0, };
    function<void(int, int)> explore = [&](int cnt, int t){
        maxCnt = max(maxCnt, cnt);
        
        for (int i = 0; i < dungeons.size(); ++i)
            if (!visited[i] && t >= dungeons[i][0])
            {
                visited[i] = true;
                explore(cnt + 1, t - dungeons[i][1]);
                visited[i] = false;
            }
    };
    
    explore(0, k);
    
    return maxCnt;
}
```



### 느낀 점

백트래킹과 순열을 모두 구하는 것의 성능을 비교해봤는데, 백트래킹이 순열을 모두 구하는 것보다 성능이 우세할 수 있지만 가지치기를 제대로 하지 않을 경우 둘이 비슷한 성능을 보입니다



## 2

### 문제 - <code>17677_뉴스클러스터링</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	문제에서 요구한 대로 다중집합의 교집합과 합집합을 구하여 자카드 유사도를 반환한다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <set>
#include <algorithm>

#define FACTOR 65536

using namespace std;

int solution(string str1, string str2)
{
    auto makeMultiSet = [](string str){
        multiset<string> ms;
        for (int i = 0; i < str.length() - 1; ++i)
            if (isalpha(str[i]) && isalpha(str[i + 1]))
                ms.insert(string(1, tolower(str[i])) + string(1, tolower(str[i + 1])));
        
        return ms;
    };
    
    multiset<string> ms1 = makeMultiSet(str1);
    multiset<string> ms2 = makeMultiSet(str2);
    
    multiset<string> intersectionSet;
    set_intersection(ms1.begin(), ms1.end(), ms2.begin(), ms2.end(), 
                     inserter(intersectionSet, intersectionSet.begin()));
    
    multiset<string> unionSet;
    set_union(ms1.begin(), ms1.end(), ms2.begin(), ms2.end(), 
              inserter(unionSet, unionSet.begin()));

    int in = intersectionSet.size();
    int un = unionSet.size();

    if (un == 0) return FACTOR;

    return (double)in / un * FACTOR;
}
```



### 개인적인 회고와 다른 풀이

문제에서 요구한 그대로 구현했습니다



### 느낀 점

개인적으로 c++에서 제공해주는 집합 알고리즘도 순열과 더불어 너무 편리하다고 느꼈습니다!




## 3

### 문제 - <code>17687_N진수게임</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	16진수까지의 수를 미리 구한 다음, 문제에서 말한 규칙대로 게임에서 사용될 수를 구함과 동시에 튜브의 차례에 해당하는 수를 res에 추가한 후, t만큼의 길이가 되면 이를 반환한다
*/
```



### 풀이 코드

```cpp
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
```



### 개인적인 회고와 다른 풀이

n진수의 수를 구하는 법만 알 수 있다면 쉽게 풀 수 있었던 문제였습니다!




### 느낀 점

재미있게 풀었습니다!
