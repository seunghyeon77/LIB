import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RecordPage from "../pages/RecordPage";
import MyRecordPage from "../pages/MyRecordPage";
import BookDetailPage from "../pages/BookDetailPage";
import MyPage from "../pages/MyPage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";

export default function RouteCompos() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/my_record" element={<MyRecordPage />} />
          <Route path="/book_detail_page" element={<BookDetailPage />} />
          <Route path="/my_page" element={<MyPage />} />
          <Route path="/log_in" element={<LogInPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}