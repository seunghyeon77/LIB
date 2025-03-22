import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";

import StarNumber from "./starNumber";
import {
  BookInfoGenre,
  BookInfos,
  BookInfoTitle,
} from "../../styles/Main/BookStyle";
import { BookDetailInfos } from "../BookDetail/BookDetailInfo";

export default function RecordPageToDetail({ bookRecordInfos, bookId }) {
  const bookRecordArrayInfos = [bookRecordInfos.bookRecordInfos];
  const [rating, setRating] = useState(0);
  const textAreaContent = useRef();

  const inputTextArea = (event) => {
    textAreaContent.current = event.target;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const recordContent = textAreaContent.current.value;

    const data = {
      // 백엔드에 보낼 데이터
      recordContent,
      rating,
    };
    console.log(data);
    try {
      const response = await axiosInstance.post(`/records/${bookId}`, data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error(error);
    }
    alert("나의 기록 페이지에 저장되었습니다 :)");
    navigator("/");
    console.log(data);
  };

  const navigator = useNavigate(); // 취소하기 버튼을 눌렀을 때
  const delbtn = () => {
    if (
      confirm("작성하신 내용은 저장되지 않습니다. 그래도 취소하시겠습니까?")
    ) {
      navigator("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {bookRecordArrayInfos.map((bookRecordInfo) => (
        <BookDetailInfo key={bookRecordInfo.bookId}>
          <BookRecordimg name='bookCover' src={bookRecordInfo.bookCover} />
          <BookDetailInfos
            style={{
              height: "12rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <BookInfoTitle name='bookName'>
                {" "}
                {bookRecordInfo.bookName}{" "}
              </BookInfoTitle>
              <BookInfoGenre name='authorCatePub'>
                {" "}
                {bookRecordInfo.authorCatePub}{" "}
              </BookInfoGenre>
            </div>

            <StarNumber name='rating' rating={rating} setRating={setRating} />
          </BookDetailInfos>
        </BookDetailInfo>
      ))}
      <Textareas>
        <Textarea name='recordContent' onChange={inputTextArea} />
        <Buttons>
          <Button
            style={{ border: "1px solid #888888", backgroundColor: "#ffffff" }}
            onClick={delbtn}
          >
            취소하기
          </Button>
          <Button
            style={{
              border: "1px solid",
              backgroundColor: "#4dac27",
              color: "#ffffff",
            }}
            type='submit'
          >
            기록하기
          </Button>
        </Buttons>
      </Textareas>
    </form>
  );
}
const BookDetailInfo = styled(BookInfos)`
  height: 11rem;
  margin: 4rem 0;
  border: none;
  display: flex;
`;
const BookRecordimg = styled.img`
  width: 10.5rem;
  height: 13.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
`;
const Textareas = styled.div`
  display: flex;
  flex-direction: column;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 30rem;
  max-height: 40rem;
  font-size: 1.3rem;
  resize: none;
  border: 1px solid;
  border-radius: 2px;
  padding: 1.2rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
`;
const Button = styled.button`
  width: 100px;
  height: 45px;
  padding: 0 24px;
  border-radius: 2px;
  cursor: pointer;
`;
