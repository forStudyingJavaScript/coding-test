# week24

## 1

### 문제 - <code>134239_우박수열정적분</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	문제에 따라 구한 꺾은 선 그래프를 [0, 1], [1, 2] ... 식으로 각각의 구간에 대해 정적분하고, 나온 결과를 토대로 ranges에서 요구하는 [a, b] 구간에 대한 정적분 값을 구해낸다
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <numeric>

using namespace std;

vector<double> solution(int k, vector<vector<int>> ranges)
{
    vector<double> area;
    for (int i = k; i > 1; i = k)
    {
        if (k % 2 == 0) k /= 2;
        else k = k * 3 + 1;
        
        area.push_back((i + k) * 1 / 2.0);
    }
    
    vector<double> ans;
    for (const auto& range : ranges)
    {
        int a = range[0];
        int b = area.size() + range[1];
        
        double res;
        if (a == b)     res = 0.0;
        else if (a > b) res = -1;
        else            res = accumulate(area.begin() + a, area.begin() + b, 0.0);
        
        ans.push_back(res);
    }
    
    return ans;
}
```



### 개인적인 회고와 다른 풀이

컴퓨터는 디지털 방식이기에, 아날로그 처럼 연속적인 값(곡선)이 존재하지 않는다는 점을 이용하여 정적분을 **사다리꼴** 모양의 넓이를 구하는 것으로 볼 수 있습니다.(물론 당연한 말이긴 합니다)

저는 미리 각 구간들에 대해 정적분한 값을 `area` 벡터에 담아두고, `ranges`의 각 요소를 순회하면서 미리 구했던 정적분 값들을 토대로 필요할 때마다, 단지 값을 더해주는 식으로 구현했습니다😁



### 느낀 점

물론 선형대수 혹은 그래픽스의 기초 원리이지만, 직접 프로그래밍을 해보니 또 느낌이 새롭네요🙃



## 2

### 문제 - <code>181188_요격시스템</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	각 미사일의 e 구간을 기준으로 오름차순 정렬을 해준 후, 각 요소를 순회하면서 이전 미사일의 e 가 다음 미사일의 s 에 포함되는 지 확인하고, 이를 토대로 요격하기 위한 최소한의 미사일 수를 구한다
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <algorithm>

#define S 0
#define E 1

using namespace std;

int solution(vector<vector<int>> t)
{
    sort(t.begin(), t.end(), [](auto& o1, auto& o2){
        return o1[E] < o2[E];
    });
    
    int cnt = 0;
    int n = t.size();
    for (int i = 0, j = 1; i < n && j < n;)
    {
        if (t[i][E] <= t[j][S])
        {
            i = j;
            cnt++;
        }
        
        j++;
    }
    cnt++;
    
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

e 를 기준으로 정렬을 하는 이유는 가장 빨리 끝나는 구간을 선택한 후 가능한 한 많은 마사일들을 한 번에 요격하기 위해서입니다.

무엇보다도 이러한 행위를 반복적으로 한다면, 최소한으로 필요한 요격 미사일의 수를 구할 수 있게 됩니다😀



### 느낀 점

약간의 아이디어가 필요했던 문제였던 것 같아요🫨






## 3

### 문제 - <code>250125_이웃한칸</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	board[h][w]와 인접한 칸들을 탐색하여 색상을 판별하고, 그의 개수를 센다
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<string>> board, int h, int w)
{
    int dx[] = { -1, 1, 0, 0 };
    int dy[] = { 0, 0, -1, 1 };
    int n = board.size();
    
    int cnt = 0;
    for (int i = 0; i < 4; ++i)
    {
        int nx = h + dx[i];
        int ny = w + dy[i];
        
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] == board[h][w])
            cnt++;
    }
    
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

저희 그래프 탐색 풀이했던 것의 일부만을 구현하면 됐던 문제였습니다!




### 느낀 점

재밌게 풀었습니다🙃
