import styled from "styled-components";

export default function LoginIcons() {
  return (
    <LoginIconDiv>
        <IconLight src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/0e3b4e1f-e319-4c08-b618-bf77b2dfe771" alt="LogInIcon" />
        <IconPerson src="https://github.com/JNU-econovation/LIB_FE/assets/144216731/e4d3315c-1ec9-4709-9ccb-1d661e1c9a80" alt="LogInIconPerson" />
    </LoginIconDiv>
  )
}
const LoginIconDiv = styled.div`
  height: 100%;
  width: 30rem;
  background: #6ea57e;
`;
const IconLight = styled.img`
  width: 270px;
  margin: -1rem 4rem 0;
`;
const IconPerson = styled.img`
  width: 550px;
  margin: 0 7rem;
`;