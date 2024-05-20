import styled from "styled-components";
import CarouselBest from "../carousel/CarouselBest";

export default function BookWrapperBest() {
  return (
    <Book>
      <BestSellerText>베스트 셀러</BestSellerText>
      <BookInfos>
        <CarouselBest />
      </BookInfos>
    </Book>
  );
}

const Book = styled.div`
  margin: 8rem 0;
`;

const BookInfos = styled.div`
  display: flex;
  align-items: center;
  height: 25rem;
  width: 100%;
  background-color: #ffffff;
  border-radius: 7px;
`;
const BestSellerText = styled.h3`
  margin: 1rem 2rem;
  font-size: 1.1rem;
`;