import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import styled from "styled-components";

import Record from "./Record";

export default function RecordWrapper() {
  const [recordInfos, setRecordInfos] = useState([]);

  const recordsApi = async () => {
    try {
      const response = await axiosInstance.get("/records/books");
      setRecordInfos(response.data.response);
      console.log(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    recordsApi();
  }, []);

  return (
    <div style={{ margin: "1.7rem -5rem" }}>
      <RecordsWrapper>
        <RecordTitle style={{ padding: "2rem 0" }}>
          현재 {recordInfos.length}개의 기록을 작성했습니다.
        </RecordTitle>
        <Records>
          <Record recordInfos={recordInfos} setRecordInfos={setRecordInfos} />
        </Records>
      </RecordsWrapper>
    </div>
  );
}
export const RecordTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 2rem;
`;
const RecordsWrapper = styled.div`
  width: 100%; // 100%
  height: 57rem; // 46rem
  background-color: #f7f7f7;
`;
const Records = styled.div`
  // margin: 0 4.8rem;
  // border: 0.5px solid #6e6e6e;
  border-radius: 3px;
`;
