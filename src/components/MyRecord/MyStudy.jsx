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
  margin: 3rem 1.5rem 0;
`
const BookInfoImg = styled.img` // 메인 페이지와 책 크기 다름
  width: 8rem;
  height: 12rem;
`;
const BookInfoText = styled.div`
  display: flex;
  flex-flow: nowrap column;
`
const BookInfoTitle = styled.span`
  font-size: 1rem;
  margin: 0.5rem 0;
`
