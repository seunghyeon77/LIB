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
        <Img src="public\images\로봇_아이콘-removebg-preview.png" />
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
