#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> sc, int K)
{
    priority_queue<int, vector<int>, greater<int>> pq(sc.begin(), sc.end());
    int cnt = 0;
    while (pq.top() < K)
    {
        if (pq.size() < 2) return -1;
        
        int t = pq.top();
        pq.pop();
        
        pq.push(t + pq.top() * 2);
        pq.pop();
        
        cnt++;
    }
    
    return cnt;
}
