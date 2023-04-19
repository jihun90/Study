import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("Created :)");
    return byFn();
  }
  useEffect(() => {
    console.long("hi :)");
    return byFn;
  }, []);
  useEffect(() => {
    console.log("hi :)");
    return;
  }, []);

  useEffect(() => {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  return <h1>Hello</h1>;
}

function CleanUPFunction() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

function UseEffectTest() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    /*if (keyword !== "" && keyword.length > 5) */
    console.log("I run when 'keyword' changes. ", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.", counter);
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Shearch here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CleanUPFunction />
      {/* <UseEffectTest /> */}
    </div>
  );
}

export default App;
