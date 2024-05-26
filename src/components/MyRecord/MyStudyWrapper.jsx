import styled from "styled-components";
import MyStudy from "./MyStudy";
import { useState } from "react";

export default function MyStudyWrapper() {
  const [studyList, setStudyList] = useState([]); // 나의 서재에 있는 책들을 저장할 state
  const [isShowMore, setIsShowMore] = useState(false); // 클릭하면 더보기가 true가 된다.
  const MoreButtonClick = (event) => {
    event.preventDefault(); // 아직 백엔드에 요청하지 않으므로 막아둔다.
  };
  return (
    <div style={{ margin: "1.7rem 0" }}>
      <MyStudyTitle>나의 서재</MyStudyTitle>
      <MyStudysWrapper>
        <MyStudys>
          <MyStudy />
          <MyStudy />
          <MyStudy />
          <MyStudy />
          <MyStudy />
          <MyStudy />
          <MyStudy />
          <MyStudy />
          <MyStudy />
          <MyStudy />
        </MyStudys>
        <ButtonForm>
          <Button onClick={MoreButtonClick}>더 보기</Button>
        </ButtonForm>
      </MyStudysWrapper>
    </div>
  );
}
const MyStudyTitle = styled.h3`
  margin: 1rem 2rem;
  font-size: 1.1rem;
`;
const MyStudysWrapper = styled.div`
  width: 100%;
  height: 38rem;
  background-color: #ffffff;
  border-radius: 7px;
`;
const MyStudys = styled.div`
  margin: 0.8rem 4.8rem;
  display: flex;
  flex-wrap: wrap;
`;
const ButtonForm = styled.form`
  display: flex;
  justify-content: flex-end;
  margin: 0 7rem;
`;
const Button = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #4eac27;
  cursor: pointer;
`;
