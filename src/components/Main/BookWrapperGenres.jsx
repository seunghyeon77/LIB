import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import styled from "styled-components";

import { Book, BookInfos } from "../../styles/Main/BookStyle";
import CarouselGenre from "../carousel/CarouselGenre";

export default function BookWrapperGenres() {
  const genreToCategory = ({
    "경영 | 경제": 1,
    "IT | 모바일": 2,
    "가정 | 살림": 3,
    "건강 | 취미": 4,
    "사회 | 정치": 8,
    "인문": 16,
});

  const [genreBooks, setGenreBooks] = useState([]); // 책 정보들을 저장할 state
  const [selectGenre, setSelectGenre] = useState('경영 | 경제') // 클릭했을 때 해당 장르 저장 state
  
  const onClickGenre = (genre) => {
    setSelectGenre(genre)
  }

  const booksApi = async () => {
    if (selectGenre) {
      const categoryId = genreToCategory[selectGenre];
      try {
        const response = await axiosInstance.get(`/books/categorys?categoryId=${categoryId}`);
        setGenreBooks(response.data.response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    booksApi();
  }, [selectGenre]);

  return (
    <Book>
      <BookGenres>
        {Object.keys(genreToCategory).map((bookGenre, index) => (
          <div key={index}>
            <BookGenre onClick={() => onClickGenre(bookGenre)}> {bookGenre} </BookGenre>
          </div>
        ))}
      </BookGenres>
      <BookInfos>
        <CarouselGenre genreBooks={genreBooks} />
      </BookInfos>
    </Book>
  );
}
const BookGenres = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; 
`;
const BookGenre = styled.p`
  margin: 0 3rem 1.3rem;
  font-size: 1.1rem;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: #e86a33;
  }
`;
