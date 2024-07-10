import { axiosInstance } from "../../api/axiosInstance";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { BookInfoImg, BookInfos, TitleText } from "../../styles/Main/BookStyle";
import BookTitlelimit from "../BookTitlelimit";

export default function RecordHistory() {
  const [recordInfos, setRecordInfos] = useState([]);

  const recordsApi = async () => {
    try {
      const response = await axiosInstance.get("/records/main");
      setRecordInfos(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    recordsApi();
  }, []);

  return (
    <RecordHistoryDiv>
      <TitleText>최근 기록 히스토리</TitleText>
      <RecordHistoryBooks>
        {recordInfos.map((recordInfo) => (
          <BookContainer key={recordInfo.recordId}>
            <RecordHistoryBook src={recordInfo.bookCover} />
              <HoverContent>
                <BookTitlelimit
                  bookTitle={recordInfo.recordContent}
                  TextLimitAccount={120}
                />
              </HoverContent>
          </BookContainer>
        ))}
      </RecordHistoryBooks>
    </RecordHistoryDiv>
  );
}
const RecordHistoryDiv = styled.div`
  margin: 5rem 0;
`;
const RecordHistoryBooks = styled(BookInfos)`
  height: 20rem;
  justify-content: flex-start;
  background: none;
`;
const BookContainer = styled.div`
  position: relative;
  width: 11.5rem;
  height: 15.5rem;
  margin: 0 13px;

  &:hover p {
    opacity: 1;
  }
`;
const RecordHistoryBook = styled(BookInfoImg)`
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.1;
    transition: opacity 0.3s ease;
  }
`;
const HoverContent = styled.p`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  line-height: 1.3rem;
  box-sizing: border-box;  
  padding: 1rem;  
  font-size: 0.9rem;
  color: #ffffff;
`;
