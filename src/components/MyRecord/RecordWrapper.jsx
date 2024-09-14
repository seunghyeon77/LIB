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
    <div style={{ margin: "1.7rem 0" }}>
      <RecordsWrapper>
        <RecordTitle>
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
  font-size: 1.1rem;
  padding: 2.5rem 0 0 3rem;
`;
const RecordsWrapper = styled.div`
  width: 100%; // 100%
  height: 51rem; // 46rem
  background-color: #ffffff;
  border-radius: 7px;
`;
const Records = styled.div`
  margin: 0 4.8rem;
`;
