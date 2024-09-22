#include <string>
#include <vector>
#include <list>
#include <unordered_map>
#include <algorithm>

#define HIT 1
#define MISS 5

using namespace std;

int solution(int cacheSize, vector<string> cities)
{
    int time = 0;
    list<string> cache;
    unordered_map<string, bool> table;
    for (auto& city : cities)
    {
        for_each(city.begin(), city.end(), [](auto& c){ c = tolower(c); });
        
        auto it = find(cache.begin(), cache.end(), city);
        if (it != cache.end())
        {
            cache.erase(it);
            cache.push_front(city);
            time += HIT;
            
            continue;
        }
        
        cache.push_front(city);
        time += MISS;
        table[city] = true;

        if (cache.size() > cacheSize)
        {
            table[cache.back()] = false;
            cache.pop_back();
        }
    }
    
    return time;
}

