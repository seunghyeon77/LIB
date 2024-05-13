import Header from "../components/Header";
import RecordPageForm from "../components/RecordPageForm";
import styled from "styled-components";

const PageMargin = styled.div`
  height: 100vh;
  margin: 0 20rem;
`
export default function RecordPage() {
  return (
    <div className="MainPage">
      <Header />
      <PageMargin>
        <RecordPageForm />
      </PageMargin>
    </div>
  );
}
