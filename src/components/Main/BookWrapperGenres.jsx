import styled from "styled-components";
import CarouselBest from "../carousel/CarouselBest";

export default function BookWrapperGenres() {
  return (
    <Book>
      <BookGenres>
        <BookGenre>인문</BookGenre>
        <BookGenre>소설</BookGenre>
        <BookGenre>철학</BookGenre>
        <BookGenre>경영 / 경제</BookGenre>
        <BookGenre>시 / 에세이</BookGenre>
        <BookGenre>IT</BookGenre>
      </BookGenres>
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

  const BookGenres = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  ` 
  const BookGenre = styled.button`
    margin: 0 3rem 1.3rem;
    font-size: 1.1rem;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      color: #E86A33;
    }
  `
