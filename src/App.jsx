import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import MainPage from "./pages/MainPage";
import RecordPage from "./pages/RecordPage";
import MyRecordPage from "./pages/MyRecordPage";
import BookDetailPage from "./pages/BookDetailPage";
import MyPage from "./pages/MyPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import RecordPageRead from "./pages/RecordPageRead";
import SearchPage from "./pages/SearchPage";

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
        path:"records/detail/:recordId",
        element: <RecordPageRead />
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
        path:"search/:input/books/:bookId",
        element: <BookDetailPage />
      },
      {
        path:"search/:input",
        element: <SearchPage />
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

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
