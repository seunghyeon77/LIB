import { Link } from "react-router-dom";
import {
  LoginForm,
  LoginFormButton,
  LoginFormInput,
  SelectGenres,
} from "../../styles/Login/LoginForm";

export default function SignupForm() {
  return (
    <LoginForm>
      <label htmlFor="formID">아이디</label>
      <LoginFormInput
        type="text"
        placeholder="6-12자 이내 영문 소문자, 숫자 사용"
        id="formId"
      />
      <label htmlFor="formPass">비밀번호</label>
      <LoginFormInput
        type="password"
        placeholder="8~20자 이내 영문 대/소문자, 숫자, 특수문자만 사용"
        id="formPass"
      />
      <label htmlFor="formPassCheck">비밀번호 확인</label>
      <LoginFormInput type="password" id="formPassCheck" />

      <label htmlFor="formNickname">닉네임</label>
      <LoginFormInput type="text" id="formNickname" placeholder="ex) 김기록" />

      <label htmlFor="formgenres">선호하는 카테고리</label>
      <SelectGenres id="formgenres">
        <option>카테고리 선택</option> {/* 카테고리들은 가지고 와야됌 */}
      </SelectGenres>

      <div style={{ display: "flex" }}>
        <div>
          <label htmlFor="formGoalRecord">목표 기록 수</label>
          <LoginFormInput type="number" id="formGoalRecord" />
        </div>

        <div>
          <label htmlFor="formReset">초기화 주기</label>
          <SelectGenres id="formReset">
            <option>초기화 주기</option>
            <option>30일</option>
            <option>60일</option>
          </SelectGenres>
        </div>
      </div>

      <LoginFormButton>가입하기</LoginFormButton>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to={"/sign-up"}>
          <span style={{ color: "#000000", cursor: "pointer" }}>
            회원가입을 하셨다면
          </span>
        </Link>
      </div>
    </LoginForm>
  );
}
