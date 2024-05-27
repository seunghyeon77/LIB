import { SlMagnifier } from "react-icons/sl";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <HeaderAll>
        <HeaderNav>
          <Link to={"/"}>
            <HeaderLogo>
              <img src="public\기록의_서재_로고-removebg-preview.png" alt="logo" style={{width: '100%', height: '100%'}}/>
            </HeaderLogo>
          </Link>
          <HeaderUrls>
            <Link to={"/my-record"}>
              <HeaderUrl>나의 기록</HeaderUrl>
            </Link>
            <Link to={"/record"}>
              <HeaderUrl>기록하기</HeaderUrl>
            </Link>
          </HeaderUrls>
          <Search>
            <Input type="text" placeholder="검색어를 입력하세요" />
            <SlMagnifier
              style={{
                fontSize: "1.2rem",
                marginLeft: "-2.2rem", 
              }}
            />
          </Search>
          <HeaderUrls>
            <Link to={"/log-in"}>
              <HeaderUrl>로그인</HeaderUrl>
            </Link>
            <Link to={"/sign-up"}>
              <HeaderUrl>회원가입</HeaderUrl>
            </Link>
          </HeaderUrls>
        </HeaderNav>
      </HeaderAll>
      <Outlet />
    </div>
  );
}

const HeaderAll = styled.header`
  width: 100%;
  height: 6rem;
  border-bottom: 0.06rem solid;
  background-color: #ffffff;
`;
const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
const HeaderLogo = styled.div`
  width: 11rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  cursor: pointer;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  width: 26.25rem;
  height: 2.5rem;
  border: 1.4px solid #4eac27;
  border-radius: 7px;
  margin: 0;
  padding: 0  1rem;
  &::placeholder {
    font-size: 1rem;
  }
`;
const HeaderUrls = styled.div`
  margin: 0 5rem;
  display: flex;
  justify-content: center;
`;
const HeaderUrl = styled.div`
  padding: 0 1.2rem;
  color: #000000;
  cursor: pointer;
  &:hover {
    color: #4e4d4d;
  }
`;
