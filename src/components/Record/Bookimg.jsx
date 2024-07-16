import { useState } from "react";
import styled from "styled-components";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../api/awsImages";

export default function Bookimg({ setBookCover, bookCover }) {
  const [isLoading, setIsLoading] = useState(false);

  const reImgSelect = () => {
    setBookCover("");
  };

  const handleUpload = async (file) => {
    setIsLoading(true);

    const params = {
      Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
      Key: `${file.name}`,
      Body: file,
      ACL: "public-read",
    };

    try {
      const command = new PutObjectCommand(params);
      const response = await s3Client.send(command);
      console.log("사진 업로드 성공", response);

      const imageUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
      setBookCover(imageUrl);
      setIsLoading(false);
    } catch (err) {
      console.error("Error uploading file:", err);
      setIsLoading(false);
    }
  };

  return (
    <AddFile>
      {isLoading ? (
        <AddFileText>사진 추가 중...</AddFileText>
      ) : (
        <>
          {bookCover ? (
            <Img src={bookCover} alt="책 이미지" onClick={reImgSelect} />
          ) : (
            <AddFileText htmlFor="addFile">사진 추가</AddFileText>
          )}
          <InputFile
            type="file"
            id="addFile"
            accept="image/*"
            onChange={(e) => handleUpload(e.target.files[0])}
          />
        </>
      )}
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
