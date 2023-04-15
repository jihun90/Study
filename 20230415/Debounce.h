#include <vector>
#include <chrono>
#include <thread>

using namespace std;

class Debounce
{
private:
    vector<DebounceEvent> eventVector;
    int delay;

    thread timeThread;
    chrono::steady_clock::time_point startTime;
    chrono::steady_clock::time_point endTime;
    void timerfunction();

    void Execute();
    void Reset();

public:
    Debounce();
    ~Debounce();
    void Start(DebounceEvent debounceEvent, int Delay);
};
