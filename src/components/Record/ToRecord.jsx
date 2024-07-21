import styled from "styled-components";

import StarNumber from "./starNumber";
import {
  BookInfoGenre,
  BookInfos,
  BookInfoTitle,
} from "../../styles/Main/BookStyle";
import { BookDetailInfos } from "../BookDetail/BookDetailInfo";

export default function ToRecord({ recordReadInfos }) {
  return (
    <>
      {recordReadInfos.map((recordReadInfo) => (
        <div key={recordReadInfo.recordId}>
          <BookDetailInfo>
            <BookRecordimg name="bookCover" src={recordReadInfo.bookCover} />
            <BookDetailInfos style={{ margin: "0 0 4rem 1.4rem" }}>
              <BookInfoTitle name="bookName">
                {recordReadInfo.bookName}{" "}
              </BookInfoTitle>
              <BookInfoGenre name="authorCatePub">
                {recordReadInfo.authorCatePub}{" "}
              </BookInfoGenre>
              <StarNumber name="rating" />
            </BookDetailInfos>
          </BookDetailInfo>
          <Textareas>
            <Textarea name="recordContent">
              {recordReadInfo.recordContent}{" "}
            </Textarea>
          </Textareas>
        </div>
      ))}
    </>
  );
}
const BookDetailInfo = styled(BookInfos)`
  height: 11rem;
  margin: 6rem 2rem;
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
const Textarea = styled.p`
  width: 100%;
  height: 30rem;
  font-size: 1.1rem;
  border: 1px solid;
  border-radius: 7px;
  padding: 1rem;
`;

