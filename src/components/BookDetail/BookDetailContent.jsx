import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import { TitleText } from "../../styles/Main/BookStyle";
import { FlexCenter } from "../../styles/PageLayout";
import { BookDetailinfoDiv } from "./BookDetailInfo";
import { MoreButton, MoreButtonForm } from "../MyRecord/MyStudyWrapper";

export default function BookDetailContent({bookInfos}) {
  const [isShowbutton, setIsShowbutton] = useState(false);
  const [bookContent, setBookContent] = useState("")

  useEffect(() => {
    if (bookInfos.bookExplain) {
      setBookContent(bookInfos.bookExplain)
    }
  }, [bookInfos])

  const limitText = useRef(437); // 제한된 글자수를 useRef로 저장
  const bookContents = useMemo(() => {
    const shortContent = bookContent.slice(0, limitText.current); // bookContent 글자수를 437로 제한
    if (bookContent.length > limitText.current) {
      if (!isShowbutton) {
        return shortContent + " ···";
      } else {
        return bookContent;
      }
    } else {
      return bookContent;
    }
  });

  return (
    <BookDetailinfoDiv>
      <div>
        <TitleText style={{ margin: "1.9rem 2rem" }}>책 소개</TitleText>
          <div className={isShowbutton ? 'moresee' : 'folded'}>
            <FlexCenter>
              <BookContent>
                {bookContents}
              </BookContent>
            </FlexCenter>
            <MoreButtonForm>
              <MoreButton
                onClick={() => {
                  setIsShowbutton(!isShowbutton);
                }}
                style={{ margin: "1.7rem 1rem" }}
              >
                {!isShowbutton ? "더보기" : "접기"}
              </MoreButton>
            </MoreButtonForm>
          </div>
      </div>
    </BookDetailinfoDiv>
  );
}
const BookContent = styled.p`
  width: 85%;
  margin: 1.5rem 2rem 1rem;
  font-size: 20px;
  line-height: 35px;
  &.moresee {
    height: 17rem;
  }
  &.folded {
    height: 100%;
  }
`;
