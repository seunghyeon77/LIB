import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../api/axiosInstance";

export default function Progress() {
  const [goalRecord, setGoalRecord] = useState(""); 
  const [currentRecord, setCurrentRecord] = useState(""); 
  const progressPersentage = (currentRecord / goalRecord) * 100;
  const imgIndex = Math.min( 
    Math.floor(progressPersentage / 14), // %로 표현된 progressPersentage를 14으로 나눠 7개의 book이미지에 맞게 정수로 나타낸다. 
    bookImgs.length // Math.min을 이용하여 최대 bookImgs 리스트의 길이만큼(7)
  );
  const currentImgIndex = bookImgs[imgIndex - 1];

  const recordCountApi = async () => {
    try {
      const response = await axiosInstance.get("/members/goal");
      setGoalRecord(response.data.response.goalNumber);
      setCurrentRecord(response.data.response.bookRecentCnt);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    recordCountApi();
  }, []);

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
  "public/images/bookImgs/Book1.png",
  "public/images/bookImgs/Book2.png",
  "public/images/bookImgs/Book3.png",
  "public/images/bookImgs/Book4.png",
  "public/images/bookImgs/Book5.png",
  "public/images/bookImgs/Book6.png",
  "public/images/bookImgs/Book7.png",
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
