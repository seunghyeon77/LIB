import styled from "styled-components";
import Record from "./Record";

export default function RecordWrapper() {
  return (
    <div>
      <RecordCount>현재 개의 기록을 작성했습니다.</RecordCount>
      <RecordsWrapper>
        <Records>
          <Record />
          <Record />  
          <Record />
          <Record />
          <Record />
          <Record />
        </Records>
      </RecordsWrapper>
    </div>
  );
}
const RecordCount = styled.h3`
  margin: 1rem 2rem;
  font-size: 1.1rem;
`;
const RecordsWrapper = styled.div`
  width: 100%;
  height: 46rem;
  background-color: #ffffff;
  `;
const Records = styled.div`
  margin: 0 4.8rem;
  display: flex;
  flex-wrap: wrap;
`;
