import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import {
  LoginForm,
  LoginFormButton,
  LoginFormInput,
  SelectGenres,
  SignupText,
  ErrorText,
  ConfirmButton,
  LoginFormInputConfirm,
} from "../../styles/Login/LoginForm";
import { RiArrowDownSLine } from "react-icons/ri";
import { Search } from "../Header";

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="formID" error={errors.id}>
        아이디
      </label>
      <SignupText>영문, 숫자를 포함한 아이디를 입력하세요.</SignupText>
      <div>
        <LoginFormInputConfirm
          type="text"
          id="formId"
          error={errors.id}
          {...register("id", {
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
          })}
        />
        <ConfirmButton>확인</ConfirmButton>
      </div>
      {errors.id && (
        <ErrorText>
          {errors.id.type === "required"
            ? "필수 입력 항목입니다."
            : "양식이 알맞지 않습니다."}
        </ErrorText>
      )}

      <label htmlFor="formPass" error={errors.password}>
        비밀번호
      </label>
      <SignupText>
        영문, 숫자, 특수기호(@!%*#?&)를 포함한 8자 이상의 비밀번호를 입력하세요.
      </SignupText>
      <LoginFormInput
        type="password"
        id="formPass"
        error={errors.password}
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
        })}
      />
      {errors.password && (
        <ErrorText>
          {errors.password.type === "required"
            ? "필수 입력 항목입니다."
            : "양식이 알맞지 않습니다."}
        </ErrorText>
      )}

      <label htmlFor="formPassCheck" error={errors.passwordConfirm}>
        비밀번호 확인
      </label>
      <LoginFormInput
        type="password"
        id="formPassCheck"
        error={errors.passwordConfirm}
        {...register("passwordConfirm", {
          required: true,
          validate: (value) => value === password.current,
        })}
      />
      {errors.passwordConfirm && (
        <ErrorText>
          {errors.passwordConfirm.type === "required"
            ? "필수 입력 항목입니다."
            : "비밀번호와 맞지 않습니다."}
        </ErrorText>
      )}

      <label htmlFor="formNickname" error={errors.nickName}>
        닉네임
      </label>
      <div>
        <LoginFormInputConfirm
          type="text"
          id="formNickname"
          placeholder="ex) 김기록"
          error={errors.nickName}
          {...register("nickName", { required: true })}
        />
        <ConfirmButton>확인</ConfirmButton>
      </div>
      {errors.nickName && <ErrorText>필수 입력 항목입니다.</ErrorText>}

      <label htmlFor="formgenres" error={errors.genres}>
        선호하는 카테고리
      </label>
      <Search>
        <SelectGenres
          id="formgenres"
          error={errors.genres}
          {...register("genres", { required: true })}
        >
          <option value="">카테고리 선택</option>
          {/* 카테고리들을 가져와서 추가 */}
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
          <label htmlFor="formGoalRecord" error={errors.goalRecord}>
            목표 기록 수
          </label>
          <LoginFormInput
            type="number"
            id="formGoalRecord"
            error={errors.goalRecord}
            {...register("goalRecord", { required: true })}
          />
          {errors.goalRecord && <ErrorText>필수 입력 항목입니다.</ErrorText>}
        </div>

        <div>
          <label htmlFor="formReset" error={errors.resetPeriod}>
            초기화 주기
          </label>
          <Search style={{marginRight: '1.5rem'}}>
            <SelectGenres
              style={{width: '10rem'}}
              id="formReset"
              error={errors.resetPeriod}
              {...register("resetPeriod", { required: true })}
            >
              <option value="">초기화 주기</option>
              <option value="30">30일</option>
              <option value="60">60일</option>
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

      <LoginFormButton type="submit" style={{ margin: "0.5rem 0" }}>
        가입하기
      </LoginFormButton>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to={"/log-in"}>
          <span style={{ color: "#000000", cursor: "pointer" }}>
            회원가입을 하셨다면
          </span>
        </Link>
      </div>
    </LoginForm>
  );
}
