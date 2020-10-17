import React, {ChangeEvent} from "react";

type InputPropsType = {

}


export function Inputs(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }

    return <div className={'valueInput'}>
        <span> dad </span>
        <input type="number"  onChange={onChangeHandler}/>
    </div>

}