import styled from "styled-components";

export default function Progress() {
  const GoalRecord = 20 // 회원 가입 때 사용자가 목표 기록수를 입력(useState로 저장예정)
  let CurrentRecord = 6 // 사용자가 기록을 저장할 때마다 +1 (useState로 저장예정)
  return (
    <ProgressDiv>
      <ProgressCurrentRecord>현재 {CurrentRecord}기록 / {GoalRecord}기록</ProgressCurrentRecord>{" "}
      <ProgressImgDiv>
        <ProgressImg
          src="src\imgs\image_53progress-removebg-preview.png"
          alt="Progress"
        />
      </ProgressImgDiv>
    </ProgressDiv>
  );
}
const ProgressDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 26px;
`;
const ProgressCurrentRecord = styled.h3`
  font-size: 20px;
  margin: 10px;
`;
const ProgressImgDiv = styled.div`
  margin-top: 40px;
  width: 80%;
  display: flex;
  justify-content: flex-start;
`
const ProgressImg = styled.img`
  width: 150px;
  height: 150px;
`;