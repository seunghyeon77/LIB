import { useMemo, useRef } from "react";
import { BookTitle } from "../styles/Main/BookStyle";

export default function BookTitlelimit({ bookTitle, TextLimitAccount }) {
  const limitTitle = useRef(TextLimitAccount);

  const bookTitlelimit = useMemo(() => {
    // bookTitle이 변경되지 않은 이유는 useMemo 훅에 bookTitle, TextLimitAccount을 의존성 배열에 담지 않아서 변경될 때마다 useMemo가 계산을 못한것이다.
    const shortTitle = bookTitle.slice(0, limitTitle.current);
    if (bookTitle.length > limitTitle.current) {
      return shortTitle + " ···";
    } else {
      return bookTitle;
    }
  }, [bookTitle, TextLimitAccount]);

  return <>{bookTitlelimit}</>;
}
