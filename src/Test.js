// input 2개를 가지고 등록 버튼을 누르면 밑에 태그을 이용해서 input 값을 보여주게하다
// 단 등록을 눌렀을떼 input에 값이 초기화되고 계속 추가되어야 한다
// useState useRef map
// spread 문법 비구조화 할당

import { useState } from "react";

export const Test = () => {
  const [names, setNames] = useState([
    { id: "신형만", email: "신형만@naver.com" },
    { id: "봉미선", email: "봉미선@naver.com" },
    { id: "신짱구", email: "신짱구@naver.com" },
    { id: "신짱아", email: "신짱아@naver.com" },
  ]);

  const [inputs, setInputs] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      email: inputs,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputs("");
  };

  const namesList = names.map((name) => <li key={name.id}>{name.email}</li>);

  return (
    <wrap>
      <input value={inputs} onChange={onChange} />

      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </wrap>
  );
};
