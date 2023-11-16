import React, { useState } from "react";

export const ManyInputSample = () =>{
    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    })

    const {name, nickName} = inputs; // 비구조화 할당을 통해 값을 추출

    const onChange = (e) => {
        console.log(e)
        const { value, name } = e.target;
        setInputs({
            ...inputs, //기존의 있었던 inputs 변환하는 값을 복사한 뒤
            [name]: value // 그안에 name 키값을 e.target을 있는 value 설정
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickName: ''
        })
    }

    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder="이름"/>
            <input name="nickName" onChange={onChange} value={nickName} placeholder="닉네임"/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickName})
            </div>
        </div>
    )
}