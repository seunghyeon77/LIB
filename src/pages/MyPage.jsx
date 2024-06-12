import SignupForm from "../components/LogIn/SignupForm";
import { LoginFormDiv } from "../styles/Login/LoginForm";
import { LoginFormWrapper } from "../styles/Login/LoginLayout";

export default function MyPage() {
  return (
    <LoginFormWrapper>
      <LoginFormDiv style={{ marginTop: "5.5rem" }}>
        <SignupForm display = 'none' buttonText = '수정하기' />
      </LoginFormDiv>
    </LoginFormWrapper>
  );
}
