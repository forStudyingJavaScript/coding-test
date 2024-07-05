# week14

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

🙈🙈스포방지🙈🙈

## 1

### 문제 - <code>1845_폰켓몬</code>



### 알고리즘 설계

```cpp
/* 아이디어
    개념: 중복 처리
    로직:
        1. 폰켓몬의 종류에 따라 짝지을 수 있는 최대 개수가 산정되므로 중복을 처리한다
        2. 문제에서 요구한 N/2개 내의 최대로 짝지을 수 있는 폰켓몬의 종류를 반환한다.
*/
```



### 풀이 코드

```cpp
#include <vector>
#include <unordered_set>
#include <algorithm>

using namespace std;

int solution(vector<int> nums)
{
    unordered_set<int> type(nums.begin(), nums.end());
    
    return min(type.size(), nums.size() / 2);
}
```

### 개인적인 회고와 다른 풀이

중복을 허용하지 않는다는 문제를 보고 set 자료구조를 활용해야겠다는 생각이 들었습니다.

그리고 **N/2개 내**로 최대로 짝지을 수 있는 폰켓몬의 수를 구하는 것이므로, N/2보다 폰켓몬 종류가 많다면 N/2를, 그게 아니라면 중복을 제거해준 폰켓몬의 종류만을 반환하는 식으로 구현했습니다!


### 느낀 점
개인적으로 이렇게 아이디어만으로 풀 수 있는 문제가 가장 깔끔하고 풀기 편해서 좋은 것 같아요😀😀

## 2

### 문제 - <code>64061_크레인인형뽑기</code>

### 알고리즘 설계

```cpp
/* flow
    1. 바구니를 생성하고, 짝이 맞은 개수를 기록할 변수를 생성한다.
    2. 이를 토대로 moves를 순회하면서 조작을 한다.
    2-1. 이 때, 뽑을 수 있는 인형이 없다면(0 이라면), 넘어간다.
    2-2. 그게 아니라면 인형을 뽑는다.
    2-2-1. 만일 인형이 바구니의 최근 인형과 동일하다면, 짝이 맞았다는 개수를 세어주고 바구니에서 해당 인형을 제거한다.
    2-2-2. 그게 아니라면, 바구니에 인형을 추가한다.
    2-3. 해당 move는 완료되었으므로 반복문을 탈출한다.
    3. 짝이 맞은 인형들의 개수를 반환한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>

#define NONE 0
#define PICKED 0

using namespace std;

int solution(vector<vector<int>> board, vector<int> moves)
{
	// 바구니를 생성하고, 짝이 맞은 개수를 기록할 변수를 생성한다.
    unsigned matchedPairs = 0;
    vector<int> bucket; bucket.reserve(board.size() * board.size());
    
    // 이를 토대로 moves를 순회하면서 조작을 한다.
    for (int move : moves)
    {
        for (unsigned i = 0; i < board.size(); ++i)
        {
            int character = board[i][move - 1]; // 인형뽑기 기계가 행이 아닌, 열들을 뽑는 것을 주의!
            
            if (character == NONE) continue; // 인형이 존재하지 않는다면 넘어감
            
            board[i][move - 1] = PICKED; // 인형을 뽑았으므로 뽑았다는 표시를 해줌
            
            // 만일 인형이 바구니의 최근 인형과 동일하다면, 짝이 맞았다는 개수를 세어주고 바구니에서 해당 인형을 제거한다.
            if (!bucket.empty() && bucket.back() == character)
            {
                matchedPairs++;
                bucket.pop_back();

                break;
            }
            
            // 그게 아니라면, 바구니에 인형을 추가한다.
            bucket.push_back(character);
            
            break; // 해당 move는 완료되었으므로 반복문을 탈출한다.
        }
    }
    
    return matchedPairs * 2; // 짝이 맞은 인형들의 개수를 반환한다.
}
```

### 개인적인 회고와 다른 풀이

사실 처음에는 return 문을 제외한 나머지는 동일하게 한 채, 왜 자꾸 테스트 케이스가 통과되지 않는지 애먹었습니다😭😭

근데 알고보니 문제에서 요구하는 게 짝이 맞는 횟수가 아닌, 짝이 맞는 인형들의 개수를 요구하는 것이더군요..🥲  2를 곱해줘서 통과됐습니다!



### 느낀 점

확실히 로직을 다루는 부분은 if 문과 continue, break를 자주 사용해서 명시적으로 나타내면 가독성이 좋아지는 것 같아요!!




## 3

### 문제 - <code>81301_숫자문자열과영단어</code>

### 알고리즘 설계

```cpp
/* flow
    1. 문제에서 정의한 '숫자 : 영문' 표를 만든다.
    2. 주어진 문자열을 순회한다.
    2-1. 만일 이미 숫자로 이루어져있다면 넘어간다.
    2-2. 그게 아니라면 표를 참고하여 영문의 위치를 찾는다.
    2-2-1. 만일 찾았다면, 해당 영문을 숫자로 수정해준다.
    3. 수정이 완료된 문자열을 정수로 변환하여 반환한다.
*/
```



### 풀이 코드

```cpp
#include <string>
#include <vector>
#include <utility>

#define BASE 10

using namespace std;

// 문제에서 정의한 '숫자 : 영문' 표를 만든다.
pair<char, const char*> table[BASE] = {
    make_pair<char, const char*>('0', "zero"),
    make_pair<char, const char*>('1', "one"),
    make_pair<char, const char*>('2', "two"),
    make_pair<char, const char*>('3', "three"),
    make_pair<char, const char*>('4', "four"),
    make_pair<char, const char*>('5', "five"),
    make_pair<char, const char*>('6', "six"),
    make_pair<char, const char*>('7', "seven"),
    make_pair<char, const char*>('8', "eight"),
    make_pair<char, const char*>('9', "nine")
};

int solution(string s)
{
    // 주어진 문자열을 순회한다.
    for (unsigned i = 0; i < s.length(); ++i)
    {
        // 만일 이미 숫자로 이루어져있다면 넘어간다.
        if (s[i] >= '0' && s[i] <= '9') continue;
        
        // 그게 아니라면 표를 참고하여 영문의 위치를 찾는다.
        for (const pair<char, const char*>& p : table)
        {
            size_t pos = s.find(p.second, i);
            
            // 만일 찾았다면, 해당 영문을 숫자로 수정해준다.
            if (pos != string::npos)
                s.replace(pos, string(p.second).length(), 1, p.first);
        }
    }
    
    return stoi(s); // 수정이 완료된 문자열을 정수로 변환하여 반환한다.
}
```

### 개인적인 회고와 다른 풀이

table의 "영문" 타입으로 괜히 const char\*로 설정했단 생각이 들었습니다. 어차피 string의 replace 함수를 사용할 때, 두 번째 인자로 전달하는 p.second를 결국 string으로 만들어주고 길이를 구해야 했기 때문입니다.

만일 string으로 변환하지 않고 길이를 찾고 싶었다면 별도의 const char\* 의 길이를 구하는 함수를 구현하거나 \<cstring\> 헤더를 사용해서 strlen 함수를 사용했으면 될 것 같습니다!

근데 뭐가 됐든 코딩테스트에선 이미 구현된 자료구조를 활용해서 문제를 푸는 것이 중요하기에 실전에서는 string으로 애초에 타입을 지정하면 더 좋을 것 같습니다😀😀😀

그리고 아래는 다른 분이 푸신 코드를 가져와봤습니다.

~~~cpp
#include <regex>

using namespace std;

int solution(string s)
{
    s = regex_replace(s, regex("zero"), "0");
    s = regex_replace(s, regex("one"), "1");
    s = regex_replace(s, regex("two"), "2");
    s = regex_replace(s, regex("three"), "3");
    s = regex_replace(s, regex("four"), "4");
    s = regex_replace(s, regex("five"), "5");
    s = regex_replace(s, regex("six"), "6");
    s = regex_replace(s, regex("seven"), "7");
    s = regex_replace(s, regex("eight"), "8");
    s = regex_replace(s, regex("nine"), "9");    
    
    return stoi(s);
}
~~~

이 풀이를 보고 상당히 감명깊었습니다!! 애초에 **정규 표현식**을 쓸 생각을 못했던 게 참 아쉽네요🥲

다음번엔 문자열 처리할 때, 정규 표현식도 쓸 생각을 해야겠습니다!!




### 느낀 점

이 문제를 풀면서 자료구조에 대한 생각이 더 났던 것 같습니다. 어떤 자료구조를 사용함에 있어, 그게 편리함을 제공한다면 코테 문제에선 고민없이 사용하는 게 좋을 것 같습니다🫡🫡
