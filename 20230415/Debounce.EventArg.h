typedef void (*EventHandler)();
typedef bool (*CanExecute)();

class DebounceEvent
{
public:
    DebounceEvent(EventHandler eventHandler, CanExecute canExecute);
    ~DebounceEvent();
    void Execute();

private:
    EventHandler eventHandler;
    CanExecute canExecute;
};