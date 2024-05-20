import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AiBook() {
  return (
    <AiBookCompo>
      <AiBookText>기록의 서재님을 위한 맞춤 추천</AiBookText>
      <Link to={"/log_in"}>
          <AiBookImg>
            <AiBookImgOverlay>
              <AiBookImgText>로그인 후 이용가능합니다.</AiBookImgText>
            </AiBookImgOverlay>
          </AiBookImg>
      </Link>
    </AiBookCompo>
  );
}

const AiBookCompo = styled.div`
  height: 20rem;
  width: 100%;
`;
const AiBookText = styled.h3`
  display: flex;
  margin: 1rem 2rem;
  font-size: 1.1rem;
`;
const AiBookImg = styled.div`
  height: 100%;
  background-image: url("https://th.bing.com/th/id/OIP.6qqfH_scgmFJ06FokmyHVgHaE7?w=271&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 7px;
`;
const AiBookImgOverlay = styled.div` // img 안에 따로 div을 넣어서 투명도를 관리
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6); 
`;
const AiBookImgText = styled.span`
  font-size: 1.2rem; 
  color: #000000;
`;