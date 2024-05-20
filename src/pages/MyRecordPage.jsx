import Header from "../components/Header";
import styled from "styled-components";
import RecordWrapper from "../components/MyRecord/RecordWrapper";

export default function MyRecordPage() {
  return (
    <Page>
      <Header />
      <Body>
        <RecordWrapper />
      </Body>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;  
  height: 180vh;
  background-color: #F1F1F1;
`
const Body = styled.body`
  margin: 4rem 20rem;
`
