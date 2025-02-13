# week37


## 1

### 문제 - <code>131127_할인행사</code>



### 알고리즘 설계





### 풀이 코드

```java
class Solution {
    public int solution(int n) {
        int cnt = 1;
        for (int i = 1; i <= n; ++i) {
            int sum = i;
            for (int j = i + 1; j <= n; ++j) {
                if (sum == n) {
                    cnt++;
                    break;
                }

                if (sum > n) break;

                sum += j;
            }
        }

        return cnt;
    }
}
```



### 개인적인 회고와 다른 풀이






### 느낀 점




## 2

### 문제 - <code>42587_프로세스</code>



### 알고리즘 설계





### 풀이 코드

```java
import java.util.*;

public class Solution {
    public int solution(int n) {
        int cnt = 0;
        while (n > 0) {
            if (n % 2 == 0) {
                n /= 2;
            } else {
                n--;
                cnt++;
            }
        }

        return cnt;
    }
}
```



### 개인적인 회고와 다른 풀이





### 느낀 점






## 3

### 문제 - <code>150368_이모티콘할인행사</code>



### 알고리즘 설계





### 풀이 코드

```java

```



### 개인적인 회고와 다른 풀이





### 느낀 점

