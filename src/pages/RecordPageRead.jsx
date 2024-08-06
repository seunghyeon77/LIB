import styled from "styled-components";
import { useLocation } from "react-router-dom";

import ToRecord from "../components/Record/ToRecord";

export default function RecordPageRead() {
  const location = useLocation();
  const recordDetailInfo = location.state?.recordDetailInfo || null;

  return (
    <Page>
      <Body>
        {recordDetailInfo ? (
          <ToRecord recordReadInfos={recordDetailInfo} />
        ) : (
          <Loading>Loading...</Loading>
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
const Loading = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;
