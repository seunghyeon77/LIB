
import { useNavigate } from "react-router-dom";
import AiBook from "../components/Main/AiBook";
import BookWrapperBest from "../components/Main/BookWrapperBest";
import BookWrapperGenres from "../components/Main/BookWrapperGenres";
import RecordHistory from "../components/Main/RecordHistory";
import { Body, Page } from "../styles/PageLayout";

export default function MainPage() {
  const navigator = useNavigate();
  const onClickNavi = (bookId) => {
    navigator(`/books/${bookId}`)
  }

  return (
    <Page>
      <Body>
        <AiBook />
        <RecordHistory />
        <BookWrapperBest ClickBookId={onClickNavi} />
        <BookWrapperGenres ClickBookId={onClickNavi} />
      </Body>
    </Page>
  );
}
