#include "Debounce.EventArg.h"

DebounceEvent::DebounceEvent()
{
    isRunning = false;
}

virtual void AFunctionEvent::Execute()
{
    printf("AFuntion");
};

virtual bool AFunctionEvent::CanExecute()
{
    return true;
};

virtual void BFunctionEvent::Execute()
{
    printf("BFuntion");
};

virtual bool BFunctionEvent::CanExecute()
{
    return true;
};

virtual void ABFunctionEvent::Execute();
{
    printf("ABFuntion");
};

virtual bool ABFunctionEvent::CanExecute()
{
    return true;
};
