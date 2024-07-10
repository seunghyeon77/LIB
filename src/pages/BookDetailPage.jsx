import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import BookDetailAi from "../components/BookDetail/BookDetailAi";
import BookDetailCommu from "../components/BookDetail/BookDetailCommu";
import BookDetailContent from "../components/BookDetail/BookDetailContent";
import BookDetailinfo from "../components/BookDetail/BookDetailInfo";
import { Body, Page } from "../styles/PageLayout";
import { axiosInstance } from "../api/axiosInstance";

export default function BookDetailPage() {
  const [bookInfos, setBookInfos] = useState([]);
  const bookId = useParams();

  const booksApi = async () => {
    try {
      const response = await axiosInstance.get(`/books/${bookId.bookId}`);
      setBookInfos(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    booksApi();
  }, []);

  return (
    <Page style={{backgroundColor: '#ffffff'}}>
      <Body>
        <BookDetailinfo bookInfos={bookInfos} />
        <BookDetailContent bookInfos={bookInfos} />
        <BookDetailAi bookId={bookId} />
        <BookDetailCommu />
      </Body>
    </Page>
  )
}
