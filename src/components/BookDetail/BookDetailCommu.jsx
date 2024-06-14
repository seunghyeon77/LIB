import styled from "styled-components";
import { TitleText } from "../../styles/Main/BookStyle";
import { FlexCenter } from "../../styles/PageLayout";
import { LoginFormInput } from "../../styles/Login/LoginForm";
import { useState } from "react";
import { MoreButton } from "../MyRecord/MyStudyWrapper";
import PresentDate from "../PresentDate";

export default function BookDetailCommu() {
  const [commuInput, setCommuInput] = useState(""); // 커뮤니티 input창 저장
  const [commuInputs, setCommuInputs] = useState([]); // 커뮤니티 input값들을 배열로 저장
  const [isShowbutton, setIsShowbutton] = useState(false);

  const inputValueOnchange = (event) => {
    setCommuInput(event.target.value);
  };

  const buttonValueOnclick = (event) => {
    event.preventDefault();
    if (commuInput.trim() === "") {
      return;
    }
    setCommuInputs([...commuInputs, commuInput]); // 기존 배열에 commuInput 값만 넣어준다.
    setCommuInput(""); // input 창 초기화
  };

  const displayInputs = !isShowbutton ? commuInputs.slice(0, 3) : commuInputs
  return (
    <div>
      <div>
        <TitleText style={{ margin: "1.9rem 2rem" }}>커뮤니티</TitleText>
        <FlexCenterDiv>
          {displayInputs.map((input, index) => (
              <CommuDiv key={index}>
                <h4 style={{ margin: "0.5rem 0" }}>{"LIB 님"}</h4>{" "}
                {/* 닉네임 가져와야함 */}
                <CommuContent>
                  <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
                    {input}
                  </p>
                  <CommuContentDate>
                    <PresentDate />
                  </CommuContentDate>
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
              type="text"
              placeholder="다양한 생각을 남겨보세요"
              onChange={inputValueOnchange}
              value={commuInput} // input 값을 state와 동기화
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
`;

const CommuButton = styled.button`
  margin-left: 0.6rem;
  padding: 1rem;
  background-color: #539165;
  font-size: 1rem;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;
