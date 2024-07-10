import { Link } from "react-router-dom";
import { BookInfoGenre, BookInfoTitle } from "../../styles/Main/BookStyle";
import styled from "styled-components";
import StarNumber from "../Record/starNumber";

export default function BookDetailinfo( {bookInfos} ) {
  const bookDetailInfos = [bookInfos];

  return (
    <BookDetailinfoDiv>
      {bookDetailInfos.map((bookInfo) => (
        <BookInfos key={bookInfo.bookId}>
          <BookInfoImg
            src={bookInfo.bookCover}
            alt="bookImg"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <BookInfoTitle> {bookInfo.bookName} </BookInfoTitle>
            <BookInfoGenre> {bookInfo.authorCate} |{bookInfo.publisher} </BookInfoGenre>
            <StarNumbers />
            <Buttons>
              <form>
                <Button
                  style={{
                    border: "1px solid #888888",
                    backgroundColor: "#ffffff",
                    padding: "0.8rem 1.1rem",
                  }}
                >
                  서재에 추가
                </Button>
                <Button
                  style={{
                    border: "none",
                    backgroundColor: "#539165",
                  }}
                >
                  <Link to={"/record"} style={{ color: "#ffffff" }}>
                    기록하기
                  </Link>
                </Button>
              </form>
            </Buttons>
          </div>
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
