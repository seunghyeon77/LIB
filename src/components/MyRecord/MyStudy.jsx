import styled from "styled-components";

import { BookTitle } from "../../styles/Main/BookStyle";
import BookTitlelimit from "../BookTitlelimit";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

export default function MyStudy({ studyLists }) {
  const renderItems = (currentItems) => {
    return (
      <MystudysDiv>
        {currentItems.map((studyList) => (
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
      </MystudysDiv>
    );
  };
  return (
    <div>
      <Pagination
        data={studyLists}
        itemsPerPage={8}
        renderItems={renderItems}
      />
    </div>
  );
}
const MyStudyDiv = styled.div`
  margin: 2.5rem 1rem 0;
`;
const BookInfoImg = styled.img`
  // 메인 페이지와 책 크기 다름
  width: 9.5rem;
  height: 13rem;
  border: 1.3px solid #eaeaea;
`;
const BookInfoText = styled.div`
  display: flex;
  flex-flow: nowrap column;
`;
const MystudysDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 25px;
`