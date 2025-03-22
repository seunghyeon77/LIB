import { TitleText } from "../../styles/Main/BookStyle";
import { FlexCenter } from "../../styles/PageLayout";
import { LoginFormInput } from "../../styles/Login/LoginForm";

import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { MoreButton } from "../MyRecord/MyStudyWrapper";
import { axiosInstance } from "../../api/axiosInstance";

export default function BookDetailCommu({ bookId }) {
  const [commentContent, setcommentContent] = useState(""); // 커뮤니티 input창 저장
  const [commuInputs, setCommuInputs] = useState([]); // 커뮤니티 input값들을 배열로 저장
  const [isShowbutton, setIsShowbutton] = useState(false);

  const inputValueOnchange = (event) => {
    setcommentContent(event.target.value);
  };

  const buttonValueOnclick = (event) => {
    event.preventDefault();

    const data = {
      commentContent,
    };

    if (commentContent.trim() === "") {
      return;
    } else {
      const inputValue = async () => {
        try {
          await axiosInstance.post(`/comments/${bookId}`, data);
          setcommentContent("");
          alert("댓글이 등록되었습니다 :)");
          console.log("성공", data);
          await commentApi();
        } catch (error) {
          console.error(error);
        }
      };
      inputValue();
    }
  };

  const commentApi = async () => {
    try {
      const response = await axiosInstance.get(`/comments/${bookId}`);
      setCommuInputs(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    commentApi();
  }, []);

  const buttonDel = async (commentId) => {
    try {
      await axiosInstance.delete(`/comments/${commentId}`);
      alert("기록이 삭제되었습니다 :)");
      setCommuInputs((prevInputs) =>
        prevInputs.filter((comment) => comment.commentId !== commentId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const displayInputs = !isShowbutton ? commuInputs.slice(0, 3) : commuInputs;
  console.log(displayInputs);
  return (
    <div>
      <div>
        <TitleText style={{ margin: "1.9rem 2rem" }}>커뮤니티</TitleText>
        <FlexCenterDiv>
          {displayInputs.map((displayInput) => (
            <CommuDiv key={displayInput.commentId}>
              <h4 style={{ margin: "0.5rem 0" }}>{displayInput.nickname}</h4>
              <CommuContent>
                <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
                  {displayInput.commentContent}
                </p>
                <CommuNickname>
                  <CommuContentDate>
                    {displayInput.createdDate}
                  </CommuContentDate>
                  {displayInput.isOwner === true ? (
                    <button
                      onClick={() => buttonDel(displayInput.commentId)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {/* <FaRegTrashAlt
                        style={{ fontSize: "1.1rem", marginLeft: "10px" }}
                      /> */}
                      <span style={{ color: "#e86a33", marginLeft: "1rem" }}>
                        삭제
                      </span>
                    </button>
                  ) : (
                    <></>
                  )}
                </CommuNickname>
              </CommuContent>
            </CommuDiv>
          ))}
          <FlexCenter>
            {commuInputs.length <= 2 ? (
              ""
            ) : (
              <MoreButtonHover
                onClick={() => {
                  setIsShowbutton(!isShowbutton);
                }}
              >
                {!isShowbutton ? "더보기" : "접기"}
              </MoreButtonHover>
            )}
          </FlexCenter>
          <CommuForm onClick={buttonValueOnclick}>
            <CommuInput
              type='text'
              placeholder='다양한 생각을 남겨보세요'
              onChange={inputValueOnchange}
              value={commentContent} // input 값을 state와 동기화
            />
            <CommuButton>등록</CommuButton>
          </CommuForm>
        </FlexCenterDiv>
      </div>
    </div>
  );
}

const FlexCenterDiv = styled(FlexCenter)`
  flex-direction: column;
`;

const CommuDiv = styled.div`
  width: 50rem;
  margin: 1.2rem;
`;

const CommuNickname = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CommuContent = styled.div`
  padding: 2.5rem 2.5rem 0;
  background-color: rgba(217, 217, 217, 0.2);
  border-radius: 7px;
`;

const CommuContentDate = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 0.7rem;
  padding: 1rem 0;
`;

const MoreButtonHover = styled(MoreButton)`
  margin: 0.5rem;
  padding: 0.5rem 0.7rem;
`;

const CommuForm = styled.form`
  width: 50rem;
`;

const CommuInput = styled(LoginFormInput)`
  width: 85%;
  border-radius: 2px;
`;

const CommuButton = styled.button`
  padding: 1rem;
  background-color: #4dac27;
  font-size: 1rem;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
