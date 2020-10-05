import React from 'react';
import Window from "./Window";
import CleverButtons from "../Block-Settings/CleverButtons";

function WindowCounter() {
    return <div className={'wrapper'}>
        <Window/>

        <div className={'incReset'}>
            <CleverButtons title={'Inc'}/>
            <CleverButtons title={'Reset'}/>
        </div>

    </div>
}

export default WindowCounter