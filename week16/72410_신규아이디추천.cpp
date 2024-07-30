#include <string>
#include <cctype>
#include <algorithm>

#define MAX_LENGTH 15
#define MIN_LENGTH 3
#define DEFAULT_CHAR "a"

using namespace std;

string solution(string newId)
{
    transform(newId.begin(), newId.end(), newId.begin(), ::tolower);
    
    newId.erase(remove_if(newId.begin(), newId.end(), [] (char c) {
        return !(isalnum(c) || c == '-' || c == '_' || c == '.');
    }), newId.end());
    
    newId.erase(unique(newId.begin(), newId.end(), [] (char a, char b) {
        return a == '.' && b == '.';
    }), newId.end());
    
    if (!newId.empty() && newId.front() == '.')
        newId.erase(newId.begin());
    
    if (!newId.empty() && newId.back() == '.')
        newId.erase(newId.length() - 1);
    
    if (newId.empty())
        newId = DEFAULT_CHAR;
    
    if (newId.length() > MAX_LENGTH)
        newId.erase(newId.begin() + MAX_LENGTH, newId.end());
    
    if (newId.back() == '.')
        newId.erase(newId.length() - 1);
    
    while (newId.length() < MIN_LENGTH)
        newId += newId.back();
    
    return newId;
}
