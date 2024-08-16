# week20

## 1

### 문제 - <code>42578_의상</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	종류1 Combination 1 * 종류2 Combination 1 * ...  * 종류n Combination 1 - 1
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

int solution(vector<vector<string>> clothes)
{
    unordered_map<string, int> m;
    for (auto& c : clothes)
        m[c[1]]++;

    int res = 1;
    for (auto& i : m)
        res *= (i.second + 1);

    return res - 1;
}
```



### 개인적인 회고와 다른 풀이

재미삼아 이번에 정민님이 발표해주신 해시 테이블 자료구조를 토대로 직접 해시를 구현해본 풀이입니다.

m의 크기가 101, 1001, 10001 일 때까지는 틀린 case들이 존재했는데, 100001 는 모두 정답 처리되었습니다.

(물론 이 풀이 방식은 해시 충돌이 일어나는 경우를 처리해주지 않고, 해시 충돌을 아예 일어나지 않도록 크기를 크게 설정하는 무식한 방법입니다!)

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<string>> clothes)
{
    int m[100001] = { 0, };
    for (auto& c : clothes)
    {
        int key = 0;
        for (int i = 0; i < c[1].length(); ++i)
            key = (key * 31 + (c[1][i] - 'a' + 1)) % 100001;
        m[key]++;
    }

    int res = 1;
    for (auto& i : m)
        res *= (i + 1);

    return res - 1;
}
```




### 느낀 점
저희가 스터디에서 공부한 자료구조로 코테를 풀어봐서 재밌었습니다🙃



## 2

### 문제 - <code>131128_숫자짝꿍</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	X와 Y를 오름차순으로 정렬하고, 이를 토대로 문제에서 요구하는 mate를 구한다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string X, string Y)
{
    sort(X.begin(), X.end());
    sort(Y.begin(), Y.end());
    
    string mate = "";
    for (int i = X.length() - 1, j = Y.length() - 1; i >= 0 && j >= 0;)
    {
        if (X[i] < Y[j]) j--;
        else if (X[i] > Y[j]) i--;
        else
        {
            mate += X[i];
            j--; i--;
        }
    }
    
    return mate.empty() ? "-1" : (mate[0] == '0' ? "0" : mate);
}
```



### 개인적인 회고와 다른 풀이

우선 X와 Y를 오름차순으로 정렬해주고, mate를 채워나가는 식으로 풀이했습니다!



### 느낀 점

저번 주 로또 문제와 비슷한 풀이였습니다😄




## 3

### 문제 - <code>133502_햄버거만들기</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	스택을 활용하여 주어진 재료들을 담았다가, 빵-야채-고기-빵 일때 빼내는 식으로 구현
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

// 빵: 1, 야채: 2, 고기: 3
// 1 2 3 1

int solution(vector<int> ingredient)
{
    vector<int> s;
    int count = 0;
    for (int i : ingredient)
    {
        s.push_back(i);
        
        if (s.size() >= 4 &&
           s[s.size() - 4] == 1 &&
           s[s.size() - 3] 	== 2 &&
           s[s.size() - 2] == 3 &&
           s[s.size() - 1] == 1)
        {
            s.pop_back();
            s.pop_back();
            s.pop_back();
            s.pop_back();
            
            count++;
        }
    }
   
    return count;
}
```



### 개인적인 회고와 다른 풀이

스택을 활용하여 정석대로 풀이하였습니다!




### 느낀 점

처음엔 어떻게 스택 안에 있는 재료들을 확인할 지 고민했었는데, **스택의 크기가 4 이상일 때** 가 핵심이므로 이를 토대로 구현했습니다😁

