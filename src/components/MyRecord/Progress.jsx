import { useState } from "react";
import styled from "styled-components";

export default function Progress() {
  const [goalRecord, setGoalRecord] = useState(20); // 회원가입할 떄 설정한 값을 가져온다.
  const [currentRecord, setCurrentRecord] = useState(10); // 기록을 할 떄마다 1씩 늘어난다.
  const progressPersentage = (currentRecord / goalRecord) * 100;
  const imgIndex = Math.min( 
    Math.floor(progressPersentage / 14), // %로 표현된 progressPersentage를 14으로 나눠 7개의 book이미지에 맞게 정수로 나타낸다. 
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
  "https://github.com/JNU-econovation/LIB_FE/assets/144216731/f908b07b-7f19-4844-937b-56268cd4e5cd",
  "https://github.com/JNU-econovation/LIB_FE/assets/144216731/dd3adf0d-c072-43b3-a684-db64c5e51e2e",
  "https://github.com/JNU-econovation/LIB_FE/assets/144216731/8676c614-78c9-48a9-962c-fbf3c2196601",
  "https://github.com/JNU-econovation/LIB_FE/assets/144216731/a69caa2e-5453-4589-95c5-52dcebee9182",
  "https://github.com/JNU-econovation/LIB_FE/assets/144216731/0dbba83a-c8c4-45c3-b09f-5cb0e7a3ea04",
  "https://github.com/JNU-econovation/LIB_FE/assets/144216731/36fb5372-68f3-4382-9f06-31a866c9be45",
  "https://github.com/JNU-econovation/LIB_FE/assets/144216731/5f1726fe-0f68-4546-affc-822cb361fd6d",
];
const ProgressDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
`;
const ProgressCurrentRecord = styled.h3`
  font-size: 20px;
`;
const ProgressImgDiv = styled.div`
  width: 50rem;
  margin: 40px 0 0;
  border-bottom: 3px solid #F3F3F3;
`;
const ProgressImg = styled.img`
  height: 10rem;
`;
