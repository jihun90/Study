# 비동기 처리

## 1. Callback을 이용한 비동기 처리

```Javascript
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
```

- Call Back 함수와 setTimeOut을 이용하여 비동기 처리가 가능
- Call Back 함수가 중첩적으로 불리게 된다면 너무 복잡할 것이다.

## 2. Promise 이용한 비동기 처리

```Javascript
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
```

- 1.과 동일한 코드를 Promise를 이용해 보았다.
- Promise는 Call Back 함수를 중첩하여 비동기처리를 개선하기 위해 나왔다고 한다.
- **new Promise** 를 생성하여 미래의 값을 리턴하였고, 성공(**resolve**)과 실패(**reject**)에 따라서 로직을 적용할수 있다.
- fetch를 사용할때 많이 사용되며 아래와 같이 Promise Method Chain을 사용할수 있다. (아래 코드 안될걸? 예시는 예시!)

```Javascript
fetch("https://www.naver.com/")
  .then((response) => response.json())
  .then((post) => post.url)
  .then((url) => {console.log(url); return fetch("https://dict.naver.com/");})
  .then((url) => {console.log("sucess - " + url); return response.json();})
  .catch((error) => console.log("error:", error));
```

- 비동기 처리 방식에 **async/await** 을 가장 많이 사용한다던데, 이것은 나중에 알아보도록 하자!
