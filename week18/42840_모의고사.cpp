#include <vector>
#include <algorithm>

#define SIZE(s) (sizeof(s) / sizeof(s[0]))

#define S1 0
#define S2 1
#define S3 2

using namespace std;

int calcScore(const vector<int>& answers, const int* s, int size, int i = 0)
{
    if (i == answers.size()) return 0;
    
    return (answers[i] == s[i % size]) + calcScore(answers, s, size, i + 1);
}

vector<int> solution(const vector<int> answers)
{
    const int s1[] = { 1, 2, 3, 4, 5 };
    const int s2[] = { 2, 1, 2, 3, 2, 4, 2, 5 };
    const int s3[] = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };

    int scores[] = {
        calcScore(answers, s1, SIZE(s1)),
        calcScore(answers, s2, SIZE(s2)),
        calcScore(answers, s3, SIZE(s3))
    };

    int highScore = max({scores[S1], scores[S2], scores[S3]});
    
    vector<int> ans;
    for (int i = 0; i < SIZE(scores); ++i)
        if (scores[i] == highScore)
            ans.push_back(i + 1);

    return ans;
}
