import LoginIcons from "../components/LogIn/LoginIcons";
import LoginForm from "../components/LogIn/LoginForm";
import { LoginFormWrapper, LoginPageDiv } from "../styles/Login/LoginLayout";

export default function LogInPage() {
  return (
    <LoginPageDiv>
      <LoginIcons />
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
    </LoginPageDiv>
  );
}
