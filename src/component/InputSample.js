import React, { useState } from "react";
/**
 * input usestate을 이용하여
 *  실시간으로 값을 변경
 */
export const InputSample = () => {
    const [text, setText] = useState('');

    const changeValue = (e) => {
        setText(e.target.value);
    }

    const reset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={changeValue} value={text}/>
            <button onClick={reset}>초기화</button>

            <div>
                <b> 값: {text}</b>
            </div>
        </div>
    )
}