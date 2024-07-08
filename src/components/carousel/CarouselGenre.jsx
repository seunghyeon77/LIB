import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import {
  BookInfoImg,
  BookInfoText,
  BookWriter,
  SlickItem,
} from "../../styles/Main/BookStyle";
import BookTitlelimit from "../BookTitlelimit";

export default function CarouselBest(genreBooks) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    touchMove: false,
  };

  return (
    <BookCarousel>
      <SlickSlider {...settings}>
        {/* {genreBooks.map((genreBook) => (
          <SlickItem key={genreBook.bookId}>
            <BookInfoImg 
              src={genreBook.bookCover}
              alt="bookimg"
            />
            <BookInfoText>
              <BookTitle>
                <BookTitlelimit bookTitle={bookInfo.bookName} TextLimitAccount={9}/>
              </BookTitle>
              <BookWriter> {genreBook.authorPublisher} </BookWriter>
            </BookInfoText>
          </SlickItem>
        ))} */}
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
