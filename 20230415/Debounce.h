#include "Debounce.EventArg.h"
#include <vector>
#include <chrono>
#include <thread>

using namespace std;

class Debounce
{
private:
    static void timerfunction();
    static int delay;
    static void Notify();
    static void Reset();

    static Debounce *instance;
    static vector<IDebounceEvent *> eventVector;
    static chrono::steady_clock::time_point startTime;
    static chrono::steady_clock::time_point endTime;

public:
    Debounce();
    ~Debounce();

    void CreateObject();
    Debounce *GetInstance();

    void Execute(IDebounceEvent *debounceEvent, int Delay);
};
