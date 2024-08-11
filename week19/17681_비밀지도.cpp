#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2)
{
    vector<string> ans;
    string temp;
    for (int i = 0; i < n; ++i)
    {
        temp = "";
        for (int j = n - 1; j >= 0; --j)
            temp += ((arr1[i] & 1 << j) >> j | (arr2[i] & 1 << j) >> j) ? "#" : " ";
        
        ans.push_back(temp);
    }
    
    return ans;
}
