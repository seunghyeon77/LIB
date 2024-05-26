import styled from "styled-components";
import Header from "../components/Header";
import AiBook from "../components/Main/AiBook";
import BookWrapperBest from "../components/Main/BookWrapperBest";
import BookWrapperGenres from "../components/Main/BookWrapperGenres";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <Page>
      <Header />
      <Outlet /> {/* 중첩 라우팅을 사용하여 Header의 반복 최소화 */}
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
  background-color: #f1f1f1;
`;
const Body = styled.body`
  // 모든 페이지 기본 margin
  margin: 4rem 20rem;
`;
