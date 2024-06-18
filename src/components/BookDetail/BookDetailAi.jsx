import {
  AiBooks,
  BookInfoImg,
  BookInfoText,
  BookTitle,
  BookWriter,
  Img,
  SlickItem,
  TitleText,
} from "../../styles/Main/BookStyle";
import { BookDetailinfoDiv } from "./BookDetailInfo";

export default function BookDetailAi() {
  return (
    <BookDetailinfoDiv>
      <TitleText style={{ marginTop: "1.3rem" }}>
        <Img src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/860f40e6-4cb5-487c-a8f2-213ecd22b8aa" />
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
            <BookWriter>
              프리드니히 니체 | 철학 <br /> 출판사
            </BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>
              프리드니히 니체 | 철학 <br /> 출판사
            </BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>
              프리드니히 니체 | 철학 <br /> 출판사
            </BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>
              프리드니히 니체 | 철학 <br /> 출판사
            </BookWriter>
          </BookInfoText>
        </SlickItem>
        <SlickItem>
          <BookInfoImg
            src="https://image.yes24.com/goods/112013526/XL"
            alt="bookimg"
          />
          <BookInfoText>
            <BookTitle>니체의 말</BookTitle>
            <BookWriter>
              프리드니히 니체 | 철학 <br /> 출판사
            </BookWriter>
          </BookInfoText>
        </SlickItem>
      </AiBooks>
    </BookDetailinfoDiv>
  );
}
