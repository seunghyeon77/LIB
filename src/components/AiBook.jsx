import styled from "styled-components";

const AiBookCompo = styled.div`
  height: 20rem;
  width: 100%;
`;
const AiBookText = styled.span`
margin: 1rem;
font-size: 1.1rem;
`;
const AiBookImg = styled.div`
  height: 100%;
  background: url("https://th.bing.com/th/id/OIP.TCyhvaGTprnDqO3hqsnngAHaE7?rs=1&pid=ImgDetMain");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export default function AiBook() {
  return (
    <AiBookCompo>
      <div style={{
        height: '100%',
      }}>
        <AiBookText>기록의 서재님을 위한 맞춤 추천</AiBookText>
        <AiBookImg>
          <span>로그인 후 이용가능합니다.</span>
        </AiBookImg>
      </div>
    </AiBookCompo>
  );
}
