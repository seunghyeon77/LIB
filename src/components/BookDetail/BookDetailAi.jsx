import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";

import {
  AiBooks,
  BookInfoImg,
  BookInfoText,
  BookTitle,
  BookWriter,
  Img,
  SlickItem,
  TitleText,
} from "../../styles/Main/BookStyle";
import { BookDetailinfoDiv } from "./BookDetailInfo";
import BookTitlelimit from "../BookTitlelimit";
import { Link } from "react-router-dom";

export default function BookDetailAi({ bookId }) {
  const [aiBookInfos, setAiBookInfos] = useState([]);
  const AibooksApi = async () => {
    try {
      const response = await axiosInstance.get(
        `recommend/detail/${bookId.bookId}`
      );
      setAiBookInfos(response.data.response);
    } catch (err) {
      console.error(err);
    } 
  };
  useEffect(() => {
    AibooksApi();
  }, [bookId]);

  return (
    <BookDetailinfoDiv>
      <TitleText style={{ marginTop: "1.3rem" }}>
        <Img src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/860f40e6-4cb5-487c-a8f2-213ecd22b8aa" />
        이 책과 유사한 책들을 소개해드릴게요!
      </TitleText>
      <AiBooks>
        {aiBookInfos.map((aiBookInfo) => (
          <SlickItem key={aiBookInfo.bookId}>
            <Link to={`/books/${aiBookInfo.bookId}`}>
              <BookInfoImg src={aiBookInfo.bookCover} alt="bookimg" />
            </Link>
            <BookInfoText>
              <BookTitle>
                <BookTitlelimit
                  bookTitle={aiBookInfo.bookName}
                  TextLimitAccount={9}
                />
              </BookTitle>
              <BookWriter>
                <BookTitlelimit
                  bookTitle={aiBookInfo.authorPub}
                  TextLimitAccount={8}
                />
              </BookWriter>
            </BookInfoText>
          </SlickItem>
        ))}
      </AiBooks>
    </BookDetailinfoDiv>
  );
}
