import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { Book, BookInfos } from "../../styles/Main/BookStyle";
import CarouselGenre from "../carousel/CarouselGenre";
import { carouselGenre } from "../../api/mainApis";

export default function BookWrapperGenres() {
  const genreToCategory = [
    "경제 경영",
    "IT 모바일",
    "가정 살림",
    "건강 취미",
    "사회 정치",
    "인문",
  ];

  const [selectGenre, setSelectGenre] = useState("경제 경영"); // 클릭했을 때 해당 장르 저장 state
  const onClickGenre = (genre) => {
    setSelectGenre(genre);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["books", selectGenre],
    queryFn: () => carouselGenre(selectGenre),
  });

  if (isLoading) return <span>책 정보를 가져오는 중입니다...</span>;
  if (isError) return <span>{error.message}</span>;

  return (
    <Book>
      <BookGenres>
        {genreToCategory.map((bookGenre, index) => (
          <div key={index}>
            <BookGenre onClick={() => onClickGenre(bookGenre)}>
              {bookGenre}
            </BookGenre>
          </div>
        ))}
      </BookGenres>
      <BookInfos>
        <CarouselGenre records={data.data.response} />
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
