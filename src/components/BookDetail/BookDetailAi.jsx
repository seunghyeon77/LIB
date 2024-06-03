import { AiBooks, BookInfoImg, BookInfoText, BookTitle, BookWriter, Img, SlickItem, TitleText } from "../../styles/Main/BookStyle";
import { BookDetailinfoDiv } from "./BookDetailInfo";

export default function BookDetailAi() {
  return (
    <BookDetailinfoDiv>
      <TitleText style={{ marginTop: "1.3rem" }}>
        <Img src="public\로봇_아이콘-removebg-preview.png" />
        이 책과 유사한 책들을 소개해드릴게요!
      </TitleText>
      <AiBooks>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>프리드니히 니체 | 철학 <br /> 출판사</BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>프리드니히 니체 | 철학 <br /> 출판사</BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>프리드니히 니체 | 철학 <br /> 출판사</BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>프리드니히 니체 | 철학 <br /> 출판사</BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>프리드니히 니체 | 철학 <br /> 출판사</BookWriter>
          </BookInfoText>
        </SlickItem>
      </AiBooks>
    </BookDetailinfoDiv>
  );
}
