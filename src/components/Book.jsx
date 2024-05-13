import styled from "styled-components"
import BookInfo from "./BookInfo"

const BookCompo = styled.div`
  height: 25rem;
  width: 100%;
  background-color: #ffffff;
  border-radius: 7px;
  margin: 8rem 0;
`
const BestSellerText = styled.span`
  margin: 2rem;
  font-size: 1rem;
`

const BookInfos = styled.div`
  display: flex;
  margin: 3rem;
`

export default function Book() {
  return (
    <BookCompo>
      <BestSellerText>베스트 셀러</BestSellerText>
      <BookInfos>
        <BookInfo />
      </BookInfos>
    </BookCompo>
  )
}