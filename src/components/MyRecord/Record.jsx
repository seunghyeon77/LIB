import styled from "styled-components";

import PresentDate from "../PresentDate";
import BookTitlelimit from "../BookTitlelimit";

// 기록 하나의 컴포넌트
export default function Record({recordInfos}) {
  return (
    <RecordDiv>
      {recordInfos.map((recordInfo) => (
        <div key={recordInfo.recordId}>
          <RecordInfo>
            <InfoTitle>
              <BookTitlelimit bookTitle={recordInfo.bookName} TextLimitAccount={12}/>
            </InfoTitle>
            <InfoWriter>{recordInfo.author}</InfoWriter>
            <InfoContent>
              <BookTitlelimit bookTitle={recordInfo.recordContent} TextLimitAccount={140} />
            </InfoContent>
          </RecordInfo>
          <RecordDateDiv>
            <PresentDate />
          </RecordDateDiv>
        </div>
      ))}
    </RecordDiv>
  );
}

const RecordDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px 25px;
  margin-top: 55px;
`;

const RecordInfo = styled.div`
  width: 100%;
  border: 1.3px solid #bfbfbf;
  border-radius: 7px;
`;

const InfoTitle = styled.h3`
  padding: 0.9rem 1rem 0;
  font-size: 1rem;
`;

const InfoWriter = styled.span`
  padding: 0 1rem;
  font-size: 0.7rem;
  opacity: 0.5;
`;

const InfoContent = styled.p`
  padding: 0.8rem 1rem;
  line-height: 1.1rem;
`;

const RecordDateDiv = styled.div`
  margin: 0.3rem;
`;
