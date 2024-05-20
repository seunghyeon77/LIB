import styled from "styled-components";

export default function RecordPageForm() {
  return (
    <form>
      <InputForms>
        <AddFile>
          <AddFileText htmlFor="addFile">사진 추가</AddFileText>
          <InputFile type="file" accept="image/*" id="addFile" />
        </AddFile>
        <InputTexts>
          <InputText type="text" placeholder="제목을 입력하세요" />
          <InputText type="text" placeholder="지은이를 입력하세요" />
          <InputText type="text" placeholder="장르를 입력하세요" />
          <p>별점</p>
        </InputTexts>
      </InputForms>
      <Textareas>
        <Textarea />
        <Buttons>
          <ButtonDel>취소하기</ButtonDel>
          <ButtonRec>기록하기</ButtonRec>
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
const AddFile = styled.div`
  width: 9rem;
  height: 12rem;
  background-color: #f0f0f0;
`;
const AddFileText = styled.label`
  opacity: 0.6;
  cursor: pointer;
`;
const InputFile = styled.input`
  visibility: hidden;
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
const ButtonDel = styled.button`
  margin: 1.2rem 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #888888;
  border-radius: 7px;
  background-color: #ffffff;
  cursor: pointer;
`;
const ButtonRec = styled.button`
  margin: 1.2rem 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #4eac27;
  border-radius: 7px;
  background-color: #4eac27;
  color: #ffffff;
  cursor: pointer;
`;
