import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StarNumber from "../Record/starNumber";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";

import { BookInfoGenre, BookInfoTitle } from "../../styles/Main/BookStyle";

export default function BookDetailinfo({ bookInfos, bookId }) {
  const bookDetailInfos = [bookInfos];
  const [bookRecordInfos, setBookRecordInfos] = useState("");
  const navigate = useNavigate();

  const Addbookshelf = async (event) => {
    event.preventDefault();

    const data = {
      bookId,
    };

    try {
      const response = await axiosInstance.post(`/bookshelf/${bookId}`, data);
      console.log("Success:", response.data);
      alert("나의 서재에 추가되었습니다 :)");
    } catch (error) {
      console.error(error);
    }
  };

  const MoveRecord = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.get(`/records/${bookId}`);
      setBookRecordInfos(response.data.response);
      console.log(bookRecordInfos);
      navigate(`/records/${bookId}`, {
        state: { bookRecordInfos: response.data.response },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const accessToken = localStorage.getItem("accessToken");

  return (
    <BookDetailinfoDiv>
      {bookDetailInfos.map((bookInfo) => (
        <BookInfos key={bookInfo.bookId}>
          <BookInfoImg src={bookInfo.bookCover} alt="bookImg" />
          <BookDetailInfos>
            <BookInfoTitle> {bookInfo.bookName} </BookInfoTitle>
            <BookInfoGenre> {bookInfo.authorCate}</BookInfoGenre>
            <StarNumbers />
            <Buttons>
              {accessToken ? (
                <form>
                  {bookInfo.isAdded ? (
                    <Button
                      style={{
                        border: "1px solid #E86A33",
                        backgroundColor: "#ffffff",
                        color: "#E86A33",
                        padding: "0.7rem 1rem",
                      }}
                      onClick={Addbookshelf}
                    >
                      서재에서 삭제
                    </Button>
                  ) : (
                    <Button
                      style={{
                        border: "1px solid #888888",
                        backgroundColor: "#ffffff",
                        padding: "0.8rem 1.1rem",
                      }}
                      onClick={Addbookshelf}
                    >
                      서재에 추가
                    </Button>
                  )}
                  <Button
                    style={{
                      border: "none",
                      backgroundColor: "#539165",
                    }}
                    onClick={MoveRecord}
                  >
                    <Link
                      to={`/records/${bookId.bookId}`}
                      style={{ color: "#ffffff" }}
                    >
                      기록하기
                    </Link>
                  </Button>
                </form>
              ) : (
                <></>
              )}
            </Buttons>
          </BookDetailInfos>
        </BookInfos>
      ))}
    </BookDetailinfoDiv>
  );
}
export const BookDetailinfoDiv = styled.div`
  border-bottom: 0.06rem solid;
`;
const BookInfos = styled.div`
  display: flex;
`;
const BookInfoImg = styled.img`
  width: 14rem;
  height: 19.5rem;
  margin: 0 3rem 4rem 5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
`;
export const BookDetailInfos = styled.div`
  display: flex;
  flex-direction: column;
`;
const Buttons = styled.div`
  margin: 5rem 1rem 1rem;
`;
const Button = styled.button`
  margin-right: 1rem;
  padding: 0.8rem 1.7rem;
  font-size: 1rem;
  border-radius: 7px;
  cursor: pointer;
`;
const StarNumbers = styled(StarNumber)`
  margin: 0;
`;
