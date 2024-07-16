import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import {
  BookInfoImg,
  BookInfoText,
  BookTitle,
  BookWriter,
  SlickItem,
} from "../../styles/Main/BookStyle";
import BookTitlelimit from "../BookTitlelimit";
import { Link } from "react-router-dom";

export default function CarouselBest({ genreBooks }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    touchMove: false,
  };

  const accessToken = localStorage.getItem("accessToken");
  const toLogin = () => {
    alert("로그인 후 이용가능합니다.");
    navigator("/log-in");
  };

  return (
    <BookCarousel>
      <SlickSlider {...settings}>
        {genreBooks.map((genreBook) => (
          <SlickItem key={genreBook.bookId}>
            {accessToken ? (
              <Link to={`/books/${genreBook.bookId}`}>
                <BookInfoImg src={genreBook.bookCover} alt="bookimg" />
              </Link>
            ) : (
              <div onClick={toLogin} style={{ cursor: "pointer" }}>
                <BookInfoImg src={genreBook.bookCover} alt="bookimg" />
              </div>
            )}
            <BookInfoText>
              <BookTitle>
                <BookTitlelimit
                  bookTitle={genreBook.bookName}
                  TextLimitAccount={10}
                />
              </BookTitle>
              <BookWriter> {genreBook.authorPub} </BookWriter>
            </BookInfoText>
          </SlickItem>
        ))}
      </SlickSlider>
    </BookCarousel>
  );
}

const BookCarousel = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const SlickSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 40px;
    line-height: 5px;
  }
  .slick-prev:before {
    content: "‹";
  }
  .slick-next:before {
    content: "›";
  }
`;
