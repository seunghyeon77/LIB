import styled from "styled-components"

const BookInfoStyle = styled.div`
  display: flex;
  flex-wrap: wrap row;
  justify-content: center;
`
const BookImg = styled.img`
  width: 8rem;
  height: 12rem;
`

export default function BookInfo() {
  return (
    <BookInfoStyle>
      <BookImg src="https://image.yes24.com/goods/112013526/XL" alt="book"/>
      <span>니체의 말</span>
      <span>프리드니히 니체 | 철학 </span>
    </BookInfoStyle>
  )
}