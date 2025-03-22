import styled from "styled-components";
import Progress from "./Progress";
import { RecordTitle } from "./RecordWrapper";

export default function ProgressWrapper() {
  return (
    <div style={{ margin: "3rem 0" }}>
      <ProgressWrapperDiv>
        <RecordTitle>목표 게이지</RecordTitle>
        <Progress />
      </ProgressWrapperDiv>
    </div>
  );
}

const ProgressWrapperDiv = styled.div`
  width: 100%; // 100%
  height: 23.75rem; // 46rem
  background-color: #ffffff;
  margin: 10rem 0;
`;
