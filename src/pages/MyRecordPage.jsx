import Header from "../components/Header";
import styled from "styled-components";

const Page = styled.body`
  height: 100vh;
  background-color: #F3F3F3;
`
const PageMargin = styled.div`
  height: 100%;
  margin: 0 20rem;
`

export default function MyRecordPage() {
  return (
    <div className="MainPage">
      <Header />
      <Page>
        <PageMargin>나의 기록 페이지</PageMargin>
      </Page>
    </div>
  );
}
