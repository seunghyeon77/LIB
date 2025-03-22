import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";

import StarNumber from "./starNumber";
import Bookimg from "./Bookimg";

export default function RecordPageForm() {
  const [bookCover, setBookCover] = useState("");
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [rating, setRating] = useState(0);
  const textAreaContent = useRef();

  const bookNameInput = (event) => {
    setBookName(event.target.value);
  };
  const authorInput = (event) => {
    setAuthor(event.target.value);
  };
  const genreInput = (event) => {
    setCategoryType(event.target.value);
  };
  const inputTextArea = (event) => {
    textAreaContent.current = event.target;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const recordContent = textAreaContent.current.value;

    const data = {
      // 백엔드에 보낼 데이터
      bookCover,
      bookName,
      author,
      categoryType,
      recordContent,
      rating,
    };
    console.log(data);
    try {
      const response = await axiosInstance.post("/records", data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error(error);
    }
    alert("나의 기록 페이지에 저장되었습니다 :)");
    navigator("/");
    console.log(data);
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
        <Bookimg
          name='bookCover'
          setBookCover={setBookCover}
          bookCover={bookCover}
        />
        <InputTexts>
          <InputText
            name='bookName'
            type='text'
            placeholder='제목을 입력하세요'
            onChange={bookNameInput}
          />
          <InputText
            name='author'
            type='text'
            placeholder='지은이를 입력하세요'
            onChange={authorInput}
            style={{ margin: "1.2rem 0" }}
          />
          <InputTextGenre as='select' onChange={genreInput}>
            <option value='select'>카테고리 선택</option>
            <option value='경제 경영'>경제 경영</option>
            <option value='IT 모바일'>IT 모바일</option>
            <option value='가정 살림'>가정 살림</option>
            <option value='건강 취미'>건강 취미</option>
            <option value='사회 정치'>사회 정치</option>
            <option value='인문'>인문</option>
          </InputTextGenre>
          <div style={{ margin: "1rem 0 0 0" }}>
            <StarNumber
              name='rating'
              rating={rating}
              setRating={setRating}
              style={{ margin: "2rem 0 0 0" }}
            />
          </div>
        </InputTexts>
      </InputForms>
      <Textareas>
        <Textarea name='recordContent' onChange={inputTextArea} />
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
              backgroundColor: "#4dac27",
              color: "#ffffff",
            }}
            type='submit'
          >
            기록하기
          </Button>
        </Buttons>
      </Textareas>
    </form>
  );
}

const InputForms = styled.div`
  margin: 4rem 0;
  display: flex;
`;
const InputTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;
const InputText = styled.input`
  width: 15rem;
  padding: 0.7rem;
  border: 1px solid #888888;
  border-radius: 2px;
`;
const Textareas = styled.div`
  display: flex;
  flex-direction: column;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 30rem;
  max-height: 40rem;
  font-size: 1.3rem;
  resize: none;
  border: 1px solid;
  border-radius: 2px;
  padding: 1.2rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
`;
const Button = styled.button`
  width: 100px;
  height: 45px;
  padding: 0 24px;
  border-radius: 2px;
  cursor: pointer;
`;
const InputTextGenre = styled(InputText)`
  width: 100%;
`;
