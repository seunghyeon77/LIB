import CarouselBest from "../carousel/CarouselBest";
import { Book, BookInfos, Img, TitleText } from "../../styles/Main/BookStyle";

export default function BookWrapperBest() {
  return (
    <Book style={{ margin: "7rem 0" }}>
      <TitleText>
        <Img src='public\images\책_아이콘-removebg-preview.png' />
        <span style={{ margin: "0 0 0 0.5rem" }}>독자들이 좋아하는 책</span>
      </TitleText>
      <BookInfos>
        <CarouselBest />
      </BookInfos>
    </Book>
  );
}
