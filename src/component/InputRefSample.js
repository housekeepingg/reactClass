import React, { useState } from "react";

export const InputRefSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })

    const { name, nickname } = inputs;

    const onChange = e => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const Reset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    }

    return(
        <div>
            <input name="name" onChange={onChange} value={name} placeholder="이름" />
            <input name="nickname" onChange={onChange} value={nickname} placeholder="이름" />

            <button onClick={Reset}>초기화</button>

            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}