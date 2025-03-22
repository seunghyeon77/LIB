import styled from "styled-components";
import { axiosInstance } from "../../api/axiosInstance";

import BookTitlelimit from "../BookTitlelimit";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

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

  const renderItems = (currentItems) => {
    return (
      <RecordDiv>
        {currentItems.map((recordInfo) => (
          <div key={recordInfo.recordId}>
            <RecordInfo>
              <Link
                to={`/records/detail/${recordInfo.recordId}`}
                style={{ color: "#000000" }}
              >
                <div onClick={() => recordsApi(recordInfo.recordId)}>
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
                </div>
              </Link>
            </RecordInfo>
            <RecordDateDiv>
              <span style={{ fontSize: "0.9rem" }}>
                {recordInfo.createdDate}
              </span>
              <Delbtn
                onClick={() => recordDel(recordInfo.recordId)}
                style={{ backgroundColor: "#f7f7f7" }}
              >
                삭제
              </Delbtn>
            </RecordDateDiv>
          </div>
        ))}
      </RecordDiv>
    );
  };

  return (
    <div>
      <Pagination
        data={recordInfos}
        itemsPerPage={8}
        renderItems={renderItems}
      />
    </div>
  );
}

const RecordDiv = styled.div`
  min-height: 37rem;
  min-width: 70rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 55px;
  padding: 0 1rem;
`;

const RecordInfo = styled.div`
  width: 18rem;
  height: 20rem;
  background-color: #ffffff;
`;

const InfoTitle = styled.h3`
  padding: 0.9rem 1rem 0;
  font-size: 1.25rem;
`;
const RecordDateDiv = styled.div`
  margin: 0.5rem 0 2rem 0;
  display: flex;
  justify-content: space-between;
  width: 18rem;
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
  padding: 1rem 1rem;
  font-size: 0.8rem;
  opacity: 0.5;
`;

const InfoContent = styled.p`
  padding: 0.8rem 1rem;
  line-height: 1.1rem;
  font-size: 1.2rem;
`;
