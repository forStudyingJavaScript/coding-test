#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> sc, int K)
{
    priority_queue<int, vector<int>, greater<int>> pq(sc.begin(), sc.end());
    
    int count = 0;
    while (pq.top() < K)
    {
        if (pq.size() < 2) return -1;
        
        int leastHot = pq.top();
        pq.pop();
        
        pq.push(leastHot + pq.top() * 2);
        pq.pop();
        
        count++;
    }
    
    return count;
}
