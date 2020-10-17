import React from 'react';
import Window from "./Window";
import CleverButtons from './CleverButtons';


type WindowCounterPropsType = {

}

function WindowCounter(props: WindowCounterPropsType) {
    return <div className={'wrapper'} >
        <Window />

        <div className={'incReset'}>
            <CleverButtons />
            <CleverButtons />
        </div>

    </div>
}

export default WindowCounter