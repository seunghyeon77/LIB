import CarouselBest from "../carousel/CarouselBest";
import { Book, BookInfos, Img, TitleText } from "../../styles/Main/BookStyle";

export default function BookWrapperBest() {
  return (
    <Book>
      <TitleText>
        <Img src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/2ac11d14-7f27-4a24-89cb-5f0e251afa68" />
        독자들이 좋아하는 책
      </TitleText>
      <BookInfos>
        <CarouselBest />
      </BookInfos>
    </Book>
  );
}
