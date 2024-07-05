#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<int>> board, vector<int> moves)
{
    unsigned matchedPairs = 0;
    vector<int> bucket; bucket.reserve(board.size() * board.size());
    
    for (int move : moves)
    {
        for (unsigned i = 0; i < board.size(); ++i)
        {
            int character = board[i][move - 1];
            
            if (character == 0) continue;
            
            board[i][move - 1] = 0;
            
            if (!bucket.empty() && bucket.back() == character)
            {
                matchedPairs++;
                bucket.pop_back();

                break;
            }
            
            bucket.push_back(character);
            break;
        }
    }
    
    return matchedPairs * 2;
}
