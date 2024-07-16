import { Link } from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../api/axiosInstance";

import { BookInfoImg, Img, TitleText } from "../../styles/Main/BookStyle";
import { SlickSlider } from "../carousel/CarouselBest";

export default function AiBook() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    centerMode: true,
    centerPadding: "0px",
  };
  const [bookInfos, setBookInfos] = useState([]);

  const booksApi = async () => {
    try {
      const response = await axiosInstance.get("/recommend/main");
      setBookInfos(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    booksApi();
  }, []);

  const accessToken = localStorage.getItem("accessToken");

  return (
    <AiBookCompo>
      <TitleText>
        <Img src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/860f40e6-4cb5-487c-a8f2-213ecd22b8aa" />
        기록의 서재님을 위한 AI 맞춤 추천
      </TitleText>
      <AiBookImg>
        <AiBookImgOverlay>
          {accessToken ? (
            <SlickSlider
              {...settings}
              style={{ width: "60%", height: "250px" }}
            >
              {bookInfos.map((bookInfo) => (
                <div key={bookInfo.bookId}>
                  <CenterBookInfoImg src={bookInfo.bookCover} alt="bookimg" />
                </div>
              ))}
            </SlickSlider>
          ) : (
            <Link to={"/log-in"}>
              <AiBookImgText>로그인 후 이용 가능합니다.</AiBookImgText>
            </Link>
          )}
        </AiBookImgOverlay>
      </AiBookImg>
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
const CenterBookInfoImg = styled(BookInfoImg)`
  margin: 10px auto;
`;
