import styled from "styled-components";
import { axiosInstance } from "../../api/axiosInstance";

import PresentDate from "../PresentDate";
import BookTitlelimit from "../BookTitlelimit";
import { Link, useNavigate } from "react-router-dom";

export default function Record({ recordInfos, setRecordInfos }) {
  const navigate = useNavigate();
  const recordsApi = async (recordId) => {
    try {
      const response = await axiosInstance.get(`/records/detail/${recordId}`);
      navigate(`/records/detail/${recordId}`, {
        state: { recordDetailInfo: response.data.response },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const recordDel = (recordId) => {
    const confirm = window.confirm("기록을 정말로 삭제하시겠습니까?");
    if (confirm) {
      const deleteApi = async () => {
        try {
          await axiosInstance.delete(`/records/${recordId}`);
          setRecordInfos((prevInfos) =>
            prevInfos.filter((info) => info.recordId !== recordId)
          );
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
        <div key={recordInfo.recordId}>
          <div onClick={() => recordsApi(recordInfo.recordId)}>
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
                <InfoWriter>{recordInfo.author}</InfoWriter>
                <InfoContent>
                  <BookTitlelimit
                    bookTitle={recordInfo.recordContent}
                    TextLimitAccount={137}
                  />
                </InfoContent>
              </RecordInfo>
            </Link>
          </div>
          <RecordDateDiv>
            <PresentDate />
            <Delbtn onClick={() => recordDel(recordInfo.recordId)}>삭제</Delbtn>
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
  width: 13.1rem;
  height: 15.6rem;
  border: 1.3px solid #bfbfbf;
  border-radius: 7px;
`;

const InfoTitle = styled.h3`
  padding: 0.9rem 1rem 0;
  font-size: 1rem;
`;
const RecordDateDiv = styled.div`
  margin: 0.3rem;
  display: flex;
`;
const Delbtn = styled.button`
  margin-left: 7px;
  border: none;
  border-radius: 7px;
  background-color: #ffffff;
  color: rgb(255, 119, 119);
  cursor: pointer;
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
