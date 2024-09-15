import { Link } from "react-router-dom";
import { BookInfoImg, BookInfos } from "../styles/Main/BookStyle";
import styled from "styled-components";
import BookTitlelimit from "./BookTitlelimit";
import Pagination from "./Pagination";

export default function SearchPageBook({ searchBooks, searchInput }) {
  console.log(searchBooks);
  const renderItems = (currentItems) => {
    return (
      <div>
        {searchBooks.length != 0 ? (
          <>
            <SearchBookTitle>{searchInput.input}에 대한 검색 기록입니다.</SearchBookTitle>
            <SearchBookDiv>
              {currentItems.map((searchBook) => (
                <BookInfos key={searchBook.bookId}>
                  <Link to={`books/${searchBook.bookId}`}>
                    <BookInfoImg src={searchBook.bookCover} />
                    <div>
                      <BookInfoTitle>
                        <BookTitlelimit bookTitle={searchBook.bookName} TextLimitAccount={9}/>
                      </BookInfoTitle>
                      <BookInfoWriter>
                        <BookTitlelimit bookTitle={searchBook.authorPub} TextLimitAccount={9}/>
                      </BookInfoWriter>
                    </div>
                  </Link>
                </BookInfos>
              ))}
            </SearchBookDiv>
          </>
        ) : (
          <SearchBookTitle>찾으시는 {searchInput.input}은 기록의 서재에 없습니다.</SearchBookTitle>
        )}
      </div>
    );
  };
  return (
    <div>
      <Pagination
        data={searchBooks}
        itemsPerPage={8}
        renderItems={renderItems}
      />
    </div>
  );
}


const BookInfoTitle = styled.h3`
  color: #000000;
  font-size: 1.5rem;
  margin: 1.2rem 0;
`;
const BookInfoWriter = styled.span`
  color: #000000;
  font-size: 1.2rem;
`;
const SearchBookDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px 25px;
  margin-top: 55px;
`;
const SearchBookTitle = styled.h3`
  font-size: 20px;
`
