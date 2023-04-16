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

    void Notify();
    void Reset();

public:
    Debounce();
    ~Debounce();
    void Execute(DebounceEvent debounceEvent, int Delay);
};
