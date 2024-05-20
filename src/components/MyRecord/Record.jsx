import styled from "styled-components";

// 기록 하나의 컴포넌트
export default function Record() {
  return (
    <RecordDiv>
      <RecordInfo>
        <h3>일류의 조건</h3> {/* 기록하기에서 책 제목 가져와야 됌*/}
        <span>사이토 다카시</span> {/* 기록하기에서 책 저자 가져와야 됌*/}
        <p>
          이 책을 읽고 정말 많은 생각을 했다. 그 예로 ‘나는 지금 어떤 존재인가?’
          ‘나는 현재 일류의 조건을 충족하는가?’ 등이 있다. 세상엔 참 다양한 사람이
          있는 거 같다. 내··· {/* 기록하기에서 기록 가져와야 됌*/}
        </p>
      </RecordInfo>
        <form>
          <button>삭제</button>
          <button>수정</button>
        </form>
    </RecordDiv>
  );
}

const RecordDiv = styled.div`
  width: 14rem;
  height: 16rem;
`
const RecordInfo = styled.div`
  width: 100%;
  height: 100%;
  border: 1.3px solid #BFBFBF;
  border-radius: 7px;
`
