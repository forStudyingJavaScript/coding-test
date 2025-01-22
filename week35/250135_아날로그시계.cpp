#define HOUR   12
#define MINUTE 60
#define SECOND 60

using namespace std;

int solution(int h1, int m1, int s1, int h2, int m2, int s2) {
    int start = h1 * MINUTE * SECOND + m1 * SECOND + s1;
    int end   = h2 * MINUTE * SECOND + m2 * SECOND + s2;
    
    int currS = s1 * HOUR * MINUTE;
    int currM = (m1 * SECOND + s1) * HOUR;
    int currH = (h1 % HOUR) * MINUTE * SECOND + (m1 * SECOND + s1);

    int cnt = 0;
    if (currS == currM || currS == currH) cnt++;

    while (start < end)
    {
        int prevS = currS;
        int prevM = currM;
        int prevH = currH;

        currS += HOUR * MINUTE;
        currM += HOUR;
        currH += 1;

        if (currS == currM || (prevS < prevM && currS > currM)) cnt++;
        if (currS == currH || (prevS < prevH && currS > currH)) cnt++;

        currS %= HOUR * MINUTE * SECOND;
        currM %= HOUR * MINUTE * SECOND;
        currH %= HOUR * MINUTE * SECOND;

        start++;
    }

    if (h1 < HOUR && h2 >= HOUR) cnt--;

    return cnt;
}
