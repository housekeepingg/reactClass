// useState을 사용해서 화면에 맨처음 초기값 2가 버튼을 클릭할때마다 2의 진수만큼 늘어나기(계속 곱하기 2을 하면 된다)
// 초기화 버튼을 누르면 초기화 되게 // 예시( 2 → 4 → 8 → 16 → 32 …..)

import { useState } from "react";
import styled from "styled-components";

const BoxWrap = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 35px;
  background-color: lightgray;
  margin: 50px auto;

  p {
    font-size: 50px;
    text-align: center;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 200px;
  background-color: #333;
  border-radius: 5px;
  margin: 30px auto;
  text-align: center;
  line-height: 200px;
  font-size: 50px;
  b {
    color: antiquewhite;
  }
`;

const BtnWrap = styled.div`
  width: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 1px solid #333;
  background-color: #333;
  color: white;
  font-size: 20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export const PlusTwo = () => {
  const [plus, setPlus] = useState(2);

  const changeTwo = (e) => {
    setPlus(e.target.value);
  };

  const onClickPlus = (e) => {
    setPlus(plus * 2);
  };

  const reset = () => {
    setPlus(2);
  };

  return (
    <BoxWrap>
      <p>. . . .</p>

      <Box onChange={changeTwo} value={plus}>
        <b>{plus}</b>
      </Box>

      <BtnWrap>
        <Button onClick={onClickPlus}>곱하기</Button>
        <Button onClick={reset}>초기화</Button>
      </BtnWrap>
    </BoxWrap>
  );
};
