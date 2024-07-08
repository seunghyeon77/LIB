import styled, { css } from "styled-components";

export const LoginFormDiv = styled.div`
  width: 28rem;
  height: 50rem;
`;
export const LoginFormTitles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const LoginFormTitle = styled.h3`
  font-size: 1.5rem;
`;
export const LoginFormContent = styled.span`
  font-size: 1.3rem;
  margin: 1.2rem 0;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const LoginFormInput = styled.input`
  margin: 0.8rem 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
  ${(props) =>
    props.error &&
    css`
      border-color: rgb(255, 119, 119);
    `}
`;
export const LoginFormInputConfirm = styled(LoginFormInput)`
  width: 19.3rem;
`
export const ConfirmButton = styled.button`
  margin: 0.5rem 0 0.5rem 0.4rem;
  padding: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
  cursor: pointer;
`
export const LoginFormButton = styled(ConfirmButton)`
  background-color: #539165;
  color: #ffffff;
`;
export const SignupTextDiv = styled.div`
  display: ${(props) => props.display};
  justify-content: flex-end;
`
export const SelectGenres = styled.select`
  width: 100%;
  margin: 0.8rem 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
  appearance: none;
  select::-ms-expand{
    display:none;
  }
  ${(props) =>
    props.error &&
    css`
      border-color: rgb(255, 119, 119);
    `}
`;
export const SignupText = styled.span`
  margin: 0.6rem 0;
  font-size: 0.8rem;
  color: rgb(130, 140, 148);
`;
export const ErrorText = styled.p`
  margin: 0 0 0.3rem;
  font-size: 13px;
  color: rgb(255, 119, 119);
`;
