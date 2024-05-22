import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AiBook() {
  return (
    <AiBookCompo>
      <AiBookText>
        <Img src="src\imgs\로봇_아이콘-removebg-preview.png" />
        기록의 서재님을 위한 AI 맞춤 추천
      </AiBookText>
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
  align-items: center;
  margin: 1rem 2rem;
  font-size: 1.1rem;
`;
const Img = styled.img`
  width: 2rem;
  height: 1.5rem;
`;
const AiBookImg = styled.div`
  height: 100%;
  background-image: url("src/imgs/AI 도서관 사진.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 7px;
`;
const AiBookImgOverlay = styled.div`
  // img 안에 따로 div을 넣어서 투명도를 관리
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
