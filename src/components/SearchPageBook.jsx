import { Link } from "react-router-dom";
import { BookInfoImg, BookInfos } from "../styles/Main/BookStyle";
import styled from "styled-components";

export default function SearchPageBook({searchBooks, searchInput}) {
  console.log(searchBooks.length)
  return <div>
    {searchBooks.length != 0 ? (
      <div>
        <p>{searchInput.input}에 대한 검색 기록입니다.</p>
        {searchBooks.map((searchBook) => (
          <BookInfos key={searchBook.bookId}>
            <Link to={`books/${searchBook.bookId}`}>
              <BookInfoImg src={searchBook.bookCover} />
              <div>
                <BookInfoTitle>
                  {searchBook.bookName}
                </BookInfoTitle>
                <BookInfoWriter>
                  {searchBook.authorPub}
                </BookInfoWriter>
              </div>
            </Link>
          </BookInfos>
        ))}
      </div>
    ) : (
      <p>찾으시는 책은 기록의 서재에 없습니다.</p>
    )}
  </div>
}

const BookInfoTitle = styled.h3`
  color: #000000;
  font-size: 1.5rem;
  margin: 1.2rem 0;
`
const BookInfoWriter = styled.span`
  color: #000000;
  font-size: 1.2rem;
`