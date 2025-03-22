import styled from "styled-components";

export const Book = styled.div`
  margin: 8rem 0;
`;
export const BookInfos = styled.div`
  display: flex;
  align-items: center;
  height: 25rem;
  width: 100%;
  background-color: #ffffff;
  border: 0.5px solid #6e6e6e;
  border-radius: 3px;
`;
export const BookInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
`;
// 책 이미지 크기
export const BookInfoImg = styled.img`
  width: 11rem;
  height: 15rem;
  border: 0.5px solid #6e6e6e;
`;
export const BookInfoText = styled.div`
  display: flex;
  flex-flow: nowrap column;
  margin: 2px 0;
`;
export const BookTitle = styled.span`
  font-size: 1.1rem;
  margin: 0.7rem 0;
`;
export const BookInfoGenre = styled.span`
  font-size: 1.5rem;
  margin: 1.5rem 0;
  color: #969696;
`;
export const BookWriter = styled.span`
  font-size: 0.8rem;
  opacity: 0.5;
`;
// 컴포넌트별 이름 공통 스타일
export const TitleText = styled.h3`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
  font-size: 1.5rem;
`;
export const Img = styled.img`
  width: 2.2rem;
  height: 1.7rem;
`;
// 5권 책들 정렬 및 기본 마진
export const AiBooks = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
export const SlickItem = styled.div`
  padding: 1.3rem;
`;
