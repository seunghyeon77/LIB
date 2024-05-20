import styled from "styled-components";
import Record from "./Record";

export default function RecordWrapper() {
  return (
    <RecordWrapperDiv>
      <h3>현재 개의 기록을 작성했습니다.</h3>
      <Record />
    </RecordWrapperDiv>
  )
}
const RecordWrapperDiv = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #ffffff;
`

