#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> solution(vector<string> name, vector<int> yearning, vector<vector<string>> photo)
{
    vector<int> ans; ans.reserve(photo.size());
    unordered_map<string, int> score; score.reserve(name.size());
    
    int i = 0;
    for (const auto& n : name)
        score[n] = yearning[i++];
    
    int j = 0;
    for (const auto& p : photo)
    {
        ans.push_back(0);
        for (const auto& n : p)
            if (score.find(n) != score.end())
                ans[j] += score[n];
        j++;
    }
    
    return ans;
}
