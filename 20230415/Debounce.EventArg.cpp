#include "Debounce.EventArg.h"

DebounceEvent::DebounceEvent(EventHandler eventHandler, CanExecute canExecute)
{
    this->eventHandler = eventHandler;
    this->canExecute = canExecute;
}

DebounceEvent::~DebounceEvent()
{
}

void DebounceEvent::Execute()
{
    if (this->canExecute())
    {
        this->eventHandler();
    }
}
