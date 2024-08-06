import styled from "styled-components";

export default function LoginIcons() {
  return (
    <LoginIconDiv>
        <IconLight src="public\images\Group 12.png" alt="LogInIcon" />
        <IconPerson src="public\images\Group 15.png" alt="LogInIconPerson" />
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