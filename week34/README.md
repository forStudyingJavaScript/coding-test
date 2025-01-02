# week34


## 1

### 문제 - <code>92335_k진수에서소수개수구하기</code>



### 알고리즘 설계
k진수에 맞게 n을 변형시키고, 문제의 규칙대로 n에 존재하는 소수의 개수를 구한다




### 풀이 코드

```cpp
#include <string>

using namespace std;

int solution(int n, int k)
{
    string tmp = "";
    while (n)
    {
        tmp = to_string(n % k) + tmp;
        n /= k;
    }
    
    auto isPrime = [](long long num){
        if (num <= 1) return false;
        
        for (long long i = 2; i * i <= num; ++i)
            if (num % i == 0) return false;
        
        return true;
    };
    
    int cnt = 0;
    for (int hold = 0, pos = 0; hold < tmp.length() && pos < tmp.length();)
    {
        while (pos < tmp.length() && tmp[pos] != '0') pos++;
        
        if (isPrime(stoll(tmp.substr(hold, pos - hold)))) cnt++;
        
        while (pos < tmp.length() && tmp[pos] == '0') pos++;
        
        hold = pos;
    }
    
    return cnt;
}
```



### 개인적인 회고와 다른 풀이

작성하고 보니 투포인터 기법이 되었네요!




### 느낀 점
재밌었습니다



## 2

### 문제 - <code>154539_뒤에있는큰수찾기</code>



### 알고리즘 설계
단조증가스택 알고리즘을 활용하여 뒷큰수를 찾아낸다




### 풀이 코드

```cpp
#include <vector>

using namespace std;

vector<int> solution(vector<int> nums)
{
    int n = nums.size();
    vector<int> s(n);
    vector<int> ans(n, -1);
    for (int i = 0; i < n; ++i)
    {   
        while (!s.empty() && nums[s.back()] < nums[i])
        {
            ans[s.back()] = nums[i];
            s.pop_back();
        }
        
        s.push_back(i);
    }
    
    return ans;
}
```



### 개인적인 회고와 다른 풀이

단조감소스택도 공부해야겠습니다



### 느낀 점

이번 문제도 그렇고 저희가 알고리즘을 스터디하면서 배우지 못했던 부분들이 간혹 나오더라구요.. 잘 정리해야겠어요




## 3

### 문제 - <code>12913_땅따먹기</code>



### 알고리즘 설계

DP를 활용하여 문제의 요구사항을 구현한다



### 풀이 코드

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> land)
{
    for (int i = 1; i < land.size(); ++i)
    {
        land[i][0] += max(land[i - 1][1], max(land[i - 1][2], land[i - 1][3]));
        land[i][1] += max(land[i - 1][0], max(land[i - 1][2], land[i - 1][3]));
        land[i][2] += max(land[i - 1][0], max(land[i - 1][1], land[i - 1][3]));
        land[i][3] += max(land[i - 1][0], max(land[i - 1][1], land[i - 1][2]));
    }
    
    return *max_element(land[land.size() - 1].begin(), land[land.size() - 1].end());
}
```



### 개인적인 회고와 다른 풀이





### 느낀 점

점화관계를 만들려고 하지 않아도 직관적으로 구현할 수 있었습니다!
