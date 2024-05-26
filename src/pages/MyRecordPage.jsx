import styled from "styled-components";
import RecordWrapper from "../components/MyRecord/RecordWrapper";
import ProgressWrapper from "../components/MyRecord/ProgressWrapper";
import MyStudyWrapper from "../components/MyRecord/MyStudyWrapper";

export default function MyRecordPage() {
  return (
    <Page>
      <Body>
        <RecordWrapper />
        <ProgressWrapper />
        <MyStudyWrapper />
      </Body>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;  
  height: 220vh;
  background-color: #F1F1F1;
`
const Body = styled.body`
  padding: 4rem 20rem;
`
