#include <string>
#include <vector>
#include <algorithm>
#include <cctype>

using namespace std;

vector<string> solution(vector<string> files)
{
    stable_sort(files.begin(), files.end(), [](auto& f1, auto& f2){
        string head1 = "", head2 = "";
        string number1 = "", number2 = "";
        
        int i = 0, j = 0;
        while (!isdigit(f1[i])) head1 += tolower(f1[i++]);
        while (!isdigit(f2[j])) head2 += tolower(f2[j++]);
        
        while (isdigit(f1[i])) number1 += f1[i++];
        while (isdigit(f2[j])) number2 += f2[j++];
        
        if (head1 == head2) return stoi(number1) < stoi(number2);
        return head1 < head2;
    });
    
    return files;
}
