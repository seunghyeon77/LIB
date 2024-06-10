import { useState } from "react";
import styled from "styled-components";

export default function Bookimg() {
  const [previewImg, setPreviewImg] = useState(""); // UI적으로 보여줄 미리보기 img

  const previewImgfunc = (e) => {
    const fileImg = e.target.files[0];
    const fileRead = new FileReader();
    fileRead.onload = () => {
      setPreviewImg(fileRead.result);
    };

    if (fileImg) {
      fileRead.readAsDataURL(fileImg);
    }
  };

  const reImgSelect = () => {
    setPreviewImg("");
  };
  
  return (
    <AddFile>
      {previewImg ? (
        <Img src={previewImg} alt="preview 이미지" onClick={reImgSelect} />
      ) : (
        <AddFileText htmlFor="addFile">사진 추가</AddFileText>
      )}
      <InputFile
        type="file"
        id="addFile"
        accept="image/*"
        onChange={previewImgfunc}
      />
    </AddFile>
  );
}
const AddFile = styled.div`
  width: 10.5rem;
  height: 13.5rem;
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
  display: none;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
