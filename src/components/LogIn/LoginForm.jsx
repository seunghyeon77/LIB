import { Link } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idInput = (event) => {
    setId(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id,
      password
    }

    try {
      const response = await axiosInstance.post("/members/login", data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error(error);
    }
    // navigator("/");
  }
  const navigator = useNavigate();

  return (
    <LoginFormDiv style={{ height: "370px" }}>
      <LoginFormTitles>
        <LoginFormTitle>로그인</LoginFormTitle>
        <LoginFormContent>여러분들만의 서재를 만들어보세요.</LoginFormContent>
      </LoginFormTitles>
      <LoginForm onSubmit={handleSubmit}>
        <label>아이디</label>
        <LoginFormInput
          type="text"
          placeholder="아이디 입력"
          onChange={idInput}
        />
        <label>비밀번호</label>
        <LoginFormInput
          type="password"
          placeholder="비밀번호 입력"
          onChange={passwordInput}
        />

        <LoginFormButton style={{ margin: "0.5rem 0" }}>로그인</LoginFormButton>
        <SignupTextDiv style={{ display: "flex" }}>
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
