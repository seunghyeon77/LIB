import styled from "styled-components";
import CarouselBest from "../carousel/CarouselBest";
import { Book, BookInfos } from "../../styles/Main/BookStyle";

export default function BookWrapperBest() {
  return (
    <Book>
      <BestSellerText>
        <Img src="public\책_아이콘-removebg-preview.png" />
        베스트 셀러
      </BestSellerText>
      <BookInfos>
        <CarouselBest />
      </BookInfos>
    </Book>
  );
}
const BestSellerText = styled.h3`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
  font-size: 1.1rem;
  `;
const Img = styled.img`
  width: 2.5rem;
  height: 2rem;
`;
