#include <string>
#include <vector>

using namespace std;

int W, H;

void calc(int area, int brown, int yellow, int height, int width)
{
    if (height > width) return;
    
    if (brown == 2 * width + 2 * height - 4 && yellow == (width - 2) * (height - 2))
    {
        W = width;
        H = height;
        return;
    }
        
    calc(area, brown, yellow, height + 1, area / (height + 1));
}

vector<int> solution(int brown, int yellow)
{
    int area = brown + yellow;
    calc(area, brown, yellow, 1, area / 1);
    
    return { W, H };
}
