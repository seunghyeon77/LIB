import RecordPageForm from "../components/Record/RecordPageForm";
import styled from "styled-components";

export default function RecordPage() {
  return (
    <Page>
      <Body>
        <RecordPageForm />
      </Body>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  height: 95vh;
`;
const Body = styled.body`
  margin: 4rem 30rem;
`;
