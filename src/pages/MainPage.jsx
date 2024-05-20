import styled from "styled-components";
import Header from "../components/Header";
import AiBook from "../components/Main/AiBook";
import BookWrapperBest from "../components/Main/BookWrapperBest";
import BookWrapperGenres from "../components/Main/BookWrapperGenres";


export default function MainPage() {
  return (
    <Page>
      <Header />
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
  height: 180vh;
  background-color: #F1F1F1;
`;
const Body = styled.body` // 모든 페이지 기본 margin
  margin: 4rem 20rem;
`
