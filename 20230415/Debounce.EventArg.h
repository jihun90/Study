typedef void (*EventHandler)();
typedef bool (*CanExecute)();

class IDebounceEvent
{
public:
    virtual void Execute() = 0;
    virtual bool canExecute() = 0;
    virtual bool isRunning() = 0;
};

class DebounceEvent : public IDebounceEvent
{
public:
    virtual void Execute() = 0;
    virtual bool canExecute() = 0;
    virtual bool isRunning();
};

class AFunctionEvent : public DebounceEvent
{
public:
    virtual void Execute();
    virtual bool CanExecute();
};

class BFunctionEvent : public DebounceEvent
{
public:
    virtual void Execute();
    virtual bool CanExecute();
};

class ABFunctionEvent : public DebounceEvent
{
public:
    virtual void Execute();
    virtual bool CanExecute();
};