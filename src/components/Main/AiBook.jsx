import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img, TitleText } from "../../styles/Main/BookStyle";

export default function AiBook() {
  return (
    <AiBookCompo>
      <TitleText>
        <Img src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/860f40e6-4cb5-487c-a8f2-213ecd22b8aa" />
        기록의 서재님을 위한 AI 맞춤 추천
      </TitleText>
      <Link to={"/log-in"}>
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
const AiBookImg = styled.div`
  height: 100%;
  background-image: url("https://github.com/JNU-econovation/LIB_FE/assets/144216731/c1ee7c55-006a-42b1-a59d-44dae71feacd");
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
