import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import PresentDate from "../PresentDate";

// 기록 하나의 컴포넌트
export default function Record() {
  const [recordInfos, setRecordInfos] = useState([]);

  const recordsApi = async () => {
    try {
      const response = await axios.get("src/api/Record/RecordInfo.json");
      setRecordInfos(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    recordsApi();
  }, []);

  const limitText = useRef(150);

  const truncatedContents = useMemo(() => {
    return recordInfos.map(recordInfo => {
      const bookContent = recordInfo.recordContent;
      const shortContent = bookContent.slice(0, limitText.current);
      if (bookContent.length > limitText.current) {
        return shortContent + " ···";
      } else {
        return bookContent;
      }
    });
  }, [recordInfos]);

  return (
    <RecordDiv>
      {recordInfos.map((recordInfo, index) => (
        <div key={recordInfo.recordId}>
          <RecordInfo>
            <InfoTitle>{recordInfo.bookName}</InfoTitle>
            <InfoWriter>{recordInfo.author}</InfoWriter>
            <InfoContent>
              {truncatedContents[index]}
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
