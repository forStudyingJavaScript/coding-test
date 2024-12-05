#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

vector<string> solution(vector<string> players, vector<string> callings)
{
    unordered_map<string, int> m;
    for (int i = 0; i < players.size(); ++i)
        m[players[i]] = i;

    for (auto& c : callings)
    {
        int& curr = m[c];
        int& prev = m[players[curr - 1]];
        swap(players[curr--], players[prev++]);
    }
    
    return players;
}
