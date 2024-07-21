import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

import RecordPageForm from "../components/Record/RecordPageForm";
import RecordPageToDetail from "../components/Record/RecordPageToDetail";

export default function RecordPage() {
  const location = useLocation();
  const bookToRecordInfos = location.state ? location.state.bookRecordInfos : null;
  const bookDetailId = useRef(bookToRecordInfos ? bookToRecordInfos.bookId : null);
  
  return (
    <Page>
      <Body>
        {bookDetailId.current ? (
          <RecordPageToDetail bookRecordInfos={location.state} bookId={bookDetailId.current} />
        ) : (
          <RecordPageForm />
        )}
      </Body>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  height: 95vh;
`;
const Body = styled.div`
  margin: 4rem 30rem;
`;
