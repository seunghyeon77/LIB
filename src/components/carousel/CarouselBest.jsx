import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import {
  BookInfoImg,
  BookInfoText,
  BookTitle,
  BookWriter,
  SlickItem,
} from "../../styles/Main/BookStyle";
import BookTitlelimit from "../BookTitlelimit";
import { Link } from "react-router-dom";
import { carouselBest } from "../../api/mainApis";

export default function CarouselBest() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    touchMove: false,
  };

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["booksBest"],
    queryFn: carouselBest,
  });
  if (isError) return <span>{error.message}</span>;
  if (isLoading) return <span>책 정보를 가져오는 중입니다...</span>;

  return (
    <BookCarousel>
      <SlickSlider {...settings}>
        {data.data.response.map((bookInfo) => (
          <SlickItem key={bookInfo.bookId}>
            <Link to={`/books/${bookInfo.bookId}`}>
              <BookInfoImg src={bookInfo.bookCover} alt='bookimg' />
            </Link>
            <BookInfoText>
              <BookTitle>
                <BookTitlelimit
                  bookTitle={bookInfo.bookName}
                  TextLimitAccount={9}
                />
              </BookTitle>
              <BookWriter> {bookInfo.authorPub} </BookWriter>
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
