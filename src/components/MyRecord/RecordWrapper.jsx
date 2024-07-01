import styled from "styled-components";
import Record from "./Record";

export default function RecordWrapper() {
  return (
    <div style={{ margin: "1.7rem 0" }}>
      <RecordsWrapper>
        <RecordTitle>현재 {}개의 기록을 작성했습니다.</RecordTitle>
        <Records>
          <Record />
        </Records>
      </RecordsWrapper>
    </div>
  );
}
export const RecordTitle = styled.h3`
  font-size: 1.1rem;
  padding: 2.5rem 0 0 3rem;
`;
const RecordsWrapper = styled.div`
  width: 1050px; // 100%
  height: 790px; // 46rem
  background-color: #ffffff;
  border-radius: 7px;
`;
const Records = styled.div`
  margin: 0 4.8rem;
`;
