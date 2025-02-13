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