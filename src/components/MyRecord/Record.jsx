import styled from "styled-components";

// 기록 하나의 컴포넌트
export default function Record() {
  return (
    <RecordDiv>
      <RecordInfo>
        <InfoTitle>일류의 조건</InfoTitle>{" "}
        {/* 기록하기에서 책 제목 가져와야 됌*/}
        <InfoWriter>사이토 다카시</InfoWriter>{" "}
        {/* 기록하기에서 책 저자 가져와야 됌*/}
        <InfoContent>
          이 책을 읽고 정말 많은 생각을 했다. 그 예로 ‘나는 지금 어떤 존재인가?’
          ‘나는 현재 일류의 조건을 충족하는가?’ 등이 있다. 세상엔 참 다양한
          사람이 있는 거 같다. 내이 책을 읽고 정말 많은 생각을 했다. 그 예로
          ‘나는 지금 어떤 존재인 내가 너무 두...{" "}
          {/* 기록하기에서 기록 가져와야 됌*/}
        </InfoContent>
      </RecordInfo>
      <Buttons>
        <Button style={{ color: "#E86A33 " }}>삭제</Button>
        <Button>수정</Button>
      </Buttons>
    </RecordDiv>
  );
}

const RecordDiv = styled.div`
  width: 12rem;
  height: 100%;
  margin: 4rem 1rem 0;
`;
const RecordInfo = styled.div`
  width: 100%;
  height: 100%;
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
`;
const Buttons = styled.form`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin: 0.7rem 1rem;
  border: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;
`;
