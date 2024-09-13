#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<string>> board, int h, int w)
{
    int dx[] = { -1, 1, 0, 0 };
    int dy[] = { 0, 0, -1, 1 };
    int n = board.size();
    
    int cnt = 0;
    for (int i = 0; i < 4; ++i)
    {
        int nx = h + dx[i];
        int ny = w + dy[i];
        
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] == board[h][w])
            cnt++;
    }
    
    return cnt;
}
