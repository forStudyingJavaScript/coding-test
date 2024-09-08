#include <string>
#include <vector>
#include <functional>

using namespace std;

string solution(string videoLen, string pos, string opStart, string opEnd, vector<string> commands)
{
    function<int(string&)> timeToSec = [&](string& str){
        int m = stoi(str.substr(0, 2));
        int s = stoi(str.substr(3, 2));
        
        return m * 60 + s;
    };
    
    int opStartSec = timeToSec(opStart);
    int opEndSec = timeToSec(opEnd);
    int videoLenSec = timeToSec(videoLen);
    int npos = timeToSec(pos);
    for (string& c : commands)
    {
        if (npos >= opStartSec && npos <= opEndSec)
            npos = opEndSec;
        
        if (c == "next")
            npos = npos + 10 <= videoLenSec ? npos + 10 : videoLenSec;
        else // (c == "prev")
            npos = npos - 10 >= 0 ? npos - 10 : 0;
    }
    
    if (npos >= opStartSec && npos <= opEndSec)
        npos = opEndSec;
    
    string m = to_string(npos / 60);
    string s = to_string(npos % 60);
    if (m.length() == 1) m = "0" + m;
    if (s.length() == 1) s = "0" + s;
    
    return m + ":" + s;
}
