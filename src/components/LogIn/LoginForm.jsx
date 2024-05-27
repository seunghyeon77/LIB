import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LoginForms() {
  return (
    <LoginFormDiv>
      <LoginFormTitles>
        <LoginFormTitle>로그인</LoginFormTitle>
        <LoginFormContent>여러분들만의 서재를 만들어보세요.</LoginFormContent>
      </LoginFormTitles>
      <LoginForm>
        <label htmlFor="formID">아이디</label>
        <LoginFormInput type="text" placeholder="아이디 입력" id="formId" />
        <label htmlFor="formPass">비밀번호</label>
        <LoginFormInput
          type="password"
          placeholder="비밀번호 입력"
          id="formPass"
        />
        <LoginFormButton>로그인</LoginFormButton>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to={"/sign-up"}>
            <span style={{ color: "#000000", cursor: "pointer" }}>
              회원가입을 안 하셨다면
            </span>
          </Link>
        </div>
      </LoginForm>
    </LoginFormDiv>
  );
}
const LoginFormDiv = styled.div`
  width: 28rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoginFormTitles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const LoginFormTitle = styled.h3`
  font-size: 1.5rem;
`;
const LoginFormContent = styled.span`
  font-size: 1.3rem;
  margin: 1.2rem 0;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const LoginFormInput = styled.input`
  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
`;
const LoginFormButton = styled.button`
  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  background-color: #539165;
  color: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
`;
