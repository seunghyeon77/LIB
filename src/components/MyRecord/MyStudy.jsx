import styled from "styled-components";
import { BookTitle } from "../../styles/Main/BookStyle";
import BookTitlelimit from "../BookTitlelimit";
import { Link } from "react-router-dom";

export default function MyStudy({ studyLists }) {
  console.log(studyLists)
  const studysLists = studyLists.slice(0, 10);
  return (
    <>
      {studysLists.map((studyList) => (
        <MyStudyDiv key={studyList.bookId}>
          <Link to={`/books/${studyList.bookId}`}>
            <BookInfoImg src={studyList.bookCover} alt="BookImg" />
          </Link>
          <BookInfoText>
            <BookTitle>
              <BookTitlelimit
                bookTitle={studyList.bookName}
                TextLimitAccount={9}
              />
            </BookTitle>
          </BookInfoText>
        </MyStudyDiv>
      ))}
    </>
  );
}
const MyStudyDiv = styled.div`
  margin: 2.5rem 1rem 0;
`;
const BookInfoImg = styled.img`
  // 메인 페이지와 책 크기 다름
  width: 8rem;
  height: 12rem;
  border: 1.3px solid #eaeaea;
`;
const BookInfoText = styled.div`
  display: flex;
  flex-flow: nowrap column;
`;
