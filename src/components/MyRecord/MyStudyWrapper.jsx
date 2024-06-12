import styled from "styled-components";
import MyStudy from "./MyStudy";
import { useState } from "react";
import { RecordTitle } from "./RecordWrapper";

export default function MyStudyWrapper() {
  const [studyList, setStudyList] = useState([]); // 나의 서재에 있는 책들을 저장할 state
  const [isShowMore, setIsShowMore] = useState(false); // 클릭하면 더보기가 true가 된다.
  const MoreButtonClick = (event) => {
    event.preventDefault(); // 아직 백엔드에 요청하지 않으므로 막아둔다.
  };
  return (
    <div style={{ margin: "1.7rem 0" }}>
      <MyStudysWrapper>
        <RecordTitle>나의 서재</RecordTitle>
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
        <MoreButtonForm>
          <MoreButton onClick={MoreButtonClick}>더 보기</MoreButton>
        </MoreButtonForm>
      </MyStudysWrapper>
    </div>
  );
}
const MyStudysWrapper = styled.div`
  width: 1050px; // 100%
  height: 710px; // 46rem
  background-color: #ffffff;
  border-radius: 7px;
`;
const MyStudys = styled.div`
  margin: 0.8rem 6.5rem;
  padding: 1rem 0 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
// 더 보기 버튼 스타일
export const MoreButtonForm = styled.form`
  display: flex;
  justify-content: flex-end;
  margin: 0 7rem;
`;
export const MoreButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #E86A33;
  cursor: pointer;

`;
