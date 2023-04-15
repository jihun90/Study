#include "Debounce.h"
#include <vector>
#include <chrono>
#include <thread>

using namespace std;

mutex mtx;

Debounce::Debounce()
{
}

Debounce::~Debounce()
{
}

void Debounce::timerfunction()
{
    while (std::chrono::high_resolution_clock::now() < endTime)
    {
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    this->Execute();
}

void Debounce::Start(DebounceEvent debounceEvent, int Delay)
{
    unique_lock<mutex> lock(mtx);
    auto iter = find(this->eventVector.begin(), this->eventVector.end(), debounceEvent);

    if ((iter) == this->eventVector.end())
        this->eventVector.push_back(debounceEvent);
    mtx.unlock();

    auto start_time = chrono::high_resolution_clock::now();
    auto end_time = start_time + seconds(Delay);

    if (!this->timeThread.joinable())
    {
        this->timeThread = thread(this->timerfunction);
        timeThread.detach();
    }
}

void Debounce::Reset()
{
    unique_lock<mutex> lock(mtx);
    this->eventVector.clear();
    mtx.unlock();
}

void Debounce::Execute()
{
    unique_lock<mutex> lock(mtx);
    for (auto event : this->eventVector)
    {
        event.Execute();
    }
    mtx.unlock();

    Reset();
}
