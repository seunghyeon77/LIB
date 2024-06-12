import { Link } from "react-router-dom";
import {
  LoginForm,
  LoginFormButton,
  LoginFormContent,
  LoginFormDiv,
  LoginFormInput,
  LoginFormTitle,
  LoginFormTitles,
  SignupTextDiv,
} from "../../styles/Login/LoginForm";

export default function LoginForms() {
  return (
    <LoginFormDiv style={{height: '370px'}}>
      <LoginFormTitles>
        <LoginFormTitle>로그인</LoginFormTitle>
        <LoginFormContent>여러분들만의 서재를 만들어보세요.</LoginFormContent>
      </LoginFormTitles>
      <LoginForm>
        <label>아이디</label>
        <LoginFormInput type="text" placeholder="아이디 입력"/>
        <label>비밀번호</label>
        <LoginFormInput
          type="password"
          placeholder="비밀번호 입력"
        />

        <LoginFormButton style={{margin: '0.5rem 0'}}>로그인</LoginFormButton>
        <SignupTextDiv style={{display: 'flex'}}>
          <Link to={"/sign-up"}>
            <span style={{ color: "#000000", cursor: "pointer" }}>
              회원가입을 안 하셨다면
            </span>
          </Link>
        </SignupTextDiv>
      </LoginForm>
    </LoginFormDiv>
  );
}
