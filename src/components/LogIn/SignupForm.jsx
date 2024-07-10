import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";

import {
  LoginForm,
  LoginFormButton,
  LoginFormInput,
  SelectGenres,
  SignupText,
  ErrorText,
  ConfirmButton,
  LoginFormInputConfirm,
  SignupTextDiv,
} from "../../styles/Login/LoginForm";
import { RiArrowDownSLine } from "react-icons/ri";
import { Search } from "../Header";

export default function SignupForm({ display, buttonText }) {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const navigator = useNavigate();

  // watch를 이용해 실시간으로 input값을 저장.
  const id = watch("id");
  const password = watch("password");
  const passwordConfirm = watch("passwordCheck");
  const nickName = watch('nickName')

  // 사용자가 입력한 input 값이 정규식과 맞는지를 Boolean 값으로 반환.
  const isIdInvalid = id && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(id);
  const isPasswordInvalid =
    password &&
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/.test(
      password
    );
  const isPasswordConfirmInvalid =
    passwordConfirm !== "" && passwordConfirm !== password;
  
  const onClick = () => {
    console.log(id);
    console.log(nickName);
  }
  
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axiosInstance.post("/members/join", data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error(error);
    }
    // navigator("/");
  }

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <label error={errors.id || isIdInvalid}>아이디</label>
      <SignupText>영문, 숫자만을 포함한 아이디를 입력해주세요.</SignupText>
      <div>
        <LoginFormInputConfirm
          type="text"
          error={errors.id || isIdInvalid}
          {...register("id", {
            required: "필수 입력 항목입니다.",
          })}
        />
        <ConfirmButton onClick={onClick}>중복 확인</ConfirmButton>
      </div>
      {(errors.id || isIdInvalid) && (
        <ErrorText>{errors.id?.message || "양식이 알맞지 않습니다."}</ErrorText>
      )}

      <label error={errors.password || isPasswordInvalid}>비밀번호</label>
      <SignupText>
        영문, 숫자, 특수기호(@!%*#?&)만을 포함한 8자 이상의 비밀번호를
        입력해주세요.
      </SignupText>
      <LoginFormInput
        type="password"
        error={errors.password || isPasswordInvalid}
        {...register("password", {
          required: "필수 입력 항목입니다.",
        })}
      />
      {(errors.password || isPasswordInvalid) && (
        <ErrorText>
          {errors.password?.message || "양식이 알맞지 않습니다."}
        </ErrorText>
      )}

      <label error={errors.passwordConfirm || isPasswordConfirmInvalid}>
        비밀번호 확인
      </label>
      <LoginFormInput
        type="password"
        error={errors.passwordConfirm || isPasswordConfirmInvalid}
        {...register("passwordCheck", {
          required: "필수 입력 항목입니다.",
          validate: (value) => value === password,
        })}
      />
      {(errors.passwordConfirm || isPasswordConfirmInvalid) && (
        <ErrorText>
          {errors.passwordConfirm?.message || "비밀번호와 맞지 않습니다."}
        </ErrorText>
      )}

      <label error={errors.nickName}>닉네임</label>
      <div>
        <LoginFormInputConfirm
          type="text"
          placeholder="ex) 김기록"
          error={errors.nickName}
          {...register("nickName", { required: "필수 입력 항목입니다." })}
        />
        <ConfirmButton onClick={onClick}>중복 확인</ConfirmButton>
      </div>
      {errors.nickName && <ErrorText>{errors.nickName.message}</ErrorText>}

      <label error={errors.genres}>선호하는 카테고리</label>
      <Search>
        <SelectGenres
          error={errors.genres}
          {...register("category", { required: true })}
        >
          <option value="select">카테고리 선택</option>
          <option value="경제 경영">경제 경영</option>
          <option value="모바일">IT 모바일</option>
          <option value="가정 살림">가정 살림</option>
          <option value="건강 취미">건강 취미</option>
          <option value="사회 정치">사회 정치</option>
          <option value="인문">인문</option>
        </SelectGenres>
        <RiArrowDownSLine
          style={{
            fontSize: "1.5rem",
            marginLeft: "-3rem",
          }}
        />
      </Search>
      {errors.genres && <ErrorText>필수 입력 항목입니다.</ErrorText>}

      <div style={{ display: "flex" }}>
        <div>
          <label error={errors.goalRecord}>목표 기록 수</label>
          <LoginFormInput
            type="number"
            error={errors.goalRecord}
            {...register("goalNumber", { required: true })}
          />
          {errors.goalRecord && <ErrorText>필수 입력 항목입니다.</ErrorText>}
        </div>

        <div>
          <label error={errors.resetPeriod}>초기화 주기</label>
          <Search style={{ marginRight: "1.5rem" }}>
            <SelectGenres
              style={{ width: "10rem" }}
              error={errors.resetPeriod}
              {...register("resetCycle", { required: true })}
            >
              <option value="">초기화 주기</option>
              <option value="30">30일</option>
              <option value="60">60일</option>
              <option value="90">90일</option>
            </SelectGenres>
            <RiArrowDownSLine
              style={{
                fontSize: "1.5rem",
                marginLeft: "-3rem",
              }}
            />
          </Search>
          {errors.resetPeriod && <ErrorText>필수 입력 항목입니다.</ErrorText>}
        </div>
      </div>

      <LoginFormButton style={{ margin: "0.5rem 0" }}>
        {buttonText}
      </LoginFormButton>

      <SignupTextDiv display={display}>
        <Link to={"/log-in"}>
          <span style={{ color: "#000000", cursor: "pointer" }}>
            회원가입을 하셨다면
          </span>
        </Link>
      </SignupTextDiv>
    </LoginForm>
  );
}
