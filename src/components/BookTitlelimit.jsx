import { useMemo, useRef } from "react";
import { BookTitle } from "../styles/Main/BookStyle";

export default function BookTitlelimit({ bookTitle, TextLimitAccount }) {
  const limitTitle = useRef(TextLimitAccount);

  const bookTitlelimit = useMemo(() => {
    const shortTitle = bookTitle.slice(0, limitTitle.current);
    if (bookTitle.length > limitTitle.current) {
      return shortTitle + " ···";
    } else {
      return bookTitle
    }
  }, []);

  return <>
    {bookTitlelimit}
  </>;
}
