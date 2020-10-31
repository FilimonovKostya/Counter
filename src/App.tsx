import React from "react";
import "./App.css";
import { BlockSettings } from "./components/BlockSettings";
import { BlockWindow } from "./components/BlockWindow";

function App() {
  const [inputStartValue, setInputStartValue] = React.useState(
    Number(localStorage.getItem("start"))
  );
  const [inputMaxValue, setInputMaxValue] = React.useState(
    Number(localStorage.getItem("max"))
  );

  const [count, setCount] = React.useState(inputStartValue);

  const [disabled, setDisabled] = React.useState(true);

  function inc() {
    count < inputMaxValue && setCount(count + 1);

    localStorage.setItem("count", count.toString());
  }

  function res() {
    setCount(inputStartValue);
  }

  function set() {
    setCount(inputStartValue);
    setDisabled(true);

    localStorage.setItem("start", inputStartValue.toString());
    localStorage.setItem("max", inputMaxValue.toString());
  }

  return (
    <div className={"App"}>
      <BlockSettings
        setInputStartValue={setInputStartValue}
        setInputMaxValue={setInputMaxValue}
        startValue={inputStartValue}
        maxValue={inputMaxValue}
        set={set}
        disabled={disabled}
        setDisabled={setDisabled}
        count={count}
      />

      <BlockWindow
        inc={inc}
        res={res}
        inputStartValue={inputStartValue}
        inputMaxValue={inputMaxValue}
        count={count}
        setDisabled={setDisabled}
        disabled={!disabled}
        maxValue={inputMaxValue}
      />
    </div>
  );
}

export default App;
