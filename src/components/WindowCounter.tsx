import React from "react";

type WindowCounterPropsType = {
  startValue: number;
  count: number;
  maxValue: number;
  disabled: boolean;
};

export function WindowCounter(props: WindowCounterPropsType) {
  return (
    <div
      className={
        props.count < props.maxValue
          ? "blockValues window startValue"
          : "blockValues window max"
      }
    >
      {" "}
      {!props.disabled ? props.count : "Change Value and Set"}{" "}
    </div>
  );
}
