import styled from "styled-components";
import Progress from "./Progress";

export default function ProgressWrapper() {
  return (
    <div style={{margin: '3rem 0'}}>
      <RecordProgress>목표 게이지</RecordProgress>
      <ProgressWrapperDiv>
        <Progress />
      </ProgressWrapperDiv>
    </div>
  );
}
const RecordProgress = styled.h3`
  margin: 1rem 2rem;
  font-size: 1.1rem;
`;
const ProgressWrapperDiv = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #ffffff;
`;
