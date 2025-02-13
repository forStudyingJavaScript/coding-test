# week36


## 1

### 문제 - <code>131127_할인행사</code>



### 알고리즘 설계





### 풀이 코드

```java
import java.util.*;

class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int cnt = 0;
        Map<String, Integer> m = new HashMap<>();
        for (int i = 0; i < discount.length; ++i) {
            
            for (int c = 0; c < want.length; ++c) {
                m.put(want[c], number[c]);
            }
            
            for (int j = i; j - i < 10; ++j) {
                String d = discount[j];
                if (m.getOrDefault(d, 0) == 0) continue;
                m.put(d, m.get(d) - 1);
            }
            
            boolean flag = true;
            for (int c = 0; c < want.length; ++c) {
                if (m.get(want[c]) != 0) flag = false;
            }
            
            if (flag) cnt++;
            
            m.clear();
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

class Solution {
    public int solution(int[] priorities, int location) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for (int p : priorities) {
            pq.offer(p);
        }
        
        int cnt = 1;
        while (!pq.isEmpty()) {
            for (int i = 0; i < priorities.length; ++i) {
                if (priorities[i] == pq.peek()) {
                    if (i == location) return cnt;
                    
                    pq.poll();
                    cnt++;
                }
            }
        }
        
        return -1;
    }
}
```



### 개인적인 회고와 다른 풀이





### 느낀 점






## 3

### 문제 - <code>12946_하노이의탑</code>



### 알고리즘 설계





### 풀이 코드

```java
import java.util.*;

class Solution {
    List<int[]> process = new ArrayList<>();
    
    void hanoi(int n, int start, int middle, int end) {
        if (n == 1) {
            process.add(new int[]{ start, end });
        } else {
            hanoi(n - 1, start, end, middle);
            process.add(new int[]{ start, end });
            hanoi(n - 1, middle, start, end);
        }
    }
    
    public int[][] solution(int n) {
        hanoi(n, 1, 2, 3);
        
        int[][] res = new int[process.size()][2];
        for (int i = 0; i < process.size(); ++i) {
            res[i] = process.get(i);
        }
        
        return res;
    }
}
```



### 개인적인 회고와 다른 풀이





### 느낀 점

