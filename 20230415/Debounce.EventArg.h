// typedef void (*EventHandler)();
// typedef bool (*CanExecute)();
#define interface struct

#include <stdio.h>
using namespace std;

interface IDebounceEvent
{
public:
    virtual void Execute() = 0;
    virtual bool CanExecute() = 0;
};

class DebounceEvent : public IDebounceEvent
{
public:
    DebounceEvent(){};
    virtual ~DebounceEvent(){};
    virtual void Execute(){};
    virtual bool CanExecute() { return false; };
};

class AFunctionEvent : public DebounceEvent
{
public:
    ~AFunctionEvent(){};
    virtual void Execute();
    virtual bool CanExecute();
};

class BFunctionEvent : public DebounceEvent
{
public:
    BFunctionEvent();
    ~BFunctionEvent(){};
    virtual void Execute();
    virtual bool CanExecute();
};

class ABFunctionEvent : public DebounceEvent
{
public:
    ~ABFunctionEvent(){};
    virtual void Execute();
    virtual bool CanExecute();
};