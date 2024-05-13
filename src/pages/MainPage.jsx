import styled from "styled-components";
import Header from "../components/Header";
import AiBook from "../components/AiBook";
import Book from "../components/Book";

const Page = styled.div`
  width: 100%;  
  height: 100rem;
  background-color: #F3F3F3;
`;
const Body = styled.body`
  margin: 4rem 20rem;
`

export default function Main_Page() {
  return (
    <Page>
      <Header />
      <Body>
        <AiBook />
        <Book />
        <Book />
      </Body>
    </Page>
  );
}
