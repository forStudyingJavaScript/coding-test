#include <string>
#include <vector>
#include <algorithm>

#define I 0
#define J 1
#define K 2

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands)
{
    vector<int> res;
    vector<int> temp; temp.reserve(array.size());
    for (const vector<int>& command : commands)
    {
        temp = array;
        sort(temp.begin() + command[I] - 1, temp.begin() + command[J]);
        res.push_back(temp[command[I] - 1 + command[K] - 1]);
    }
    
    return res;
}
