# week19

## 1

### 문제 - <code>17681_비밀지도</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	비트 연산자를 활용하여 비밀지도를 해독한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2)
{
    vector<string> ans;
    string temp;
    for (int i = 0; i < n; ++i)
    {
        temp = "";
        for (int j = n - 1; j >= 0; --j)
            temp += ((arr1[i] & 1 << j) >> j | (arr2[i] & 1 << j) >> j) ? "#" : " ";
        
        ans.push_back(temp);
    }
    
    return ans;
}
```



### 개인적인 회고와 다른 풀이

풀이에서 j를 왼쪽 시프트 하는 연산이 없어도 잘 작동하지만, 정확히 풀이하기 위해 추가했습니다!




### 느낀 점
비트 연산을 활용한 재미있는 문제였습니다😁



## 2

### 문제 - <code>17682_다트게임</code>

### 알고리즘 설계

```cpp
/* flow:
	1. 아래의 로직을 3번의 기회동안 반복한다.
	1-1. 점수를 환산한다.
	1-2. 보너스를 환산한다.
	1-3. 옵션이 존재한다면 환산한다.
	1-4. 합계에 결과(점수 ^ 보너스 * 옵션)를 추가한다.
	2. 합계에 있는 결과들을 모두 합하여 반환한다.
*/
```



### 풀이 코드

```cpp
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
```



### 개인적인 회고와 다른 풀이

위는 정석대로 푼 풀이이고, 아래는 다른 분이 푸신 걸 약간 정제한 후 가져왔습니다.

```s = s * 10 + t - '0';``` 코드가 풀이의 핵심입니다. 이를 통해 점수가 10인 경우에도 잘 작동하는 로직이 완성되었습니다!

```cpp
#include <string>
#include <vector>
#include <numeric>

using namespace std;

int solution(string dr)
{
    vector<int> sum;
    for(int i = 0, s = 0; i < dr.size(); ++i)
    {
        char t = dr[i];
        
        if (isdigit(t)) s = s * 10 + t - '0';
        else if (t == 'S') sum.push_back(s), s = 0;
        else if (t == 'D') sum.push_back(s * s), s = 0;
        else if (t == 'T') sum.push_back(s * s * s), s = 0;
        else if (t == '*')
        {
            if (sum.size() > 1) sum[sum.size() - 2] *= 2;
            sum.back() *= 2;
        }
        else if (t == '#') sum.back() = -sum.back();
    }
    
    return accumulate(sum.begin(), sum.end(), 0);
}
```



### 느낀 점

이번 문제 덕분에 accumulate라는 새로운 함수를 알게 되어 좋았습니다!!




## 3

### 문제 - <code>77484_로또의최고순위와최저순위</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	당첨된 개수와 가려진 개수를 활용하여 등수를 판별한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

const int SCORES[] = { 6, 6, 5, 4, 3, 2, 1 };

vector<int> solution(vector<int> lottos, vector<int> win_nums)
{
    sort(lottos.begin(), lottos.end());
    sort(win_nums.begin(), win_nums.end());
    
    int win_count = 0, zero_count = 0;
    for (int i = 0, j = 0; i < lottos.size() && j < win_nums.size();)
    {
        if (lottos[i] == 0) zero_count++;
        
        if (lottos[i] < win_nums[j]) i++;
        else if (lottos[i] > win_nums[j]) j++;
        else
        {
            win_count++;
            i++; j++;
        }
    }
    
    return { SCORES[win_count + zero_count], SCORES[win_count] };
}
```



### 개인적인 회고와 다른 풀이

당첨된 개수와 가려진 개수를 활용하여 풀이를 진행했습니다. 가려진 개수는 **맞춘 개수에만 영향을 주기에**, 이 성질을 활용해서 문제를 풀었습니다!




### 느낀 점

개인적으로 문제에서 요구하는 논리가 제 취향에 맞았던 것 같습니다😄

