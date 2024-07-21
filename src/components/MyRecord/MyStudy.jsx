import styled from "styled-components";
import { BookTitle } from "../../styles/Main/BookStyle";
import BookTitlelimit from "../BookTitlelimit";

export default function MyStudy({ studyLists }) {
  
  return (
    <>
      {studyLists.map((studyList) => (
        <MyStudyDiv key={studyList.bookId}>
          <BookInfoImg src={studyList.bookCover} alt="BookImg" />
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
const BookInfoTitle = styled.span`
  font-size: 1rem;
  margin: 0.7rem 0;
`;
