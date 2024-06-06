import styled from "styled-components"

export default function MyStudy() {
  return (
    <MyStudyDiv>
      <BookInfoImg src="https://image.yes24.com/goods/112013526/XL" alt="BookImg"/>
      <BookInfoText>
        <BookInfoTitle>니체의 말</BookInfoTitle>
      </BookInfoText>
    </MyStudyDiv>
  )
}
const MyStudyDiv = styled.div`
  margin: 2.5rem 1rem 0;
`
const BookInfoImg = styled.img` // 메인 페이지와 책 크기 다름
  width: 8.5rem;
  height: 12.5rem;
  filter: drop-shadow(#6c6c6c 0 2px 4px);
`;
const BookInfoText = styled.div`
  display: flex;
  flex-flow: nowrap column;
`
const BookInfoTitle = styled.span`
  font-size: 1rem;
  margin: 0.7rem 0;
`
