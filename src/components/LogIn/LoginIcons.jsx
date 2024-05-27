import styled from "styled-components";

export default function LoginIcons() {
  return (
    <LoginIconDiv>
        <IconLight src="src\imgs\로그인아이콘.png" alt="LogInIcon" />
        <IconPerson src="src\imgs\로그인사람아이콘.png" alt="LogInIconPerson" />
    </LoginIconDiv>
  )
}
const LoginIconDiv = styled.div`
  height: 58.2rem;
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