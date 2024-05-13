import styled from "styled-components";

const InputForms = styled.div`
  margin: 4rem 0;
  display: flex;
`
const AddFile = styled.div`
  width: 9rem;
  height: 12rem;
  background-color: #F0F0F0;
`
const InputFile = styled.input`
  visibility: hidden;
`
const InputTexts = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap column;
`
const InputText = styled.input`
  margin: 0.5rem 1rem;
  padding: 0.5rem;
`
const Textarea = styled.textarea`
  width: 100%;
  
`

export default function RecordPageForm() {
  return (
    <form>
      <InputForms>
        <AddFile>
          <label htmlFor="addFile">사진 추가</label>
          <InputFile type="file" accept="image/*" id="addFile" />
        </AddFile>
        <InputTexts>
          <InputText type="text" placeholder="제목을 입력하세요" />
          <InputText type="text" placeholder="지은이를 입력하세요" />
          <InputText type="text" placeholder="장르를 입력하세요" />
          <span>별점</span>
        </InputTexts>
      </InputForms>
      <textarea />
      <div>
        <button>취소하기</button>
        <button>기록하기</button>
      </div>
    </form>
  );
}
