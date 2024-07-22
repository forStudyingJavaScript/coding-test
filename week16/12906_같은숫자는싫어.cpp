#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    return vector<int>(arr.begin(), arr.erase(unique(arr.begin(), arr.end()), arr.end()));
}
