import { useState } from "react";
import styled from "styled-components";

export default function Progress() {
  const [goalRecord, setGoalRecord] = useState(20); // 회원가입할 떄 설정한 값을 가져온다.
  const [currentRecord, setCurrentRecord] = useState(14); // 기록을 할 떄마다 1씩 늘어난다.
  const progressPersentage = (currentRecord / goalRecord) * 100;
  const imgIndex = Math.min( 
    Math.floor(progressPersentage / 10), // %로 표현된 progressPersentage를 10으로 나눠 정수만 반환 
    bookImgs.length // Math.min을 이용하여 최대 bookImgs 리스트의 길이만큼(7)
  );
  const currentImgIndex = bookImgs[imgIndex - 1];

  return (
    <ProgressDiv>
      <ProgressCurrentRecord>
        현재 {currentRecord}기록 / {goalRecord}기록
      </ProgressCurrentRecord>{" "}
      <ProgressImgDiv>
        <ProgressImg src={currentImgIndex} />
      </ProgressImgDiv>
    </ProgressDiv>
  );
}
// %에 따른 bokkImg 리스트
const bookImgs = [
  "public/bookImgs/Book1.png",
  "public/bookImgs/Book2.png",
  "public/bookImgs/Book3.png",
  "public/bookImgs/Book4.png",
  "public/bookImgs/Book5.png",
  "public/bookImgs/Book6.png",
  "public/bookImgs/Book7.png",
];
const ProgressDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`;
const ProgressCurrentRecord = styled.h3`
  font-size: 20px;
`;
const ProgressImgDiv = styled.div`
  width: 50rem;
  margin: 40px auto 0;
`;
const ProgressImg = styled.img`
  height: 10rem;
`;
