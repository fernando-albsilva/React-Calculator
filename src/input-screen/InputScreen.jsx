import React from 'react';
import "./InputScreen.css";

const InputScreen = (props) => {
    return (
        <div className='InputScreen'>
            <h1>{props.expression}</h1>
        </div>
    )
}

export default InputScreen;