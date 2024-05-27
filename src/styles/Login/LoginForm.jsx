import styled from "styled-components";

export const LoginFormDiv = styled.div`
  width: 28rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 0.7rem 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
`;
export const LoginFormButton = styled.button`
  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  background-color: #539165;
  color: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
  cursor: pointer;
`;
export const SelectGenres = styled.select`
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
`
