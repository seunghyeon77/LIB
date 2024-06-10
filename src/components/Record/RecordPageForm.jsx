import styled from "styled-components";
import StarNumber from "../starNumber";
import Bookimg from "./Bookimg";

export default function RecordPageForm() {
  return (
    <form>
      <InputForms>
        <Bookimg />
        <InputTexts>
          <InputText type="text" placeholder="제목을 입력하세요" />
          <InputText type="text" placeholder="지은이를 입력하세요" />
          <InputText type="text" placeholder="장르를 입력하세요" />
          <StarNumber />
        </InputTexts>
      </InputForms>
      <Textareas>
        <Textarea />
        <Buttons>
          <Button
            style={{ border: "1px solid #888888", backgroundColor: "#ffffff" }}
          >
            취소하기
          </Button>
          <Button
            style={{
              border: "1px solid",
              backgroundColor: "#539165",
              color: "#ffffff",
            }}
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
`
const Button = styled.button`
  margin: 1.2rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  cursor: pointer;
`
