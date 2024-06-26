import { BookInfoImg, BookInfos, TitleText } from "../../styles/Main/BookStyle";
import styled from "styled-components";

export default function RecordHistory() {
  return (
    <RecordHistoryDiv>
      <TitleText>최근 기록 히스토리</TitleText>
      <RecordHistoryBooks>
        <RecordHistoryBook src="https://image.yes24.com/goods/112013526/XL"/>
        <RecordHistoryBook src="https://image.yes24.com/goods/112013526/XL"/>
        <RecordHistoryBook src="https://image.yes24.com/goods/112013526/XL"/>
        <RecordHistoryBook src="https://image.yes24.com/goods/112013526/XL"/>
        <RecordHistoryBook src="https://image.yes24.com/goods/112013526/XL"/>
      </RecordHistoryBooks>
    </RecordHistoryDiv>
  )
}
const RecordHistoryDiv = styled.div`
  margin: 5rem 0;
`
const RecordHistoryBooks = styled(BookInfos)`
  height: 20rem;
  justify-content: center;
  background: none;
`
const RecordHistoryBook = styled(BookInfoImg)`
  margin: 0 1.3rem;
`