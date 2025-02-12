import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { Book, BookInfos, TitleText } from "../../styles/Main/BookStyle";
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
    queryKey: ["booksGenre", selectGenre],
    queryFn: () => carouselGenre(selectGenre),
  });

  if (isLoading) return <span>책 정보를 가져오는 중입니다...</span>;
  if (isError) return <span>{error.message}</span>;

  return (
    <Book>
      <BookGenres>
        <TitleText>카테고리별 종류</TitleText>
        {genreToCategory.map((bookGenre, index) => (
          <div key={index}>
            <BookGenre
              onClick={() => onClickGenre(bookGenre)}
              isSelected={selectGenre === bookGenre}
            >
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
  align-items: center;
  column-gap: 2rem;
  margin-bottom: 20px;
`;
const BookGenre = styled.p`
  font-size: 1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#e86a33" : "inherit")};
  &:hover {
    color: #e86a33;
  }
`;
