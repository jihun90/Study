#include "Debounce.EventArg.h"
#include <stdio.h>

using namespace std;

void AFunctionEvent::Execute()
{
    printf("AFuntion");
}

bool AFunctionEvent::CanExecute()
{
    return true;
}

void BFunctionEvent::Execute()
{
    printf("BFuntion");
}

bool BFunctionEvent::CanExecute()
{
    return true;
}

void ABFunctionEvent::Execute()
{
    printf("ABFuntion");
}

bool ABFunctionEvent::CanExecute()
{
    return true;
}
