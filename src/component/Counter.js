import React, { useState } from "react";
/**
 * 실시간으로 +1 -1을 누르면 값이 변경되는 컴포넌트
 */
function Counter() {
    // [현재 변하고 있는 값을 인지할 수 있는 변수, state 변경하기 setter 함수]
    const [number, setNumber] = useState(0);
    const onClickUp = () => {
        setNumber(number+1);
    }

    const onClickDown = () => {
        setNumber(number-1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onClickUp}>+1</button>
            <button onClick={onClickDown}>-1</button>
        </div>
    )
}

export default Counter;