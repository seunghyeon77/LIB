import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

import ToRecord from "../components/Record/ToRecord";

export default function RecordPageRead() {
  const location = useLocation();
  
  return (
    <Page>
      <Body>
        <ToRecord recordReadInfos={location.state.recordDetailInfos} />
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
