# week25

## 1

### 문제 - <code>12909_올바른괄호</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	짝을 맞춰야 하는 괄호가 한 쌍이므로 개수를 셈으로써 짝이 맞는지 확인한다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <functional>

using namespace std;

bool solution(string s)
{
    function<bool(int, int)> isMatch = [&](int i, int n){
        if (n < 0) return false;
        
        if (i == s.length()) return n == 0;
        
        if (s[i] == '(') n++;
        else             n--;
        
        return isMatch(i + 1, n);
    };
    
    return isMatch(0, 0);
}
```



### 개인적인 회고와 다른 풀이

재귀를 활용하여 짝이 맞는 지 확인했습니다.

`n` 을 활용하여 열린 괄호라면 증가를, 닫힌 괄호라면 감소를 해줌으로써 마지막에 `n` 이 0 이 된다면 모든 짝이 맞음을 의미하게 됩니다😁



### 느낀 점

재미있는 문제였습니다😄





## 2

### 문제 - <code>17686_파일명정렬</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	문제에서 알려준 대로 head와 number를 구분하여 이들을 비교하여 안정정렬한다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <algorithm>
#include <cctype>

using namespace std;

vector<string> solution(vector<string> files)
{
    stable_sort(files.begin(), files.end(), [](auto& f1, auto& f2){
        string head1 = "", head2 = "";
        string number1 = "", number2 = "";
        
        int i = 0, j = 0;
        while (!isdigit(f1[i])) head1 += tolower(f1[i++]);
        while (!isdigit(f2[j])) head2 += tolower(f2[j++]);
        
        while (isdigit(f1[i])) number1 += f1[i++];
        while (isdigit(f2[j])) number2 += f2[j++];
        
        if (head1 == head2) return stoi(number1) < stoi(number2);
        return head1 < head2;
    });
    
    return files;
}
```



### 개인적인 회고와 다른 풀이

문제에서 요구하는 대로 구현했습니다!



### 느낀 점

이제 슬슬 안정정렬 문제가 나오는군요😲






## 3

### 문제 - <code>17680_캐시</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	LRU 캐시 교체 알고리즘을 토대로 문제의 요구사항을 구현한다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <list>
#include <unordered_map>
#include <algorithm>

#define HIT 1
#define MISS 5

using namespace std;

int solution(int cacheSize, vector<string> cities)
{
    int time = 0;
    list<string> cache;
    unordered_map<string, bool> table;
    for (auto& city : cities)
    {
        for_each(city.begin(), city.end(), [](auto& c){ c = tolower(c); });
        
        auto it = find(cache.begin(), cache.end(), city);
        if (it != cache.end())
        {
            cache.erase(it);
            cache.push_front(city);
            time += HIT;
            
            continue;
        }
        
        cache.push_front(city);
        time += MISS;
        table[city] = true;

        if (cache.size() > cacheSize)
        {
            table[cache.back()] = false;
            cache.pop_back();
        }
    }
    
    return time;
}

```



### 개인적인 회고와 다른 풀이

LRU에 관한 내용이 문제에 없어서 그 부분을 검색해서 구현했습니다. 덕분에 캐시 알고리즘을 공부할 수 있어서 좋았습니다😄

문제에서 요구한 대로, `cacheSize` 를 토대로 `cache hit` 인 경우와 `cache miss` 인 경우를 각각 구현해주면 됐습니다!




### 느낀 점

덕분에 몰랐던 부분까지 공부하게 돼서 정말 좋았습니다🫡
