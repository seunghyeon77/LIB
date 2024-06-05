import LoginIcons from "../components/LogIn/LoginIcons";
import {
  LoginFormContent,
  LoginFormDiv,
  LoginFormTitle,
  LoginFormTitles,
} from "../styles/Login/LoginForm";
import { LoginFormWrapper, LoginPageDiv } from "../styles/Login/LoginLayout";
import SignupForm from "../components/LogIn/SignupForm";

export default function SignUpPage() {
  return (
    <LoginPageDiv>
      <LoginIcons />
      <LoginFormWrapper>
        <LoginFormDiv style={{height: '800px'}}>
          <LoginFormTitles>
            <LoginFormTitle>회원가입</LoginFormTitle>
            <LoginFormContent>
              여러분들만의 서재를 만들어보세요.
            </LoginFormContent>
          </LoginFormTitles>
          <SignupForm />
        </LoginFormDiv>
      </LoginFormWrapper>
    </LoginPageDiv>
  );
}
