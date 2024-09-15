import { SlMagnifier } from "react-icons/sl";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";

export default function Header() {
  const [headerId, setHeaderId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const onClick = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const ClickToLogin = () => {
    alert("로그인 후 이용가능한 서비스입니다.");
    navigate("/log-in");
  };

  const headerIdGet = async () => {
    try {
      const response = await axiosInstance.get(`/members/`);
      setHeaderId(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    headerIdGet();
  }, []);

  const searchInputFun = (e) => {
    setSearchInput(e.target.value);
  };

  const searchInputGet = async () => {
    try {
      const response = await axiosInstance.get(`/search?input=${searchInput}`);
      navigate(`search/${searchInput}`, { state: response.data.response });
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const clearSearchInput = () => {
    setSearchInput("");
  };

  return (
    <div>
      <HeaderAll>
        <HeaderNav>
          <Link to={"/"}>
            <HeaderLogo>
              <img
                src="public\images\기록의 서재.png"
                alt="logo"
                style={{ width: "90%", height: "90%" }}
              />
            </HeaderLogo>
          </Link>
          <Search style={{ margin: "0 2.3rem" }}>
            <Input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchInput}
              onChange={searchInputFun}
            />
            <div style={{marginLeft: '-5rem'}}>
              {searchInput ? (
                <TiDelete
                  style={{
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    marginRight: "13px",
                    visibility: "visible",
                  }}
                  onClick={clearSearchInput}
                />
              ) : (
                <TiDelete
                  style={{
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    marginRight: "13px",
                    visibility: "hidden",
                  }}
                  onClick={clearSearchInput}
                />
              )}
              <SlMagnifier
                style={{
                  fontSize: "1.6rem",
                  cursor: "pointer",
                }}
                onClick={searchInputGet}
              />
            </div>
          </Search>
          <HeaderUrls style={{ margin: "0 0.5rem" }}>
            {accessToken ? (
              <HeaderUrls style={{ marginLeft: "2rem" }}>
                <HeaderUrls style={{ marginRight: "1.5rem" }}>
                  <Link to={"/my-record"}>
                    <HeaderUrl>나의 기록</HeaderUrl>
                  </Link>
                  <Link to={"/records"}>
                    <HeaderUrl>기록하기</HeaderUrl>
                  </Link>
                </HeaderUrls>
                <Link to={"/my-page"}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#000000",
                      margin: " 0 8px 0 15px",
                    }}
                  >
                    {" "}
                    {headerId.nickname} 님{" "}
                  </span>
                </Link>
                <HeaderUrlLogin as={"p"} style={{}} onClick={onClick}>
                  로그아웃
                </HeaderUrlLogin>
              </HeaderUrls>
            ) : (
              <div style={{ display: "flex", marginLeft: "2.3rem" }}>
                <HeaderUrls>
                  <HeaderUrl onClick={ClickToLogin}>나의 기록</HeaderUrl>
                  <HeaderUrl onClick={ClickToLogin}>기록하기</HeaderUrl>
                </HeaderUrls>
                <Link to={"/log-in"}>
                  <HeaderUrlLogin as={"p"}>로그인</HeaderUrlLogin>
                </Link>
              </div>
            )}
          </HeaderUrls>
        </HeaderNav>
      </HeaderAll>
      <Outlet />
    </div>
  );
}

const HeaderAll = styled.header`
  width: 100%;
  height: 6.6rem;
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
  width: 13rem;
  height: 4rem;
  margin: 0 3rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  cursor: pointer;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
`;
const Input = styled.input`
  width: 27rem;
  height: 2.8rem;
  margin: 0;
  border: 1.5px solid #48b11b;
  padding: 0 1rem;
  font-size: 1.1rem;
  &::placeholder {
    font-size: 1.1rem;
  }
`;
const HeaderUrls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderUrl = styled.div`
  margin: 0 1rem;
  font-size: 1.1rem;
  color: #000000;
  cursor: pointer;
  &:hover {
    color: #393939;
  }
`;
const HeaderUrlLogin = styled(HeaderUrl)`
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #ffffff;
  background: #434343;
  border-radius: 10px;
  &:hover {
    color: #ffffff;
    background-color: #535353;
  }
`;
