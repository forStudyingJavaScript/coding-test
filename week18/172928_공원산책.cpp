#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<string> park, vector<string> routes)
{
    int r, c;
    [&](){
        for (r = 0; r < park.size(); ++r)
            for (c = 0; c < park[r].length(); ++c)
                if (park[r][c] == 'S') return;
    }();
    
    for (const string& route : routes)
    {
        char direction = route[0];
        int offset = route[2] - '0';
        int nr = r, nc = c;
        
        switch (direction)
        {
            case 'N': nr = r - offset; break;
            case 'S': nr = r + offset; break;
            case 'W': nc = c - offset; break;
            case 'E': nc = c + offset; break;
        }

        if (nr < 0 || nr > park.size() - 1 || nc < 0 || nc > park[0].length() - 1) continue;
        
        bool isBlocked = false;
        for (int i = 1; i <= offset && !isBlocked; ++i)
        {
            switch (direction)
            {
                case 'N': isBlocked = park[r - i][c] == 'X'; break;
                case 'S': isBlocked = park[r + i][c] == 'X'; break;
                case 'W': isBlocked = park[r][c - i] == 'X'; break;
                case 'E': isBlocked = park[r][c + i] == 'X'; break;
            }
        }
        
        if (isBlocked) continue;
        
        r = nr;
        c = nc;
    }
    
    return {r, c};
}
