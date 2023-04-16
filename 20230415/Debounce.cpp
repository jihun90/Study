#include "Debounce.h"

#include <vector>
#include <chrono>
#include <thread>
#include <algorithm>

using namespace std;

mutex mtx;

Debounce::Debounce()
{
}

Debounce::~Debounce()
{
}

void Debounce::CreateObject()
{
    if (instance == nullptr)
    {
        instance = new Debounce();
    }
}

Debounce *Debounce::GetInstance()
{
    if (instance == nullptr)
    {
        instance = new Debounce();
    }
    return instance;
}

void Debounce::timerfunction()
{
    while (std::chrono::high_resolution_clock::now() < endTime)
    {
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    Notify();
    Reset();
}

void Debounce::Execute(IDebounceEvent *debounceEvent, int delay)
{
    unique_lock<mutex> lock(mtx);
    // vector<IDebounceEvent>::iterator it = find(Debounce::eventVector.begin(), Debounce::eventVector.end(), debounceEvent);

    // if (it == Debounce::eventVector.end())
    eventVector.push_back(debounceEvent);

    startTime = chrono::high_resolution_clock::now();
    endTime = startTime + std::chrono::seconds(delay);
    mtx.unlock();
    thread timeThread(timerfunction);
    timeThread.detach();
}

void Debounce::Reset()
{
    unique_lock<mutex> lock(mtx);
    eventVector.clear();
    mtx.unlock();
}

void Debounce::Notify()
{
    unique_lock<mutex> lock(mtx);
    int vectorSize = eventVector.size();
    for (int i = 0; i < vectorSize; i++)
    {
        (*eventVector[i]).Execute();
    }
    mtx.unlock();
}
