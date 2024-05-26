import styled from "styled-components";
import AiBook from "../components/Main/AiBook";
import BookWrapperBest from "../components/Main/BookWrapperBest";
import BookWrapperGenres from "../components/Main/BookWrapperGenres";

export default function MainPage() {
  return (
    <Page>
      <Body>
        <AiBook />
        <BookWrapperBest />
        <BookWrapperGenres />
      </Body>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  height: 190vh;
  background-color: #f1f1f1;
`;
const Body = styled.body`
  // 모든 페이지 기본 margin
  padding: 4rem 20rem;
`;
