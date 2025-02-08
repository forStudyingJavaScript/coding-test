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