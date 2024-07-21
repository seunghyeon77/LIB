import styled from "styled-components";
import { axiosInstance } from "../../api/axiosInstance";
import { useCallback, useState } from "react";

import PresentDate from "../PresentDate";
import BookTitlelimit from "../BookTitlelimit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Record({ recordInfos }) {
  const [recordDetailInfos, setRecordDetailInfos] = useState([]); // 하나의 기록을 클릭했을 때 작성 페이지로 넘어가는데 기록 데이터를 백엔드에 요청해야하므로 Record 컴포넌트에서 상태 관리
  const navigate = useNavigate();

  const ClickToRecord = useCallback(
    (recordId) => {
      const recordsApi = async () => {
        try {
          const response = await axiosInstance.get(
            `/records/detail/${recordId}`
          );
          setRecordDetailInfos(response.data.response);
          console.log(recordDetailInfos);
          navigate(`/records/detail/${recordId}`, {
            state: { recordDetailInfos: response.data.response },
          });
        } catch (err) {
          console.error(err);
        }
      };
      recordsApi();
    },
    [navigate]
  );

  const recordDel = (recordId) => {
    const confirm = confirm('기록을 정말로 삭제하시겠습니까?')
    if (confirm) {
      const deleteApi = async () => {
        try {
          const response = await axios.delete(`/records/${recordId}`);
        } catch (err) {
          console.error(err);
        }
      };
      deleteApi();
    }
  };

  return (
    <RecordDiv>
      {recordInfos.map((recordInfo) => (
        <div
          key={recordInfo.recordId}
          onClick={() => ClickToRecord(recordInfo.recordId)}
        >
          <Link
            to={`/records/detail/${recordInfo.recordId}`}
            style={{ color: "#000000" }}
          >
            <RecordInfo>
              <InfoTitle>
                <BookTitlelimit
                  bookTitle={recordInfo.bookName}
                  TextLimitAccount={12}
                />
              </InfoTitle>
              <button onClick={() => recordDel(recordInfo.recordId)}>
                삭제
              </button>
              <InfoWriter>{recordInfo.author}</InfoWriter>
              <InfoContent>
                <BookTitlelimit
                  bookTitle={recordInfo.recordContent}
                  TextLimitAccount={140}
                />
              </InfoContent>
            </RecordInfo>
          </Link>
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
  width: 210px;
  height: 250px;
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
