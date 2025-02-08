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