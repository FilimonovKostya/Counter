import React from "react";
import { Input } from "./Input";
import { CleverButtons } from "./CleverButtons";

type BlockSettingsPropsType = {
  setInputStartValue: (value: number) => void;
  setInputMaxValue: (value: number) => void;
  startValue: number;
  maxValue: number;
  set: () => void;
  disabled: boolean;
  setDisabled: (boolean: boolean) => void;
  count: number;
};

export function BlockSettings(props: BlockSettingsPropsType) {
  return (
    <div className={"wrapper"}>
      <div className={"blockValues settings"}>
        <Input
          title={"Start Value"}
          classNameInput={"inputStart"}
          classNameBlock={"startValue"}
          inputValue={props.setInputStartValue}
          startValue={props.startValue}
          maxValue={props.maxValue}
          setDisabled={props.setDisabled}
          countValue={props.count}
          value={props.startValue}
        />

        <Input
          title={"Max Value"}
          classNameInput={"inputMax"}
          classNameBlock={"maxValue"}
          inputValue={props.setInputMaxValue}
          startValue={props.startValue}
          maxValue={props.maxValue}
          countValue={props.count}
          setDisabled={props.setDisabled}
          value={props.maxValue}
        />
      </div>

      <div className={"blockSettings"}>
        <CleverButtons
          title={"Set"}
          settings={props.set}
          setDisabled={props.setDisabled}
          disabled={
            props.startValue === props.maxValue ||
            props.startValue > props.maxValue ||
            props.startValue < 0 ||
            props.maxValue < 0
              ? !props.disabled
              : props.disabled
          }
          maxValue={props.maxValue}
          count={props.count}
        />
      </div>
    </div>
  );
}
