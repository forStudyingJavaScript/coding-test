#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string X, string Y)
{
    sort(X.begin(), X.end());
    sort(Y.begin(), Y.end());
    
    string mate = "";
    for (int i = X.length() - 1, j = Y.length() - 1; i >= 0 && j >= 0;)
    {
        if (X[i] < Y[j]) j--;
        else if (X[i] > Y[j]) i--;
        else
        {
            mate += X[i];
            j--; i--;
        }
    }
    
    return mate.empty() ? "-1" : (mate[0] == '0' ? "0" : mate);
}
