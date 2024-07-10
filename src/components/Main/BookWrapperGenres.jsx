import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import styled from "styled-components";

import { Book, BookInfos } from "../../styles/Main/BookStyle";
import CarouselGenre from "../carousel/CarouselGenre";

export default function BookWrapperGenres({ClickBookId}) {
  const genreToCategory = ([
    "경제 경영",
    "IT 모바일",
    "가정 살림",
    "건강 취미",
    "사회 정치",
    "인문",
  ]);

  const [genreBooks, setGenreBooks] = useState([]); // 책 정보들을 저장할 state
  const [selectGenre, setSelectGenre] = useState('경영 경제') // 클릭했을 때 해당 장르 저장 state
  
  const onClickGenre = (genre) => {
    setSelectGenre(genre)
  }

  const booksApi = async () => {
    if (selectGenre) {
      try {
        const response = await axiosInstance.get(`/books/categorys?categoryId=${selectGenre}`);
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
        {genreToCategory.map((bookGenre, index) => (
          <div key={index}>
            <BookGenre onClick={() => onClickGenre(bookGenre)}> {bookGenre} </BookGenre>
          </div>
        ))}
      </BookGenres>
      <BookInfos>
        <CarouselGenre genreBooks={genreBooks} ClickBookID={ClickBookId} />
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
