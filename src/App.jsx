import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecordPage from "./pages/RecordPage";
import MyRecordPage from "./pages/MyRecordPage";
import BookDetailPage from "./pages/BookDetailPage";
import MyPage from "./pages/MyPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Header />,
    children: [
      {
        path:"/",
        element: <MainPage />
      },
      {
        path:"records",
        element: <RecordPage />
      },
      {
        path:"records/:bookId",
        element: <RecordPage />
      },
      {
        path:"my-record",
        element: <MyRecordPage />
      },
      {
        path:"books/:bookId",
        element: <BookDetailPage />
      },
      {
        path:"my-page",
        element: <MyPage />
      }
    ]
  },
  {
    path: "log-in",
    element: <LogInPage />
  },
  {
    path: "sign-up",
    element: <SignUpPage />
  }
])

function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
