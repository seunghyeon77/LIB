import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";

import StarNumber from "./starNumber";
import Bookimg from "./Bookimg";

export default function RecordPageForm() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const textAreaContent = useRef();

  const bookNameInput = (event) => {
    setBookName(event.target.value);
  };
  const authorInput = (event) => {
    setAuthor(event.target.value);
  };
  const genreInput = (event) => {
    setGenre(event.target.value);
  };
  const inputTextArea = (event) => {
    textAreaContent.current = event.target;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const recordContent = textAreaContent.current.value;

    const data = {
      // 백엔드에 보낼 데이터
      bookName,
      author,
      genre,
      rating,
      recordContent,
    };

    try {
      const response = await axiosInstance.post("/records", data);
      console.log("Success:", response.data);
      alert("나의 기록 페이지에 저장되었습니다 :)");
      navigator("/");
    } catch (error) {
      console.error(error);
    }
    console.log(data)
  };

  const navigator = useNavigate(); // 취소하기 버튼을 눌렀을 때
  const delbtn = () => {
    if (
      confirm("작성하신 내용은 저장되지 않습니다. 그래도 취소하시겠습니까?")
    ) {
      navigator("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForms>
        <Bookimg name="bookCover" />
        <InputTexts>
          <InputText
            name="bookName"
            type="text"
            placeholder="제목을 입력하세요"
            onChange={bookNameInput}
          />
          <InputText
            name="author"
            type="text"
            placeholder="지은이를 입력하세요"
            onChange={authorInput}
          />
          <InputText
            name="genre"
            type="text"
            placeholder="장르를 입력하세요"
            onChange={genreInput}
          />
          <StarNumber name="rating" rating={rating} setRating={setRating} />
        </InputTexts>
      </InputForms>
      <Textareas>
        <Textarea name="recordContent" onChange={inputTextArea} />
        <Buttons>
          <Button
            style={{ border: "1px solid #888888", backgroundColor: "#ffffff" }}
            onClick={delbtn}
          >
            취소하기
          </Button>
          <Button
            style={{
              border: "1px solid",
              backgroundColor: "#539165",
              color: "#ffffff",
            }}
            type="submit"
          >
            기록하기
          </Button>
        </Buttons>
      </Textareas>
    </form>
  );
}

const InputForms = styled.div`
  margin: 4rem 2rem;
  display: flex;
  align-items: center;
`;
const InputTexts = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap column;
`;
const InputText = styled.input`
  margin: 0.5rem 1rem;
  padding: 0.6rem;
  border: 1px solid #888888;
  border-radius: 7px;
`;
const Textareas = styled.div`
  display: flex;
  flex-direction: column;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 30rem;
  max-height: 40rem;
  font-size: 1.1rem;
  resize: none;
  border: 1px solid;
  border-radius: 7px;
  padding: 1rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  margin: 1.2rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  cursor: pointer;
`;
