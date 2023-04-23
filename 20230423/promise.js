//convert callback.jsusing promise

//I want to Asynchronous Processing!!!
function ExecuteFuncUsingPromise(name)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1 sec later...")
            if (name === "") reject(new Error("No Name..!"));
            else resolve(name);
        }, 1000);
        

    });
};

ExecuteFuncUsingPromise("Kim").then((name) => console.log("I am " + name))
                              .catch((error) => console.log(error));
                                    
ExecuteFuncUsingPromise("").then((name) => console.log("I am " + name))
                            .catch((error) => console.log(error));

