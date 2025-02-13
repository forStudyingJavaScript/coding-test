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