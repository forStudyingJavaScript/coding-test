# week16

## 1

### 문제 - <code>12906_같은숫자는싫어</code>



### 알고리즘 설계

```cpp
/* 아이디어:
	순서를 유지하면서 중복을 처리한다.
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    return vector<int>(arr.begin(), arr.erase(unique(arr.begin(), arr.end()), arr.end()));
}
```

### 개인적인 회고와 다른 풀이

아이디어만으로 깔끔하게 구현 가능해서 좋았습니다! 중복을 처리하되 순서를 유지하는 것이 핵심인 것 같습니다😄😄


### 느낀 점
때로는 split 같은 함수를 직접 구현해야 하지만, 때로는 이렇게 unique 같은 함수를 제공해줘서 편하다고 느꼈습니다!





## 2

### 문제 - <code>42748_K번째수</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	i부터 j까지의 수를 따로 정렬하고 그 중에서 k번째 수를 채택한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <algorithm>

#define I 0
#define J 1
#define K 2

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands)
{
    vector<int> res;
    vector<int> temp; temp.reserve(array.size());
    for (const vector<int>& command : commands)
    {
        temp = array;
        sort(temp.begin() + command[I] - 1, temp.begin() + command[J]);
        res.push_back(temp[command[I] - 1 + command[K] - 1]);
    }
    
    return res;
}
```

### 개인적인 회고와 다른 풀이

i부터 j까지의 수를 별도로 빼내어 정렬 후, k번째 수를 뽑는 식으로 풀이했습니다🙃🙃

### 느낀 점

1번과 마찬가지로 아이디어만으로 풀 수 있어서 깔끔한 문제였다고 생각합니다 ㅎㅎ






## 3

### 문제 - <code>72410_신규아이디추천</code>

### 알고리즘 설계

```cpp
/* 아이디어:
	문제에 나와있는 단계들을 그대로 구현하기.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <cctype>
#include <algorithm>

#define MAX_LENGTH 15
#define MIN_LENGTH 3
#define DEFAULT_CHAR "a"

using namespace std;

string solution(string newId)
{
    transform(newId.begin(), newId.end(), newId.begin(), ::tolower);
    
    newId.erase(remove_if(newId.begin(), newId.end(), [] (char c) {
        return !(isalnum(c) || c == '-' || c == '_' || c == '.');
    }), newId.end());
    
    newId.erase(unique(newId.begin(), newId.end(), [] (char a, char b) {
        return a == '.' && b == '.';
    }), newId.end());
    
    if (!newId.empty() && newId.front() == '.')
        newId.erase(newId.begin());
    
    if (!newId.empty() && newId.back() == '.')
        newId.erase(newId.length() - 1);
    
    if (newId.empty())
        newId = DEFAULT_CHAR;
    
    if (newId.length() > MAX_LENGTH)
        newId.erase(newId.begin() + MAX_LENGTH, newId.end());
    
    if (newId.back() == '.')
        newId.erase(newId.length() - 1);
    
    while (newId.length() < MIN_LENGTH)
        newId += newId.back();
    
    return newId;
}
```

### 개인적인 회고와 다른 풀이

정규 표현식을 사용하면 더 편하게 풀지 않았을까 싶은 문제였습니다😲 사실 로직은 이미 문제에서 주어져서.. 다음에 비슷한 유형의 문제가 나온다면 정규 표현식을 한 번 써봐야겠습니다!


### 느낀 점

개인적으로 c++의 문자열을 다루는 함수들을 많이 접해보고 익숙해지는 계기가 되었습니다. 그리고 무엇보다 스터디원분들 덕분에 람다함수에 익숙해져서 매우 기쁘네요🫡🫡
