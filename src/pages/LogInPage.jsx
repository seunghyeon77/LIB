import styled from "styled-components";
import LoginIcons from "../components/LogIn/LoginIcons";
import LoginForm from "../components/LogIn/LoginForm";

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
const LoginPageDiv = styled.div`
  display: flex;
  overflow: hidden;
`;
const LoginFormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;