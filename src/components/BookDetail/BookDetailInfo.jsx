import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StarNumber from "../Record/starNumber";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";

import { BookInfoGenre, BookInfoTitle } from "../../styles/Main/BookStyle";

export default function BookDetailinfo({ bookInfos, bookId }) {
  const [isAdded, setIsAdded] = useState(bookInfos.isAdded);
  const [bookRecordInfos, setBookRecordInfos] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (bookInfos && bookInfos.isAdded !== undefined) {
      setIsAdded(bookInfos.isAdded);
    }
  }, [bookInfos]);

  const Addbookshelf = async (event) => {
    event.preventDefault();

    const data = {
      bookId,
    };

    try {
      const response = await axiosInstance.post(`/bookshelf/${bookId}`, data);
      console.log("Success:", response.data);
      setIsAdded((prevIsAdded) => !prevIsAdded);
      {
        isAdded
          ? alert("서재에서 삭제되었습니다 :)")
          : alert("서재에 추가되었습니다.");
      }
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
      <BookInfos>
        <BookInfoImg src={bookInfos.bookCover} alt='bookImg' />
        <BookDetailInfos>
          <BookInfoTitle style={{ margin: "0 0 0 0" }}>
            {" "}
            {bookInfos.bookName}{" "}
          </BookInfoTitle>
          <BookInfoGenre> {bookInfos.authorCate} </BookInfoGenre>
          <StarNumbers />
          <Buttons>
            {accessToken ? (
              <form>
                <Button
                  style={{
                    border: isAdded ? "1px solid #E86A33" : "1px solid #888888",
                    backgroundColor: "#ffffff",
                    color: isAdded ? "#E86A33" : "#000000",
                    padding: "0.7rem 1rem",
                  }}
                  onClick={Addbookshelf}
                >
                  {isAdded ? "서재에서 삭제" : "서재에 추가"}
                </Button>
                <Button
                  style={{
                    border: "none",
                    backgroundColor: "#4dac27",
                  }}
                  onClick={MoveRecord}
                >
                  <Link to={`/records/${bookId}`} style={{ color: "#ffffff" }}>
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
  margin: 0 0 0 2rem;
`;
const Buttons = styled.div`
  margin: 5rem 0;
`;
const Button = styled.button`
  margin-right: 1rem;
  padding: 0.8rem 1.7rem;
  font-size: 1rem;
  border-radius: 2px;
  cursor: pointer;
`;
const StarNumbers = styled(StarNumber)`
  margin: 0;
`;
