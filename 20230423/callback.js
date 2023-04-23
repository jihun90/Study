
//I want to Asynchronous Processing!!!
function ExecuteCallBackFuncToUseForName(name, callBackFunc)
{
    setTimeout(() => {
        console.log("1 sec later...")
        callBackFunc(name);
    }, 1000);
};

ExecuteCallBackFuncToUseForName("Kim", 
                                (name) => {
                                    console.log("I am " + name);
                                });

