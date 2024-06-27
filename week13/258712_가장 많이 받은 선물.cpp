#include <string>
#include <vector>
#include <unordered_map>

#define GIVER 0
#define RECIPIENT 1

using namespace std;

vector<string> split(const string &str)
{
    vector<string> result;
    int start = 0;
    int end = str.find(' ');
    
    while (string::npos != end)
    {
        result.push_back(str.substr(start, end - start));
        start = end + 1;
        end = str.find(' ', start);
    }
    result.push_back(str.substr(start));
    
    return result;
}

int solution(vector<string> friends, vector<string> gifts)
{
    int n = friends.size();
    vector<vector<int>> matrix(n, vector<int>(n, 0));

    for (int r = 0; r < n; ++r)
    {
        for (int c = 0; c < n; ++c)
        {
            if (r == c) continue;
            
            for (const auto& h : gifts)
            {
                vector<string> f = split(h);
                
                if (f[GIVER] == friends[r] && f[RECIPIENT] == friends[c])
                    matrix[r][c]++;
            }
        }
    }

    unordered_map<string, int> nextGifts;
    for (int r = 0; r < n; ++r)
    {
        for (int c = r; c < n; ++c)
        {
            if (r == c) continue;
            
            int giftsGiven = matrix[r][c];
            int giftsReceived = matrix[c][r];

            if (giftsGiven > giftsReceived)
                nextGifts[friends[r]]++;
            else if (giftsGiven < giftsReceived)
                nextGifts[friends[c]]++;
            else
            {
                int giverGiftScore = 0;
                int recipientGiftScore = 0;
                
                for (int i = 0; i < n; ++i)
                {
                    giverGiftScore += matrix[r][i] - matrix[i][r];
                    recipientGiftScore += matrix[c][i] - matrix[i][c];
                }

                if (giverGiftScore > recipientGiftScore)
                    nextGifts[friends[r]]++;
                else if (giverGiftScore < recipientGiftScore)
                    nextGifts[friends[c]]++;
                else; // Nothing to do
            }
        }
    }

    int maxGifts = 0;
    for (const auto& pair : nextGifts)
        maxGifts = max(pair.second, maxGifts);

    return maxGifts;
}
