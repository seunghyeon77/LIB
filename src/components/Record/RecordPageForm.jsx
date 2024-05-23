import styled from "styled-components";
import { GoStar } from "react-icons/go";

export default function RecordPageForm() {
  const imgUrl = "src/imgs/icon_star_gray-removebg-preview.png";
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
          <StarsWrapper>
            <span>별점</span>
            <Stars>
              <StarButton>
                <GoStar />
              </StarButton>
              <StarButton>
                <GoStar />
              </StarButton>
              <StarButton>
                <GoStar />
              </StarButton>
              <StarButton>
                <GoStar />
              </StarButton>
              <StarButton>
                <GoStar />
              </StarButton>
            </Stars>
          </StarsWrapper>
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
  padding-top: 1rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
const StarsWrapper = styled.div`
  margin: 0.7rem;
  display: flex;
  align-items: center;
`;
const Stars = styled.div`
  margin: 0 0.5rem;
`;
const StarButton = styled.button`
  width: 25px;
  height: 25px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #4eac27;
  }
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
  border: 1px solid;
  border-radius: 7px;
  background-color: #539165;
  color: #ffffff;
  cursor: pointer;
`;
