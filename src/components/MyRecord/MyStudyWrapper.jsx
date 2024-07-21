import styled from "styled-components";
import { useEffect, useState } from "react";

import MyStudy from "./MyStudy";
import { RecordTitle } from "./RecordWrapper";
import { axiosInstance } from "../../api/axiosInstance";

export default function MyStudyWrapper() {
  const [studysLists, setStudyList] = useState([]); // 나의 서재에 있는 책들을 저장할 state
  // const [isShowbutton, setIsShowbutton] = useState(false);
  const studysApi = async () => {
    try {
      const response = await axiosInstance.get("/bookshelves");
      setStudyList(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    studysApi();
  }, []);
  console.log(studysLists)
  return (
    <div style={{ margin: "1.7rem 0" }}>
      <MyStudysWrapper>
        <RecordTitle>나의 서재</RecordTitle>
          <MyStudys>
            <MyStudy studyLists={studysLists} />
          </MyStudys>
        {/* <MoreButtonForm>
          <MoreButton
            onClick={() => {
              setIsShowbutton(!isShowbutton);
            }}
          >
            {!isShowbutton ? "더보기" : "접기"}
          </MoreButton>
        </MoreButtonForm> */}
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
  flex-wrap: wrap;
`;
// 더 보기 버튼 스타일
export const MoreButtonForm = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 7rem;
`;
export const MoreButton = styled.p`
  background: none;
  border: none;
  font-size: 1rem;
  color: #e86a33;
  cursor: pointer;
`;
