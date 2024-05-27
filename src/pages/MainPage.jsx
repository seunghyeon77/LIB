import AiBook from "../components/Main/AiBook";
import BookWrapperBest from "../components/Main/BookWrapperBest";
import BookWrapperGenres from "../components/Main/BookWrapperGenres";
import { Body, Page } from "../styles/PageLayout";

export default function MainPage() {
  return (
    <Page>
      <Body>
        <AiBook />
        <BookWrapperBest />
        <BookWrapperGenres />
      </Body>
    </Page>
  );
}
